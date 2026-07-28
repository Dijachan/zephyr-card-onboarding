import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import * as Animatable from 'react-native-animatable';

const NAME_OPTIONS = [
  'ALEX JOHNSON',
  'Alex Johnson',
  'A. Johnson',
];

export default function ChooseNameScreen() {
  const router = useRouter();
  const [selectedName, setSelectedName] = useState('ALEX JOHNSON');

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header Section */}
        <View style={styles.topSection}>
          <Animatable.View animation="fadeInDown" duration={500} style={styles.navBar}>
            <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
              <Feather name="chevron-left" size={24} color="#0f172a" />
            </TouchableOpacity>
          </Animatable.View>

          <Animatable.View animation="fadeIn" duration={600} delay={100} style={styles.headlineContainer}>
            <Text style={styles.headlineText}>Choose how your name appears</Text>
          </Animatable.View>

          {/* Options List */}
          <Animatable.View animation="fadeInUp" duration={600} delay={200} style={styles.optionsContainer}>
            {NAME_OPTIONS.map((option) => {
              const isSelected = selectedName === option;
              return (
                <TouchableOpacity
                  key={option}
                  style={[styles.optionRow, isSelected && styles.optionRowSelected]}
                  onPress={() => setSelectedName(option)}
                  activeOpacity={0.8}
                >
                  <Text style={[styles.optionText, isSelected && styles.optionTextSelected]}>
                    {option}
                  </Text>
                  <View style={[styles.radioOuter, isSelected && styles.radioOuterSelected]}>
                    {isSelected && <View style={styles.radioInner} />}
                  </View>
                </TouchableOpacity>
              );
            })}
          </Animatable.View>
        </View>

        {/* Footer Section */}
        <Animatable.View animation="fadeInUp" duration={600} delay={300} style={styles.footer}>
          <Text style={styles.legalText}>
            By ordering your card, you accept our terms and conditions.
          </Text>
          <TouchableOpacity 
            style={styles.ctaButton}
            activeOpacity={0.9}
            onPress={() => router.push('/set-pin')}
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
  headlineContainer: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  headlineText: {
    fontFamily: 'ClashDisplay-Bold',
    fontSize: 32,
    lineHeight: 38,
    color: '#0f172a',
  },
  optionsContainer: {
    paddingHorizontal: 24,
    paddingTop: 16,
    gap: 12,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    height: 64,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    backgroundColor: '#ffffff',
  },
  optionRowSelected: {
    borderColor: '#0891b2',
    backgroundColor: '#f0fdf4',
  },
  optionText: {
    fontFamily: 'GeneralSans-Medium',
    fontSize: 16,
    color: '#334155',
  },
  optionTextSelected: {
    fontFamily: 'GeneralSans-Semibold',
    color: '#0f172a',
  },
  radioOuter: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#cbd5e1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioOuterSelected: {
    borderColor: '#0891b2',
  },
  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#0891b2',
  },
  footer: {
    paddingHorizontal: 24,
    paddingBottom: 24,
    paddingTop: 16,
    gap: 16,
  },
  legalText: {
    fontFamily: 'GeneralSans-Regular',
    fontSize: 13,
    color: '#64748b',
    textAlign: 'center',
    paddingHorizontal: 10,
    lineHeight: 18,
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
