import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import * as Animatable from 'react-native-animatable';

export default function DigitalWalletsScreen() {
  const router = useRouter();

  return (
    <View style={styles.background}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          
          {/* Top Navigation Bar */}
          <Animatable.View animation="fadeInDown" duration={600} style={styles.navBar}>
            <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
              <Feather name="chevron-left" size={24} color="#ffffff" />
            </TouchableOpacity>
            <Text style={styles.navTitle}>Wallets</Text>
            <View style={styles.navSpacer} />
          </Animatable.View>

          {/* Hero Stacked Cards */}
          <Animatable.View animation="fadeInUp" duration={800} delay={100} style={styles.heroContainer}>
            <View style={styles.stackedCardsContainer}>
              
              {/* Back Card */}
              <LinearGradient 
                colors={['rgba(255,255,255,0.18)', 'rgba(165,243,252,0.28)']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.cardBack}
              />
              
              {/* Middle Card */}
              <LinearGradient 
                colors={['rgba(165,243,252,0.12)', 'rgba(255,255,255,0.22)']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.cardMiddle}
              />
              
              {/* Front Card */}
              <View style={styles.cardFront}>
                <Image 
                  source={require('../assets/images/wallet-card.png')} 
                  style={styles.cardFrontImage} 
                />
                
                {/* Overlay Content */}
                <View style={styles.cardOverlayContent}>
                  <View style={styles.cardLogoRow}>
                    <View style={styles.cardChip} />
                    <Text style={styles.cardLogoText}>$ ZEPHYR</Text>
                  </View>
                  <Text style={styles.cardNumberText}>•••• 8820</Text>
                </View>
              </View>

            </View>

            {/* Success Badge */}
            <Animatable.View animation="zoomIn" duration={500} delay={600} style={styles.successBadgeContainer}>
              <View style={styles.checkmarkCircle}>
                <Feather name="check" size={24} color="#0891b2" />
              </View>
            </Animatable.View>
          </Animatable.View>

          {/* Wallet Messaging */}
          <Animatable.View animation="fadeInUp" duration={800} delay={300} style={styles.walletMessaging}>
            <Text style={styles.headlineText}>YOUR CARD IS READY TO USE.</Text>
            <Text style={styles.subheadText}>
              Start spending securely with Apple Pay while you wait for your physical card.
            </Text>
          </Animatable.View>

          {/* Footer Group */}
          <Animatable.View animation="fadeInUp" duration={800} delay={500} style={styles.footerGroup}>
            <TouchableOpacity style={styles.ctaPill} onPress={() => router.push('/security')}>
              <FontAwesome5 name="apple" size={20} color="#ffffff" />
              <Text style={styles.ctaText}>Add to Apple Wallet</Text>
            </TouchableOpacity>
          </Animatable.View>

        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#0891b2',
  },
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  navBar: {
    flexDirection: 'row',
    height: 56,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navTitle: {
    fontFamily: 'GeneralSans-Semibold',
    fontSize: 16,
    color: '#ffffff',
  },
  navSpacer: {
    width: 40,
    height: 40,
  },
  heroContainer: {
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 24,
    zIndex: 10,
  },
  stackedCardsContainer: {
    width: 342,
    height: 220,
    position: 'relative',
  },
  cardBack: {
    position: 'absolute',
    top: 0,
    left: 41,
    width: 260,
    height: 160,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  cardMiddle: {
    position: 'absolute',
    top: 20,
    left: 21,
    width: 300,
    height: 170,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  cardFront: {
    position: 'absolute',
    top: 40,
    left: 0,
    width: 342,
    height: 180,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
    overflow: 'hidden',
  },
  cardFrontImage: {
    ...StyleSheet.absoluteFill,
    width: '100%',
    height: '100%',
    opacity: 0.5,
    resizeMode: 'cover',
    zIndex: 2,
  },
  cardOverlayContent: {
    ...StyleSheet.absoluteFill,
    padding: 23,
    justifyContent: 'space-between',
    zIndex: 3,
  },
  cardLogoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  cardChip: {
    width: 36,
    height: 24,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  cardLogoText: {
    color: '#03242c',
    fontSize: 14,
    fontFamily: 'GeneralSans-Bold',
  },
  cardNumberText: {
    color: '#03242c',
    fontSize: 16,
    fontFamily: 'GeneralSans-Semibold',
    marginTop: 'auto',
  },
  successBadgeContainer: {
    paddingTop: 24,
    alignItems: 'center',
    zIndex: 20,
  },
  checkmarkCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#ecfeff',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#0891b2',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 5,
  },
  walletMessaging: {
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 24,
    gap: 16,
  },
  headlineText: {
    fontFamily: 'ClashDisplay-Bold',
    fontSize: 32,
    lineHeight: 35,
    color: '#ffffff',
  },
  subheadText: {
    fontFamily: 'GeneralSans-Regular',
    fontSize: 16,
    lineHeight: 22,
    color: 'rgba(255,255,255,0.8)',
  },
  footerGroup: {
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
  ctaPill: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.4)',
    borderRadius: 28,
    height: 56,
    gap: 8,
  },
  ctaText: {
    fontFamily: 'GeneralSans-Semibold',
    fontSize: 15,
    color: '#ffffff',
  },
});
