import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import * as Animatable from 'react-native-animatable';

export default function CardChecklistScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Navigation Bar */}
        <Animatable.View animation="fadeInDown" duration={500} style={styles.navBar}>
          <TouchableOpacity onPress={() => router.back()} style={styles.closeButton}>
            <Feather name="x" size={20} color="#0f172a" />
          </TouchableOpacity>
        </Animatable.View>

        {/* Headline */}
        <Animatable.View animation="fadeIn" duration={600} delay={100} style={styles.headlineContainer}>
          <Text style={styles.headlineText}>Get your card</Text>
          <Text style={styles.subheadText}>Here&apos;s what you need to do next</Text>
        </Animatable.View>

        <View style={styles.divider} />

        {/* Checklist Rows */}
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.listContainer}>
          <Animatable.View animation="fadeInUp" duration={600} delay={200}>
            {/* Step 1: Delivery Address (Active) */}
            <TouchableOpacity 
              style={styles.row} 
              activeOpacity={0.7}
              onPress={() => router.push('/delivery-address')}
            >
              <View style={[styles.iconBox, styles.iconBoxActive]}>
                <Feather name="map-pin" size={18} color="#0891b2" />
              </View>
              <Text style={styles.rowTextActive}>Enter your delivery address</Text>
            </TouchableOpacity>
          </Animatable.View>

          <Animatable.View animation="fadeInUp" duration={600} delay={300}>
            {/* Step 2: Set up PIN (Inactive) */}
            <View style={styles.row}>
              <View style={styles.iconBoxInactive}>
                <Feather name="x-circle" size={18} color="#94a3b8" />
              </View>
              <Text style={styles.rowTextInactive}>Set up your PIN</Text>
            </View>
          </Animatable.View>

          <Animatable.View animation="fadeInUp" duration={600} delay={400}>
            {/* Step 3: Verify Identity (Inactive) */}
            <View style={styles.row}>
              <View style={styles.iconBoxInactive}>
                <Feather name="x-circle" size={18} color="#94a3b8" />
              </View>
              <Text style={styles.rowTextInactive}>Verify your identity</Text>
              <TouchableOpacity style={styles.helpButton}>
                <Feather name="help-circle" size={18} color="#94a3b8" />
              </TouchableOpacity>
            </View>
          </Animatable.View>

          <Animatable.View animation="fadeInUp" duration={600} delay={500}>
            {/* Step 4: Pay for Card (Inactive) */}
            <View style={[styles.row, styles.noBorder]}>
              <View style={styles.iconBoxInactive}>
                <Feather name="credit-card" size={18} color="#94a3b8" />
              </View>
              <Text style={styles.rowTextInactive}>Pay for your card</Text>
            </View>
          </Animatable.View>
        </ScrollView>

        {/* Footer */}
        <Animatable.View animation="fadeInUp" duration={700} delay={600} style={styles.footer}>
          <TouchableOpacity 
            style={styles.ctaButton}
            activeOpacity={0.9}
            onPress={() => router.push('/delivery-address')}
          >
            <Text style={styles.ctaText}>Continue</Text>
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
    justifyContent: 'space-between',
  },
  navBar: {
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 8,
  },
  closeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f8fafc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headlineContainer: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    gap: 8,
  },
  headlineText: {
    fontFamily: 'ClashDisplay-Bold',
    fontSize: 32,
    color: '#0f172a',
  },
  subheadText: {
    fontFamily: 'GeneralSans-Regular',
    fontSize: 15,
    lineHeight: 22,
    color: '#64748b',
  },
  divider: {
    height: 1,
    backgroundColor: '#f1f5f9',
    width: '100%',
  },
  scrollView: {
    flex: 1,
  },
  listContainer: {
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
    gap: 16,
  },
  noBorder: {
    borderBottomWidth: 0,
  },
  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconBoxActive: {
    backgroundColor: '#ecfeff',
    borderWidth: 1.5,
    borderColor: '#0891b2',
  },
  iconBoxInactive: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f8fafc',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowTextActive: {
    flex: 1,
    fontFamily: 'GeneralSans-Medium',
    fontSize: 16,
    color: '#0f172a',
  },
  rowTextInactive: {
    flex: 1,
    fontFamily: 'GeneralSans-Regular',
    fontSize: 16,
    color: '#64748b',
  },
  helpButton: {
    padding: 4,
  },
  footer: {
    paddingHorizontal: 24,
    paddingBottom: 24,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#f8fafc',
  },
  ctaButton: {
    backgroundColor: '#e5702b',
    borderRadius: 28,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#e5702b',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 4,
  },
  ctaText: {
    fontFamily: 'GeneralSans-Semibold',
    fontSize: 16,
    color: '#ffffff',
  },
});
