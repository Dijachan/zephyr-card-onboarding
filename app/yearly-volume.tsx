import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams } from 'expo-router';
import * as Animatable from 'react-native-animatable';

export default function YearlyVolumeScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  
  const selectedVolume = params.volume ? (params.volume as string) : '8,001-16,000 USD';

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.topSection}>
          {/* Navigation Bar */}
          <Animatable.View animation="fadeInDown" duration={500} style={styles.navBar}>
            <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
              <Feather name="chevron-left" size={26} color="#0f172a" />
            </TouchableOpacity>
          </Animatable.View>

          {/* Headline & Subhead */}
          <Animatable.View animation="fadeIn" duration={600} delay={100} style={styles.header}>
            <Text style={styles.headlineText}>How much do you plan to move with Zephyr each year?</Text>
            <Text style={styles.subheadText}>
              It is OK to move more or less. This just helps us know what is normal for you.
            </Text>
          </Animatable.View>

          {/* Form Field */}
          <Animatable.View animation="fadeInUp" duration={600} delay={200} style={styles.formContainer}>
            <Text style={styles.label}>Yearly volume</Text>
            <TouchableOpacity 
              style={styles.selectBox}
              activeOpacity={0.8}
              onPress={() => router.push('/volume-options')}
            >
              <View style={styles.leftContent}>
                <Feather name="dollar-sign" size={18} color="#0891b2" />
                <Text style={styles.selectText}>{selectedVolume}</Text>
              </View>
              <Feather name="chevron-down" size={20} color="#64748b" />
            </TouchableOpacity>
          </Animatable.View>
        </View>

        {/* Footer CTA */}
        <Animatable.View animation="fadeInUp" duration={600} delay={400} style={styles.footer}>
          <TouchableOpacity 
            style={styles.ctaButton}
            activeOpacity={0.9}
            onPress={() => router.push('/verify-identity')}
          >
            <Text style={styles.ctaText}>Continue</Text>
            <Feather name="arrow-right" size={20} color="#ffffff" style={styles.ctaIcon} />
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
  topSection: {
    flex: 1,
  },
  navBar: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 8,
  },
  backButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    gap: 12,
  },
  headlineText: {
    fontFamily: 'ClashDisplay-Bold',
    fontSize: 28,
    lineHeight: 34,
    color: '#0f172a',
  },
  subheadText: {
    fontFamily: 'GeneralSans-Regular',
    fontSize: 15,
    lineHeight: 22,
    color: '#64748b',
  },
  formContainer: {
    paddingHorizontal: 24,
    paddingTop: 24,
    gap: 10,
  },
  label: {
    fontFamily: 'GeneralSans-Medium',
    fontSize: 14,
    color: '#475569',
  },
  selectBox: {
    minHeight: 60,
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: '#e2e8f0',
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingVertical: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  selectText: {
    fontFamily: 'GeneralSans-Semibold',
    fontSize: 16,
    color: '#0f172a',
  },
  footer: {
    paddingHorizontal: 24,
    paddingBottom: 24,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#f8fafc',
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
  },
});
