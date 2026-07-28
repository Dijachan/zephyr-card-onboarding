import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import * as Animatable from 'react-native-animatable';

export default function PurposeQuestionScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.topSection}>
          <Animatable.View animation="fadeInDown" duration={500} style={styles.navBar}>
            <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
              <Feather name="chevron-left" size={24} color="#0f172a" />
            </TouchableOpacity>
          </Animatable.View>

          <Animatable.View animation="fadeIn" duration={600} delay={100} style={styles.header}>
            <Text style={styles.headlineText}>Tell us what you&apos;re using Zephyr for</Text>
            <Text style={styles.subheadText}>
              To protect your account and comply with global financial regulations, let us know your primary intended usage.
            </Text>
          </Animatable.View>

          <Animatable.View animation="fadeInUp" duration={600} delay={200} style={styles.formContainer}>
            <Text style={styles.label}>Primary usage purpose</Text>
            <TouchableOpacity 
              style={styles.selectBox} 
              activeOpacity={0.8}
              onPress={() => router.push('/usage-options')}
            >
              <Text style={styles.selectText}>Select an option</Text>
              <Feather name="chevron-down" size={20} color="#64748b" />
            </TouchableOpacity>
          </Animatable.View>
        </View>

        <Animatable.View animation="fadeInUp" duration={600} delay={300} style={styles.footer}>
          <TouchableOpacity 
            style={styles.ctaButton}
            activeOpacity={0.9}
            onPress={() => router.push('/usage-options')}
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
    paddingTop: 8,
    paddingBottom: 4,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
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
    fontSize: 30,
    lineHeight: 36,
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
    paddingTop: 20,
    gap: 10,
  },
  label: {
    fontFamily: 'GeneralSans-Medium',
    fontSize: 14,
    color: '#475569',
  },
  selectBox: {
    height: 56,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    backgroundColor: '#f8fafc',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  selectText: {
    fontFamily: 'GeneralSans-Regular',
    fontSize: 16,
    color: '#64748b',
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
