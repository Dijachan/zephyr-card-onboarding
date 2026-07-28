import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import * as Animatable from 'react-native-animatable';

export default function QuestionsIntroScreen() {
  const router = useRouter();

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

          {/* Headline */}
          <Animatable.View animation="fadeIn" duration={600} delay={100} style={styles.header}>
            <Text style={styles.headlineText}>We need to ask a few questions</Text>
          </Animatable.View>

          {/* Bullets List */}
          <Animatable.View animation="fadeInUp" duration={600} delay={200} style={styles.bulletsContainer}>
            
            <View style={styles.bulletRow}>
              <View style={styles.iconCircle}>
                <Feather name="shield" size={16} color="#0891b2" />
              </View>
              <Text style={styles.bulletText}>
                It is part of how we are regulated, to keep Zephyr safe for everyone.
              </Text>
            </View>

            <View style={styles.bulletRow}>
              <View style={styles.iconCircle}>
                <Feather name="clock" size={16} color="#0891b2" />
              </View>
              <Text style={styles.bulletText}>
                In most cases, you will only need to answer these once.
              </Text>
            </View>

            <View style={styles.bulletRow}>
              <View style={styles.iconCircle}>
                <Feather name="file-text" size={16} color="#0891b2" />
              </View>
              <Text style={styles.bulletText}>
                You will need a document to prove your main source of income.
              </Text>
            </View>

          </Animatable.View>
        </View>

        {/* Footer CTA */}
        <Animatable.View animation="fadeInUp" duration={600} delay={400} style={styles.footer}>
          <TouchableOpacity 
            style={styles.ctaButton}
            activeOpacity={0.9}
            onPress={() => router.push('/account-type')}
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
  },
  headlineText: {
    fontFamily: 'ClashDisplay-Bold',
    fontSize: 32,
    lineHeight: 38,
    color: '#0f172a',
  },
  bulletsContainer: {
    paddingHorizontal: 24,
    paddingTop: 24,
    gap: 24,
  },
  bulletRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 16,
  },
  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#ecfeff',
    borderWidth: 1,
    borderColor: '#a5f3fc',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },
  bulletText: {
    flex: 1,
    fontFamily: 'GeneralSans-Regular',
    fontSize: 16,
    lineHeight: 24,
    color: '#334155',
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
