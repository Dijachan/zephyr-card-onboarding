import React, { useEffect } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useRouter } from 'expo-router';

export default function ProcessingScreen() {
  const router = useRouter();

  useEffect(() => {
    // Automatically transition to order confirmation after 3.5 seconds
    const timer = setTimeout(() => {
      router.replace('/order-confirmation');
    }, 3500);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View style={styles.safeArea}>
      <View style={styles.container}>
        {/* Reliable absolute image instead of ImageBackground */}
        <Image 
          source={require('../assets/images/order-bg.png')}
          style={styles.backgroundImage}
          resizeMode="cover"
        />

        {/* Center Icon */}
        <Animatable.View 
          animation="zoomIn" 
          duration={800} 
          style={styles.centerContainer}
        >
          <View style={styles.iconCircle}>
            <Text style={styles.dollarText}>$</Text>
          </View>
        </Animatable.View>
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
  },
  iconCircle: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#1a3d1a', // Matches design exactly
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
});
