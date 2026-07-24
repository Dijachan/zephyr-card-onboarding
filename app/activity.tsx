import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import * as Animatable from 'react-native-animatable';

export default function ActivityScreen() {
  const router = useRouter();

  return (
    <LinearGradient 
      colors={['#0891b2', '#042f2e']} 
      style={styles.background}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          {/* Top Header Group */}
          <Animatable.View animation="fadeInDown" duration={600} style={styles.headerGroup}>
            <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
              <Feather name="chevron-left" size={24} color="#ffffff" />
            </TouchableOpacity>

            <View style={styles.headlineContainer}>
              <Text style={styles.headlineText}>TRACK YOUR</Text>
              <Text style={styles.headlineText}>SPENDING.</Text>
              <Text style={styles.subheadText}>Monitor every transaction — wherever you are, in real time.</Text>
            </View>
          </Animatable.View>

          {/* Activity Card */}
          <Animatable.View animation="fadeInUp" duration={800} delay={100} style={styles.activityCard}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>All activity</Text>
              <TouchableOpacity style={styles.searchButton}>
                <Feather name="search" size={16} color="#0f172a" />
              </TouchableOpacity>
            </View>

            <View style={styles.activityList}>
              <Text style={styles.dateHeader}>22 JULY</Text>

              {/* Transaction: Netflix */}
              <Animatable.View animation="fadeInRight" duration={500} delay={300} style={styles.transactionRow}>
                <View style={[styles.logoCircle, { backgroundColor: '#e11d48' }]}>
                  <Text style={styles.logoLetter}>N</Text>
                </View>
                <View style={styles.transactionDetails}>
                  <Text style={styles.transactionName}>Netflix</Text>
                  <Text style={styles.transactionStatus}>Completed</Text>
                </View>
                <View style={styles.transactionAmount}>
                  <Text style={styles.amountText}>15.99</Text>
                  <Text style={styles.currencyText}>USD</Text>
                </View>
              </Animatable.View>

              {/* Transaction: Uber */}
              <Animatable.View animation="fadeInRight" duration={500} delay={400} style={[styles.transactionRow, styles.activeTransaction]}>
                <View style={[styles.logoCircle, { backgroundColor: '#0f172a' }]}>
                  <Text style={styles.logoLetter}>U</Text>
                </View>
                <View style={styles.transactionDetails}>
                  <Text style={styles.transactionName}>Uber</Text>
                  <Text style={styles.transactionStatus}>In progress</Text>
                </View>
                <View style={styles.transactionAmount}>
                  <Text style={styles.amountText}>8.50</Text>
                  <Text style={styles.currencyText}>GBP</Text>
                </View>
              </Animatable.View>

              {/* Transaction: Stripe */}
              <Animatable.View animation="fadeInRight" duration={500} delay={500} style={styles.transactionRow}>
                <View style={[styles.logoCircle, { backgroundColor: '#6366f1' }]}>
                  <Text style={styles.logoLetter}>S</Text>
                </View>
                <View style={styles.transactionDetails}>
                  <Text style={styles.transactionName}>Stripe</Text>
                  <Text style={styles.transactionStatus}>Completed</Text>
                </View>
                <View style={styles.transactionAmount}>
                  <Text style={styles.amountText}>200.00</Text>
                  <Text style={styles.currencyText}>USD</Text>
                </View>
              </Animatable.View>

            </View>
          </Animatable.View>

          {/* Footer Action */}
          <Animatable.View animation="fadeInUp" duration={800} delay={500} style={styles.footerGroup}>
            <TouchableOpacity style={styles.ctaButton} onPress={() => router.push('/digital-wallets')}>
              <Text style={styles.ctaText}>Next</Text>
              <Feather name="arrow-right" size={20} color="#ffffff" style={styles.ctaIcon} />
            </TouchableOpacity>
          </Animatable.View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  headerGroup: {
    paddingHorizontal: 24,
    paddingTop: 16,
    gap: 16,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headlineContainer: {
    gap: 8,
  },
  headlineText: {
    fontFamily: 'ClashDisplay-Bold',
    fontSize: 36,
    lineHeight: 40,
    color: '#ffffff',
  },
  subheadText: {
    fontFamily: 'GeneralSans-Regular',
    fontSize: 15,
    color: 'rgba(255,255,255,0.6)',
    lineHeight: 21,
    marginTop: 4,
  },
  activityCard: {
    marginHorizontal: 20,
    backgroundColor: 'rgba(255,255,255,0.85)',
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 5,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  cardTitle: {
    fontFamily: 'GeneralSans-Bold',
    fontSize: 18,
    color: '#0f172a',
  },
  searchButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activityList: {
    gap: 8,
  },
  dateHeader: {
    fontFamily: 'GeneralSans-Semibold',
    fontSize: 12,
    color: '#64748b',
    marginBottom: 4,
  },
  transactionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    gap: 12,
  },
  activeTransaction: {
    backgroundColor: 'rgba(8,145,178,0.05)',
    borderWidth: 1,
    borderColor: 'rgba(8,145,178,0.13)',
  },
  logoCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoLetter: {
    fontFamily: 'GeneralSans-Semibold',
    fontSize: 14,
    color: '#ffffff',
  },
  transactionDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  transactionName: {
    fontFamily: 'GeneralSans-Semibold',
    fontSize: 15,
    color: '#0f172a',
  },
  transactionStatus: {
    fontFamily: 'GeneralSans-Regular',
    fontSize: 13,
    color: '#64748b',
    marginTop: 2,
  },
  transactionAmount: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  amountText: {
    fontFamily: 'GeneralSans-Semibold',
    fontSize: 15,
    color: '#0f172a',
  },
  currencyText: {
    fontFamily: 'GeneralSans-Medium',
    fontSize: 11,
    color: '#64748b',
    marginTop: 2,
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    gap: 8,
  },
  ctaText: {
    fontFamily: 'GeneralSans-Semibold',
    fontSize: 16,
    color: '#ffffff',
  },
  ctaIcon: {
    marginTop: 2,
  }
});
