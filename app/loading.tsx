import { useEffect } from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';
import * as Animatable from 'react-native-animatable';

export default function LoadingScreen() {
  const router = useRouter();

  useEffect(() => {
    // Simulate loading, then navigate to order-confirmation
    const timer = setTimeout(() => {
      router.push('/order-confirmation');
    }, 2500);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View style={styles.background}>
      <ImageBackground 
        source={require('../assets/images/zephyr-loading.png')}
        style={styles.imageBackground}
        imageStyle={styles.imageStyle}
      >
        <View style={styles.container}>
          {/* Centered Brand Container */}
          <View style={styles.centeredBrandContainer}>
            <Animatable.View 
              animation="pulse" 
              easing="ease-out" 
              iterationCount="infinite" 
              style={styles.brandLogo}
            >
              <Text style={styles.logoText}>$</Text>
            </Animatable.View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#cccac2', // Warm grey base to mix with the grunge image
  },
  imageBackground: {
    flex: 1,
  },
  imageStyle: {
    opacity: 0.5,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredBrandContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  brandLogo: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#0891b2',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#0891b2',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 8,
  },
  logoText: {
    fontFamily: 'ClashDisplay-Bold',
    fontSize: 32,
    color: '#ffffff',
  },
});
