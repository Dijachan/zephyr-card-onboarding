import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import * as Animatable from 'react-native-animatable';

export default function SecurityScreen() {
  const router = useRouter();

  return (
    <View style={styles.background}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          
          <View style={styles.contentTop}>
            {/* Navigation Row */}
            <Animatable.View animation="fadeInDown" duration={600} style={styles.navigationRow}>
              <TouchableOpacity onPress={() => router.back()} style={styles.closeButton}>
                <Feather name="arrow-left" size={24} color="#0f172a" />
              </TouchableOpacity>
            </Animatable.View>

            {/* Security Headlines */}
            <Animatable.View animation="fadeInUp" duration={800} delay={100} style={styles.securityHeadlines}>
              <Text style={styles.headlineText}>FREEZE IN A TAP.</Text>
              <Text style={styles.subheadText}>
                Don't panic if you misplace your card. You can freeze it instantly in the app.
              </Text>
            </Animatable.View>

            {/* Card Freeze Visualizer */}
            <View style={styles.cardFreezeVisualizer}>
              
              {/* Frozen Card */}
              <Animatable.View animation="zoomIn" duration={1000} delay={300} style={styles.frozenCard}>
                <Image 
                  source={require('../assets/images/wallet-card.png')} 
                  style={styles.frozenCardImage}
                />
                <Text style={styles.frozenBadgeText}>FROZEN</Text>
                <Text style={styles.frozenCardNumber}>•••• 8820</Text>
              </Animatable.View>

              {/* Lock Action Badge */}
              <Animatable.View animation="zoomIn" duration={600} delay={700} style={styles.lockActionBadge}>
                <Feather name="lock" size={24} color="#0891b2" style={styles.lockIcon} />
              </Animatable.View>

            </View>
          </View>

          {/* Footer Group */}
          <Animatable.View animation="fadeInUp" duration={800} delay={500} style={styles.footerGroup}>
            <TouchableOpacity style={styles.ctaButton} onPress={() => router.push('/loading')}>
              <Text style={styles.ctaText}>Order your card</Text>
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
    ...StyleSheet.absoluteFill,
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
