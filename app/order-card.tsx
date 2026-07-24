import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function OrderCardScreen() {
  const router = useRouter();

  return (
    <ImageBackground 
      source={require('../assets/images/order-bg.png')} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay} />
      
      <SafeAreaView style={styles.safeArea}>
        {/* Top Header Group */}
        <View style={styles.headerGroup}>
          <View style={styles.navigationRow}>
            <TouchableOpacity onPress={() => router.back()} style={styles.closeButton}>
              <Feather name="x-circle" size={24} color="#0f172a" />
            </TouchableOpacity>
          </View>

          <View style={styles.headlineContainer}>
            <Text style={styles.headlineText}>YOUR CARD,</Text>
            <Text style={styles.headlineText}>YOUR WAY</Text>
            <Text style={styles.subheadText}>You handle the spending, we handle the rest.</Text>
          </View>

          <View style={styles.chevronsContainer}>
            <Feather name="chevron-down" size={20} color="#0891b2" style={styles.chevron1} />
            <Feather name="chevron-down" size={20} color="#0891b2" style={styles.chevron2} />
            <Feather name="chevron-down" size={20} color="#0891b2" style={styles.chevron3} />
          </View>
        </View>

        {/* Footer Group */}
        <View style={styles.footerGroup}>
          <TouchableOpacity style={styles.ctaButton}>
            <Text style={styles.ctaText}>Order your card</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
  safeArea: {
    flex: 1,
    justifyContent: 'space-between',
  },
  headerGroup: {
    paddingTop: 16,
    alignItems: 'center',
    gap: 24,
  },
  navigationRow: {
    width: '100%',
    paddingHorizontal: 24,
    alignItems: 'flex-start',
  },
  closeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headlineContainer: {
    paddingHorizontal: 32,
    alignItems: 'center',
    gap: 12,
  },
  headlineText: {
    fontFamily: 'ClashDisplay-Bold',
    fontSize: 36,
    lineHeight: 40,
    color: '#0f172a',
    textAlign: 'center',
  },
  subheadText: {
    fontFamily: 'GeneralSans-Medium',
    fontSize: 15,
    color: '#64748b',
    textAlign: 'center',
    marginTop: 4,
  },
  chevronsContainer: {
    alignItems: 'center',
    marginTop: 8,
  },
  chevron1: {
    marginBottom: -10,
  },
  chevron2: {
    marginBottom: -10,
    opacity: 0.6,
  },
  chevron3: {
    opacity: 0.3,
  },
  footerGroup: {
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
  ctaButton: {
    backgroundColor: 'rgba(229,112,43,0.85)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
    borderRadius: 28,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  ctaText: {
    fontFamily: 'GeneralSans-Semibold',
    fontSize: 16,
    color: '#ffffff',
  },
});
