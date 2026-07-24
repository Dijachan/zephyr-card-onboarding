import { StyleSheet, View, Text, ImageBackground, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter, Link } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Top Navigation Bar */}
        <View style={styles.navBar}>
          <TouchableOpacity style={styles.iconButton}>
            <Feather name="user" size={18} color="#0f172a" />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.earnBadge}>
            <Text style={styles.earnBadgeText}>Earn $80</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.iconButton}>
            <Feather name="bell" size={20} color="#0f172a" />
          </TouchableOpacity>
        </View>

        <View style={styles.mainContent}>
          {/* Title */}
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Spend worldwide</Text>
          </View>

          {/* Card Hero Container */}
          <TouchableOpacity 
            style={styles.cardHeroContainer}
            activeOpacity={0.9}
            onPress={() => router.push('/order-card')}
          >
            <ImageBackground source={require('../../assets/images/card-hero.png')} style={styles.cardPlaceholder} imageStyle={styles.cardImage}>
              <LinearGradient 
                colors={['rgba(207,250,254,0.2)', 'rgba(165,243,252,0.2)']} 
                start={{ x: 0, y: 0 }} 
                end={{ x: 1, y: 0 }} 
                style={styles.cardGradientOverlay} 
              />
              <View style={styles.cardOverlayContent}>
                <View style={styles.cardLogoRow}>
                  <View style={styles.cardChip} />
                  <Text style={styles.cardLogoText}>zephyr</Text>
                </View>
                <Text style={styles.cardNumberText}>•••• 8820</Text>
              </View>
            </ImageBackground>

            <View style={styles.heroTextContainer}>
              <Text style={styles.heroText}>YOUR CARD,</Text>
              <Text style={styles.heroText}>YOUR RULES.</Text>
            </View>
          </TouchableOpacity>

          {/* Receive Locally Section */}
          <View style={styles.receiveLocallySection}>
            <Text style={styles.sectionHeader}>Receive locally</Text>
            
            <TouchableOpacity style={styles.infoRow}>
              <View style={styles.currencyIconContainer}>
                <Text style={styles.currencyIconText}>$</Text>
              </View>
              
              <View style={styles.infoTextContainer}>
                <Text style={styles.infoTitle}>US Dollar</Text>
                <Text style={styles.infoSubtitle}>Routing number, Account number</Text>
              </View>
              
              <Feather name="chevron-right" size={16} color="#64748b" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    paddingBottom: 24,
  },
  navBar: {
    flexDirection: 'row',
    height: 56,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    marginTop: 8,
  },
  iconButton: {
    width: 36,
    height: 36,
    backgroundColor: '#f8fafc',
    borderWidth: 1,
    borderColor: '#f1f5f9',
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  earnBadge: {
    backgroundColor: '#ecfeff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  earnBadgeText: {
    color: '#0891b2',
    fontSize: 12,
    fontFamily: 'GeneralSans-Bold',
  },
  mainContent: {
    paddingHorizontal: 24,
    marginTop: 24,
  },
  titleContainer: {
    paddingTop: 8,
  },
  titleText: {
    color: '#0f172a',
    fontSize: 24,
    fontFamily: 'ClashDisplay-Bold',
  },
  cardHeroContainer: {
    marginTop: 24,
    gap: 20,
  },
  cardPlaceholder: {
    height: 190,
    width: '100%',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(8,145,178,0.13)',
    backgroundColor: '#e2e8f0',
    overflow: 'hidden',
  },
  cardImage: {
    opacity: 0.5,
  },
  cardGradientOverlay: {
    ...StyleSheet.absoluteFill,
    zIndex: 2,
  },
  cardOverlayContent: {
    flex: 1,
    padding: 24,
    justifyContent: 'space-between',
  },
  cardLogoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  cardChip: {
    width: 36,
    height: 24,
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 4,
  },
  cardLogoText: {
    color: '#03242c',
    fontSize: 14,
    fontFamily: 'GeneralSans-Bold',
    opacity: 0.6,
  },
  cardNumberText: {
    color: '#0f172a',
    fontSize: 16,
    fontFamily: 'GeneralSans-Semibold',
    marginTop: 'auto',
  },
  heroTextContainer: {
    marginTop: 20,
  },
  heroText: {
    color: '#0f172a',
    fontSize: 32,
    fontFamily: 'ClashDisplay-Bold',
    lineHeight: 34,
  },
  receiveLocallySection: {
    marginTop: 32,
    paddingTop: 8,
    gap: 12,
  },
  sectionHeader: {
    color: '#64748b',
    fontSize: 12,
    fontFamily: 'GeneralSans-Bold',
    textTransform: 'uppercase',
    marginBottom: 12,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fcfbf8',
    borderWidth: 1,
    borderColor: '#fcfbf8',
    borderRadius: 12,
    padding: 16,
    gap: 12,
  },
  currencyIconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(178,116,8,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  currencyIconText: {
    color: '#b25208',
    fontSize: 16,
    fontFamily: 'GeneralSans-Bold',
  },
  infoTextContainer: {
    flex: 1,
    gap: 2,
  },
  infoTitle: {
    color: '#0f172a',
    fontSize: 15,
    fontFamily: 'GeneralSans-Semibold',
  },
  infoSubtitle: {
    color: '#64748b',
    fontSize: 12,
    fontFamily: 'GeneralSans-Regular',
  },
});
