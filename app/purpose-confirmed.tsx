import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import * as Animatable from 'react-native-animatable';

export default function PurposeConfirmedScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.topSection}>
          {/* Navigation Bar */}
          <Animatable.View animation="fadeInDown" duration={500} style={styles.navBar}>
            <TouchableOpacity onPress={() => router.back()} style={styles.closeButton}>
              <Feather name="x-circle" size={24} color="#0f172a" />
            </TouchableOpacity>
          </Animatable.View>

          {/* Headline & Subhead */}
          <Animatable.View animation="fadeIn" duration={600} delay={100} style={styles.header}>
            <Text style={styles.headlineText}>What will you use Zephyr for?</Text>
            <Text style={styles.subheadText}>
              To help us keep Zephyr safe and secure, tell us what you are using Zephyr for.
            </Text>
          </Animatable.View>

          {/* Form Field */}
          <Animatable.View animation="fadeInUp" duration={600} delay={200} style={styles.formContainer}>
            <Text style={styles.label}>Selected purpose</Text>
            <TouchableOpacity 
              style={styles.selectBox}
              activeOpacity={0.8}
              onPress={() => router.push('/usage-options')}
            >
              <View style={styles.selectedContent}>
                <Feather name="globe" size={18} color="#0891b2" />
                <Text style={styles.selectText}>Spending money when travelling abroad</Text>
              </View>
              <Feather name="check" size={20} color="#0891b2" />
            </TouchableOpacity>
          </Animatable.View>
        </View>

        {/* Footer CTA */}
        <Animatable.View animation="fadeInUp" duration={600} delay={400} style={styles.footer}>
          <TouchableOpacity 
            style={styles.ctaButton}
            activeOpacity={0.9}
            onPress={() => router.push('/questions-intro')}
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
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 8,
  },
  closeButton: {
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
    fontSize: 32,
    lineHeight: 38,
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
    borderColor: '#0891b2',
    backgroundColor: '#ecfeff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingVertical: 14,
  },
  selectedContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  selectText: {
    fontFamily: 'GeneralSans-Semibold',
    fontSize: 15,
    color: '#0f172a',
    flexShrink: 1,
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
