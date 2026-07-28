import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import * as Animatable from 'react-native-animatable';

const VOLUMES = [
  '0-3,200 USD',
  '3,201-8,000 USD',
  '8,001-16,000 USD',
  '16,001-80,000 USD',
  '80,001-240,000 USD',
  '240,001+ USD',
];

export default function VolumeOptionsScreen() {
  const router = useRouter();
  const [selectedVolume, setSelectedVolume] = useState<string>('8,001-16,000 USD');

  const handleConfirm = () => {
    router.replace({
      pathname: '/yearly-volume',
      params: { volume: selectedVolume }
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.topSection}>
          {/* Header */}
          <View style={styles.headerRow}>
            <TouchableOpacity onPress={() => router.back()} style={styles.closeButton}>
              <Feather name="x-circle" size={24} color="#0f172a" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Yearly volume</Text>
            <View style={styles.placeholderBox} />
          </View>

          {/* Options List */}
          <ScrollView style={styles.scrollView} contentContainerStyle={styles.listContainer}>
            {VOLUMES.map((volume, index) => {
              const isSelected = selectedVolume === volume;
              return (
                <TouchableOpacity
                  key={index}
                  style={[styles.optionRow, isSelected && styles.optionRowSelected]}
                  activeOpacity={0.7}
                  onPress={() => setSelectedVolume(volume)}
                >
                  <Text style={[styles.optionText, isSelected && styles.optionTextSelected]}>
                    {volume}
                  </Text>
                  <View style={[styles.radioOuter, isSelected && styles.radioOuterSelected]}>
                    {isSelected && <View style={styles.radioInner} />}
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>

        {/* Footer CTA */}
        <Animatable.View animation="fadeInUp" duration={500} style={styles.footer}>
          <TouchableOpacity 
            style={styles.ctaButton}
            activeOpacity={0.9}
            onPress={handleConfirm}
          >
            <Text style={styles.ctaText}>Confirm selection</Text>
            <Feather name="check" size={20} color="#ffffff" style={styles.ctaIcon} />
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
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    height: 56,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  closeButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontFamily: 'GeneralSans-Bold',
    fontSize: 16,
    color: '#0f172a',
  },
  placeholderBox: {
    width: 40,
  },
  scrollView: {
    flex: 1,
  },
  listContainer: {
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 20,
    gap: 12,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingVertical: 18,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    backgroundColor: '#ffffff',
  },
  optionRowSelected: {
    borderColor: '#0891b2',
    backgroundColor: '#ecfeff',
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
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: '#cbd5e1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioOuterSelected: {
    borderColor: '#0891b2',
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#0891b2',
  },
  footer: {
    paddingHorizontal: 24,
    paddingBottom: 24,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#f8fafc',
    backgroundColor: '#ffffff',
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
