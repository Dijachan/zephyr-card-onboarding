import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import * as Animatable from 'react-native-animatable';

export default function VerifyIdentityScreen() {
  const router = useRouter();
  const [selectedMethod, setSelectedMethod] = useState<'gov' | 'doc'>('gov');

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
            <Text style={styles.headlineText}>Verify your identity</Text>
            <Text style={styles.subheadText}>
              Verifying your identity helps keep everyone safe and ensures you are really you. This information is never shared with anyone else.
            </Text>
          </Animatable.View>

          {/* Options Cards */}
          <Animatable.View animation="fadeInUp" duration={600} delay={200} style={styles.cardsContainer}>
            
            {/* Gov ID Card */}
            <TouchableOpacity
              style={[
                styles.optionCard,
                selectedMethod === 'gov' && styles.optionCardSelected,
              ]}
              activeOpacity={0.8}
              onPress={() => setSelectedMethod('gov')}
            >
              <View style={[styles.iconContainer, selectedMethod === 'gov' && styles.iconContainerSelected]}>
                <Feather name="lock" size={20} color={selectedMethod === 'gov' ? '#0891b2' : '#64748b'} />
              </View>
              <View style={styles.cardTextContainer}>
                <Text style={styles.cardTitle}>Verify using government ID</Text>
                <Text style={styles.cardDesc}>
                  Log in with your government portal and give us permission to check your details. Takes about 1 minute.
                </Text>
              </View>
              <Feather name="chevron-right" size={20} color="#94a3b8" style={styles.chevron} />
            </TouchableOpacity>

            {/* Other Documents Card */}
            <TouchableOpacity
              style={[
                styles.optionCard,
                selectedMethod === 'doc' && styles.optionCardSelected,
              ]}
              activeOpacity={0.8}
              onPress={() => setSelectedMethod('doc')}
            >
              <View style={[styles.iconContainer, selectedMethod === 'doc' && styles.iconContainerSelected]}>
                <Feather name="file-text" size={20} color={selectedMethod === 'doc' ? '#0891b2' : '#64748b'} />
              </View>
              <View style={styles.cardTextContainer}>
                <Text style={styles.cardTitle}>Verify using other documents</Text>
                <Text style={styles.cardDesc}>
                  Upload your ID. Remember, your ID must show your nationality. Takes 2-3 working days.
                </Text>
              </View>
              <Feather name="chevron-right" size={20} color="#94a3b8" style={styles.chevron} />
            </TouchableOpacity>

          </Animatable.View>
        </View>

        {/* Footer CTA */}
        <Animatable.View animation="fadeInUp" duration={600} delay={400} style={styles.footer}>
          <TouchableOpacity 
            style={styles.ctaButton}
            activeOpacity={0.9}
            onPress={() => router.push('/upload-id-form')}
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
  cardsContainer: {
    paddingHorizontal: 24,
    paddingTop: 20,
    gap: 16,
  },
  optionCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 18,
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: '#e2e8f0',
    backgroundColor: '#ffffff',
    gap: 14,
  },
  optionCardSelected: {
    borderColor: '#0891b2',
    backgroundColor: '#ecfeff',
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#f1f5f9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainerSelected: {
    backgroundColor: '#cffafe',
  },
  cardTextContainer: {
    flex: 1,
    gap: 4,
  },
  cardTitle: {
    fontFamily: 'GeneralSans-Bold',
    fontSize: 16,
    color: '#0f172a',
  },
  cardDesc: {
    fontFamily: 'GeneralSans-Regular',
    fontSize: 14,
    lineHeight: 20,
    color: '#475569',
  },
  chevron: {
    marginTop: 12,
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
