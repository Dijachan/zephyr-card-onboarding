import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, ScrollView, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import * as Animatable from 'react-native-animatable';

const OPTIONS = [
  'Sending money to friends or family',
  'Moving savings',
  'General monthly living expenses',
  'Paying for goods or services abroad',
  'Repaying a mortgage, bank loan, or similar',
  'Paying bills like rent or utilities',
  'Receiving a salary or pension',
  'Making investments',
];

export default function AccountOptionsScreen() {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState<string>('Paying for goods or services abroad');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredOptions = OPTIONS.filter((opt) =>
    opt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleConfirm = () => {
    // Navigate back to account type with the chosen selection
    router.replace({
      pathname: '/account-type',
      params: { selected: selectedOption }
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
            <Text style={styles.headerTitle}>Select one that fits you best</Text>
            <View style={styles.placeholderBox} />
          </View>

          {/* Search Input */}
          <View style={styles.searchContainer}>
            <View style={styles.searchBar}>
              <Feather name="search" size={18} color="#94a3b8" />
              <TextInput
                style={styles.searchInput}
                placeholder="Search options..."
                placeholderTextColor="#94a3b8"
                value={searchQuery}
                onChangeText={setSearchQuery}
              />
              {searchQuery.length > 0 && (
                <TouchableOpacity onPress={() => setSearchQuery('')}>
                  <Feather name="x-circle" size={16} color="#94a3b8" />
                </TouchableOpacity>
              )}
            </View>
          </View>

          {/* Options List */}
          <ScrollView style={styles.scrollView} contentContainerStyle={styles.listContainer}>
            {filteredOptions.map((option, index) => {
              const isSelected = selectedOption === option;
              return (
                <TouchableOpacity
                  key={index}
                  style={[styles.optionRow, isSelected && styles.optionRowSelected]}
                  activeOpacity={0.7}
                  onPress={() => setSelectedOption(option)}
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
  searchContainer: {
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    backgroundColor: '#f8fafc',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 14,
    paddingHorizontal: 16,
    gap: 12,
  },
  searchInput: {
    flex: 1,
    fontFamily: 'GeneralSans-Regular',
    fontSize: 15,
    color: '#0f172a',
    padding: 0,
  },
  scrollView: {
    flex: 1,
  },
  listContainer: {
    paddingHorizontal: 24,
    paddingBottom: 20,
    gap: 12,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingVertical: 16,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    backgroundColor: '#ffffff',
    minHeight: 60,
  },
  optionRowSelected: {
    borderColor: '#0891b2',
    backgroundColor: '#ecfeff',
  },
  optionText: {
    flex: 1,
    fontFamily: 'GeneralSans-Medium',
    fontSize: 15,
    color: '#334155',
    paddingRight: 12,
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
