import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, ScrollView, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import * as Animatable from 'react-native-animatable';

export default function PricingScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Navigation Row */}
        <View style={styles.navigationRow}>
          <TouchableOpacity style={styles.closeButton} onPress={() => router.navigate('/(tabs)')}>
            <Feather name="x-circle" size={24} color="#0f172a" />
          </TouchableOpacity>
        </View>

        {/* Scrollable Body */}
        <ScrollView 
          style={styles.scrollArea} 
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Card Visual Container */}
          <Animatable.View animation="fadeInDown" duration={800} delay={100} style={styles.cardVisualContainer}>
            <View style={styles.cardWrapper}>
              <LinearGradient 
                colors={['rgba(207,250,254,0.25)', 'rgba(165,243,252,0.25)']}
                style={StyleSheet.absoluteFill}
              />
              <Image 
                source={require('../assets/images/wallet-card.png')}
                style={styles.cardImage}
              />
              {/* Card Details Overlay */}
              <View style={styles.cardDetailsTop}>
                <View style={styles.chipPlaceholder} />
                <Text style={styles.brandText}>zephyr</Text>
              </View>
              <View style={styles.cardDetailsBottom}>
                <Text style={styles.cardNumber}>•••• 8820</Text>
              </View>
            </View>
          </Animatable.View>

          {/* Headline */}
          <Animatable.View animation="fadeInUp" duration={600} delay={300} style={styles.headlineBlock}>
            <Text style={styles.headlineText}>GET YOUR CARD</Text>
            <Text style={styles.headlineText}>FOR $7.</Text>
            <Text style={styles.subheadText}>
              No subscription - a one-time fee to cover costs.
            </Text>
          </Animatable.View>

          {/* Features Block */}
          <View style={styles.featuresBlock}>
            {/* Feature 1 */}
            <Animatable.View animation="fadeInUp" duration={500} delay={400} style={styles.featureRow}>
              <View style={styles.iconCircle}>
                <Feather name="globe" size={18} color="#ffffff" />
              </View>
              <View style={styles.textColumn}>
                <Text style={styles.featureTitle}>Spend in 150+ currencies</Text>
                <Text style={styles.featureDesc}>One card for spending and withdrawing at the real exchange rate.</Text>
              </View>
            </Animatable.View>

            {/* Feature 2 */}
            <Animatable.View animation="fadeInUp" duration={500} delay={500} style={styles.featureRow}>
              <View style={styles.iconCircle}>
                <Feather name="zap" size={18} color="#ffffff" />
              </View>
              <View style={styles.textColumn}>
                <Text style={styles.featureTitle}>Start spending instantly</Text>
                <Text style={styles.featureDesc}>Card details ready as soon as you order - set up digital wallets too.</Text>
              </View>
            </Animatable.View>

            {/* Feature 3 */}
            <Animatable.View animation="fadeInUp" duration={500} delay={600} style={styles.featureRow}>
              <View style={styles.iconCircle}>
                <Feather name="navigation" size={18} color="#ffffff" />
              </View>
              <View style={styles.textColumn}>
                <Text style={styles.featureTitle}>Travel with your card</Text>
                <Text style={styles.featureDesc}>Get travel tips and help for making the most of your money abroad.</Text>
              </View>
            </Animatable.View>

            {/* Feature 4 */}
            <Animatable.View animation="fadeInUp" duration={500} delay={700} style={styles.featureRow}>
              <View style={styles.iconCircle}>
                <Feather name="dollar-sign" size={18} color="#ffffff" />
              </View>
              <View style={styles.textColumn}>
                <Text style={styles.featureTitle}>Withdraw from ATMs anywhere</Text>
                <Text style={styles.featureDesc}>Withdrawal fees apply if you go over your fee-free limit.</Text>
              </View>
            </Animatable.View>

            {/* Feature 5 */}
            <Animatable.View animation="fadeInUp" duration={500} delay={800} style={styles.featureRow}>
              <View style={styles.iconCircle}>
                <Feather name="bell" size={18} color="#ffffff" />
              </View>
              <View style={styles.textColumn}>
                <Text style={styles.featureTitle}>Get instant notifications</Text>
                <Text style={styles.featureDesc}>See what you've spent and track in-app at home, abroad, and on the go.</Text>
              </View>
            </Animatable.View>

          </View>
        </ScrollView>

        {/* Footer */}
        <Animatable.View animation="fadeInUp" duration={600} delay={900} style={styles.footer}>
          <TouchableOpacity style={styles.ctaButton} onPress={() => router.navigate('/(tabs)')}>
            <Text style={styles.ctaText}>Order your card</Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  navigationRow: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  closeButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollArea: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 40,
  },
  cardVisualContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  cardWrapper: {
    width: 280,
    height: 170,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(8,145,178,0.13)',
    overflow: 'hidden',
  },
  cardImage: {
    ...StyleSheet.absoluteFill,
    width: '100%',
    height: '100%',
    opacity: 0.5,
    resizeMode: 'cover',
  },
  cardDetailsTop: {
    position: 'absolute',
    top: 19,
    left: 19,
    right: 19,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  chipPlaceholder: {
    width: 36,
    height: 24,
    borderRadius: 4,
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
  brandText: {
    fontFamily: 'GeneralSans-Bold',
    fontSize: 12,
    color: '#0f172a',
    opacity: 0.6,
  },
  cardDetailsBottom: {
    position: 'absolute',
    bottom: 19,
    left: 19,
  },
  cardNumber: {
    fontFamily: 'GeneralSans-Semibold',
    fontSize: 14,
    color: '#0f172a',
  },
  headlineBlock: {
    alignItems: 'center',
    marginBottom: 32,
  },
  headlineText: {
    fontFamily: 'ClashDisplay-Bold',
    fontSize: 32,
    color: '#0f172a',
    lineHeight: 36,
  },
  subheadText: {
    fontFamily: 'GeneralSans-Regular',
    fontSize: 15,
    color: '#64748b',
    marginTop: 12,
    textAlign: 'center',
  },
  featuresBlock: {
    gap: 20,
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 16,
  },
  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#0891b2',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },
  textColumn: {
    flex: 1,
    gap: 4,
  },
  featureTitle: {
    fontFamily: 'GeneralSans-Bold',
    fontSize: 15,
    color: '#0f172a',
  },
  featureDesc: {
    fontFamily: 'GeneralSans-Regular',
    fontSize: 13,
    color: '#64748b',
    lineHeight: 18,
  },
  footer: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 8,
    backgroundColor: '#ffffff',
  },
  ctaButton: {
    height: 56,
    backgroundColor: '#e5702b',
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  ctaText: {
    fontFamily: 'GeneralSans-Semibold',
    fontSize: 16,
    color: '#ffffff',
  },
});
