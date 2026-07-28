import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import * as Animatable from 'react-native-animatable';

const USAGE_OPTIONS = [
  'Paying for goods or services abroad',
  'Receiving salary in a different currency',
  'Sending money to family or friends',
  'Investing in international markets',
  'Managing business expenses',
  'Holding foreign currency balances',
];

export default function UsageOptionsScreen() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOption, setSelectedOption] = useState(USAGE_OPTIONS[0]);

  const filteredOptions = USAGE_OPTIONS.filter((opt) =>
    opt.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
          </Animatable.View>

          {/* Search Input */}
          <Animatable.View animation="fadeInUp" duration={600} delay={200} style={styles.searchContainer}>
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
                <TouchableOpacity onPress={() => setSearchQuery('')} style={styles.clearButton}>
                  <Feather name="x-circle" size={18} color="#94a3b8" />
                </TouchableOpacity>
              )}
            </View>
          </Animatable.View>

          {/* Options List */}
          <ScrollView style={styles.scrollView} contentContainerStyle={styles.listContainer}>
            <Animatable.View animation="fadeInUp" duration={600} delay={300} style={styles.optionsList}>
              {filteredOptions.map((option, index) => {
                const isSelected = selectedOption === option;
                return (
                  <TouchableOpacity
                    key={index}
                    style={[styles.optionRow, isSelected && styles.optionRowSelected]}
                    onPress={() => setSelectedOption(option)}
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
          </ScrollView>
        </View>

        <Animatable.View animation="fadeInUp" duration={600} delay={400} style={styles.footer}>
          <TouchableOpacity 
            style={styles.ctaButton}
            activeOpacity={0.9}
            onPress={() => router.replace('/(tabs)/card')}
          >
            <Text style={styles.ctaText}>Confirm & Complete</Text>
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
    paddingVertical: 12,
  },
  headlineText: {
    fontFamily: 'ClashDisplay-Bold',
    fontSize: 28,
    lineHeight: 34,
    color: '#0f172a',
  },
  searchContainer: {
    paddingHorizontal: 24,
    paddingVertical: 10,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    backgroundColor: '#f8fafc',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 12,
    paddingHorizontal: 14,
    gap: 10,
  },
  searchInput: {
    flex: 1,
    fontFamily: 'GeneralSans-Regular',
    fontSize: 15,
    color: '#0f172a',
    padding: 0,
  },
  clearButton: {
    padding: 4,
  },
  scrollView: {
    flex: 1,
  },
  listContainer: {
    paddingHorizontal: 24,
    paddingBottom: 20,
    paddingTop: 10,
  },
  optionsList: {
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
    backgroundColor: '#f0fdf4',
  },
  optionText: {
    flex: 1,
    fontFamily: 'GeneralSans-Medium',
    fontSize: 15,
    color: '#334155',
    paddingRight: 10,
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
