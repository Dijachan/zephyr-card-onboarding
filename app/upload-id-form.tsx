import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams } from 'expo-router';
import * as Animatable from 'react-native-animatable';

export default function UploadIdFormScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  
  const selectedDocType = params.docType ? (params.docType as string) : 'National ID';
  const selectedCountry = 'United States';

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
            <Text style={styles.headlineText}>Upload a proof of your identity</Text>
            <Text style={styles.subheadText}>
              Please choose the country that issued the ID document you have on hand.
            </Text>
          </Animatable.View>

          {/* Form Container */}
          <Animatable.View animation="fadeInUp" duration={600} delay={200} style={styles.formContainer}>
            
            {/* Country Field */}
            <View style={styles.fieldWrapper}>
              <Text style={styles.fieldLabel}>ID issuing country</Text>
              <TouchableOpacity style={styles.inputBox} activeOpacity={0.8}>
                <View style={styles.rowContent}>
                  <Feather name="flag" size={18} color="#0891b2" />
                  <Text style={styles.inputText}>{selectedCountry}</Text>
                </View>
                <Feather name="chevron-down" size={20} color="#64748b" />
              </TouchableOpacity>
            </View>

            {/* Document Type Field */}
            <View style={styles.fieldWrapper}>
              <Text style={styles.fieldLabel}>Document type</Text>
              <TouchableOpacity 
                style={[styles.inputBox, styles.inputBoxActive]} 
                activeOpacity={0.8}
                onPress={() => router.push('/document-type')}
              >
                <View style={styles.rowContent}>
                  <Feather name="credit-card" size={18} color="#0891b2" />
                  <Text style={styles.inputTextActive}>{selectedDocType}</Text>
                </View>
                <Feather name="chevron-down" size={20} color="#0891b2" />
              </TouchableOpacity>
            </View>

          </Animatable.View>
        </View>

        {/* Footer CTA */}
        <Animatable.View animation="fadeInUp" duration={600} delay={400} style={styles.footer}>
          <TouchableOpacity 
            style={styles.ctaButton}
            activeOpacity={0.9}
            onPress={() => router.push({ pathname: '/document-upload', params: { docType: selectedDocType } })}
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
    paddingTop: 24,
    gap: 24,
  },
  fieldWrapper: {
    gap: 8,
  },
  fieldLabel: {
    fontFamily: 'GeneralSans-Medium',
    fontSize: 14,
    color: '#475569',
  },
  inputBox: {
    minHeight: 58,
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: '#e2e8f0',
    backgroundColor: '#f8fafc',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingVertical: 14,
  },
  inputBoxActive: {
    borderColor: '#0891b2',
    backgroundColor: '#ecfeff',
  },
  rowContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  inputText: {
    fontFamily: 'GeneralSans-Medium',
    fontSize: 16,
    color: '#334155',
  },
  inputTextActive: {
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
