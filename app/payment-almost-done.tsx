import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useRouter } from 'expo-router';

export default function PaymentAlmostDoneScreen() {
  const router = useRouter();

  useEffect(() => {
    // Transition to the success screen
    const timer = setTimeout(() => {
      router.replace('/payment-success');
    }, 2500);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View style={styles.safeArea}>
      <View style={styles.container}>
        <Image 
          source={require('../assets/images/order-bg.png')}
          style={styles.backgroundImage}
          resizeMode="cover"
        />

        <View style={styles.centerContainer}>
          <Animatable.View 
            animation="zoomIn" 
            duration={800} 
          >
            <View style={styles.iconCircle}>
              <Text style={styles.dollarText}>$</Text>
            </View>
          </Animatable.View>

          <Animatable.Text 
            animation="fadeInUp" 
            duration={600} 
            delay={300}
            style={styles.loadingText}
          >
            Sit tight... we are almost done
          </Animatable.Text>
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
    top: '38%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
    width: '100%',
  },
  iconCircle: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#1a3d1a',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 10,
  },
  dollarText: {
    fontFamily: 'ClashDisplay-Bold',
    fontSize: 32,
    color: '#000000',
    lineHeight: 40,
    marginTop: 4,
  },
  loadingText: {
    fontFamily: 'GeneralSans-Medium',
    fontSize: 16,
    color: '#ffffff',
    marginTop: 32,
    textAlign: 'center',
  },
});
