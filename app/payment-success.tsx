import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import * as Animatable from 'react-native-animatable';

export default function PaymentSuccessScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        
        {/* Top Confetti Section */}
        <View style={styles.topContent}>
          <Animatable.View animation="fadeIn" duration={1000} style={styles.celebrationArea}>
            {/* Simple confetti shapes built with Views */}
            <Animatable.View animation="bounceIn" delay={300} style={[styles.confettiPill, styles.pillBlue]} />
            <Animatable.View animation="bounceIn" delay={400} style={[styles.confettiPill, styles.pillCyan]} />
            <Animatable.View animation="bounceIn" delay={500} style={[styles.confettiDot, styles.dotOrange]} />
            <Animatable.View animation="bounceIn" delay={600} style={[styles.confettiDot, styles.dotYellow]} />
            
            {/* The main checkmark or badge in the center */}
            <Animatable.View animation="zoomIn" delay={100} style={styles.mainBadge}>
              <View style={styles.checkmarkOuter}>
                <View style={styles.checkmarkInner}>
                  {/* CSS-based checkmark */}
                  <View style={styles.checkStem} />
                  <View style={styles.checkKick} />
                </View>
              </View>
            </Animatable.View>
          </Animatable.View>
        </View>

        {/* Text Info */}
        <View style={styles.successInfo}>
          <Animatable.Text animation="fadeInUp" delay={200} style={styles.successTitle}>
            Payment successful!
          </Animatable.Text>
          <Animatable.Text animation="fadeInUp" delay={300} style={styles.successDesc}>
            Your card has been ordered and 15 USD was added to your account.
          </Animatable.Text>
        </View>

        {/* Actions */}
        <View style={styles.successActions}>
          <Animatable.View animation="fadeInUp" delay={400}>
            <TouchableOpacity 
              style={[styles.btn, styles.btnAddMoney]}
              activeOpacity={0.9}
            >
              <Text style={[styles.btnText, styles.btnAddMoneyText]}>Add money</Text>
            </TouchableOpacity>
          </Animatable.View>

          <Animatable.View animation="fadeInUp" delay={500}>
            <TouchableOpacity 
              style={[styles.btn, styles.btnGoCard]}
              activeOpacity={0.9}
              onPress={() => router.replace('/(tabs)/card')}
            >
              <Text style={[styles.btnText, styles.btnGoCardText]}>Go to Card</Text>
            </TouchableOpacity>
          </Animatable.View>
        </View>
        
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
    justifyContent: 'space-between',
  },
  topContent: {
    height: 240,
    justifyContent: 'center',
    alignItems: 'center',
  },
  celebrationArea: {
    width: '100%',
    height: 180,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  confettiPill: {
    position: 'absolute',
    borderRadius: 20,
    transform: [{ rotate: '45deg' }],
  },
  pillBlue: {
    width: 24,
    height: 12,
    backgroundColor: '#3b82f6',
    top: 40,
    left: 40,
  },
  pillCyan: {
    width: 32,
    height: 16,
    backgroundColor: '#06b6d4',
    top: 110,
    right: 40,
    transform: [{ rotate: '-30deg' }],
  },
  confettiDot: {
    position: 'absolute',
    borderRadius: 10,
  },
  dotOrange: {
    width: 12,
    height: 12,
    backgroundColor: '#f97316',
    top: 130,
    left: 100,
  },
  dotYellow: {
    width: 8,
    height: 8,
    backgroundColor: '#eab308',
    top: 30,
    right: 120,
  },
  mainBadge: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#f1f5f9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkmarkOuter: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#0f172a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkmarkInner: {
    width: 18,
    height: 18,
    position: 'relative',
    marginTop: -4,
  },
  checkStem: {
    position: 'absolute',
    width: 3,
    height: 16,
    backgroundColor: '#ffffff',
    left: 12,
    top: 0,
    transform: [{ rotate: '45deg' }],
  },
  checkKick: {
    position: 'absolute',
    width: 8,
    height: 3,
    backgroundColor: '#ffffff',
    left: 4,
    top: 11,
    transform: [{ rotate: '45deg' }],
  },
  successInfo: {
    paddingHorizontal: 32,
    alignItems: 'center',
    flex: 1,
  },
  successTitle: {
    fontFamily: 'ClashDisplay-Bold',
    fontSize: 28,
    color: '#0f172a',
    textAlign: 'center',
    marginBottom: 16,
  },
  successDesc: {
    fontFamily: 'GeneralSans-Medium',
    fontSize: 16,
    color: '#64748b',
    textAlign: 'center',
    lineHeight: 24,
  },
  successActions: {
    paddingHorizontal: 24,
    paddingBottom: Platform.OS === 'ios' ? 34 : 24,
    gap: 12,
  },
  btn: {
    height: 52,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnAddMoney: {
    backgroundColor: '#f1f5f9',
  },
  btnAddMoneyText: {
    color: '#0f172a',
  },
  btnGoCard: {
    backgroundColor: '#0f172a',
  },
  btnGoCardText: {
    color: '#ffffff',
  },
  btnText: {
    fontFamily: 'GeneralSans-Semibold',
    fontSize: 16,
  }
});
