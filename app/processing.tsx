import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useRouter } from 'expo-router';

export default function ProcessingScreen() {
  const router = useRouter();
  const [step, setStep] = useState(1);

  useEffect(() => {
    // Switch to step 2 after 1.5 seconds
    const stepTimer = setTimeout(() => {
      setStep(2);
    }, 1500);

    // Automatically transition to order confirmation after 3.5 seconds
    const redirectTimer = setTimeout(() => {
      router.replace('/order-confirmation');
    }, 3500);

    return () => {
      clearTimeout(stepTimer);
      clearTimeout(redirectTimer);
    };
  }, [router]);

  return (
    <View style={styles.safeArea}>
      <View style={styles.container}>
        {/* Background Image (opacity 30%) */}
        <Image 
          source={require('../assets/images/order-bg.png')}
          style={styles.backgroundImage}
          resizeMode="cover"
        />

        {/* Centered Content */}
        <View style={styles.centerContainer}>
          <Animatable.View 
            animation="zoomIn" 
            duration={800} 
            style={styles.iconCircle}
          >
            <Text style={styles.dollarText}>$</Text>
          </Animatable.View>

          {step === 1 ? (
            <Animatable.Text 
              animation="fadeIn" 
              duration={500} 
              style={styles.loadingText}
            >
              We are processing your payment...
            </Animatable.Text>
          ) : (
            <Animatable.Text 
              animation="fadeIn" 
              duration={500} 
              style={styles.loadingText}
            >
              Sit tight, we are almost done
            </Animatable.Text>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    backgroundColor: '#0f172a',
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
    opacity: 0.3,
  },
  centerContainer: {
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
    gap: 32,
    paddingHorizontal: 32,
  },
  iconCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#0891b2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dollarText: {
    fontFamily: 'ClashDisplay-Bold',
    fontSize: 32,
    color: '#ffffff',
    lineHeight: 40,
    marginTop: 4,
  },
  loadingText: {
    fontFamily: 'GeneralSans-Medium',
    fontSize: 16,
    color: '#e2e8f0',
    textAlign: 'center',
  },
});
