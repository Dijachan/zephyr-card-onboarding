import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

export default function SecurityScreen() {
  const router = useRouter();

  return (
    <View style={styles.background}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          
          <View style={styles.contentTop}>
            {/* Navigation Row */}
            <View style={styles.navigationRow}>
              <TouchableOpacity onPress={() => router.back()} style={styles.closeButton}>
                <Feather name="x-circle" size={24} color="#0f172a" />
              </TouchableOpacity>
            </View>

            {/* Security Headlines */}
            <View style={styles.securityHeadlines}>
              <Text style={styles.headlineText}>YOUR MONEY.</Text>
              <Text style={styles.headlineText}>ALWAYS SECURE.</Text>
              <Text style={styles.subheadText}>Instantly freeze and unfreeze your card whenever you need.</Text>
            </View>

            {/* Card Freeze Visualizer */}
            <View style={styles.cardFreezeVisualizer}>
              
              {/* Frozen Card */}
              <View style={styles.frozenCard}>
                <LinearGradient 
                  colors={['rgba(209,250,229,0.18)', 'rgba(255,255,255,0.22)']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={StyleSheet.absoluteFill}
                />
                <Image 
                  source={require('../assets/images/frozen-card.png')} 
                  style={styles.frozenCardImage}
                />
                <Text style={styles.frozenBadgeText}>FROZEN</Text>
                <Text style={styles.frozenCardNumber}>•••• 8820</Text>
              </View>

              {/* Lock Action Badge */}
              <View style={styles.lockActionBadge}>
                <Feather name="lock" size={24} color="#0891b2" style={styles.lockIcon} />
              </View>

            </View>
          </View>

          {/* Footer Group */}
          <View style={styles.footerGroup}>
            <TouchableOpacity style={styles.ctaButton} onPress={() => router.push('/order-card')}>
              <Text style={styles.ctaText}>Order your card</Text>
            </TouchableOpacity>
          </View>

        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  contentTop: {
    flex: 1,
  },
  navigationRow: {
    paddingHorizontal: 24,
    height: 56,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  closeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  securityHeadlines: {
    paddingHorizontal: 24,
    marginTop: 12,
    gap: 12,
  },
  headlineText: {
    fontFamily: 'ClashDisplay-Bold',
    fontSize: 34,
    lineHeight: 37.4,
    color: '#0f172a',
  },
  subheadText: {
    fontFamily: 'GeneralSans-Regular',
    fontSize: 16,
    lineHeight: 22.4,
    color: '#64748b',
    marginTop: 12,
  },
  cardFreezeVisualizer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 32, // More padding to give space like design
    gap: 16,
  },
  frozenCard: {
    width: 260,
    height: 160,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#94a3b8',
    borderStyle: 'dashed',
    overflow: 'hidden',
    position: 'relative',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 8,
    backgroundColor: 'white', // Ensure shadow renders
  },
  frozenCardImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
    opacity: 0.22,
    resizeMode: 'cover',
  },
  frozenBadgeText: {
    position: 'absolute',
    top: 19,
    left: 19,
    fontFamily: 'GeneralSans-Bold',
    fontSize: 12,
    color: '#0f172a',
    opacity: 0.75,
  },
  frozenCardNumber: {
    position: 'absolute',
    top: 117,
    left: 19,
    fontFamily: 'GeneralSans-Semibold',
    fontSize: 16,
    color: '#0f172a',
    opacity: 0.75,
  },
  lockActionBadge: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#ecfeff',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 8,
  },
  lockIcon: {
    zIndex: 10,
  },
  footerGroup: {
    paddingHorizontal: 24,
    paddingBottom: 32,
    gap: 24,
  },
  ctaButton: {
    height: 56,
    backgroundColor: 'rgba(229,112,43,0.8)',
    borderRadius: 28,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
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
