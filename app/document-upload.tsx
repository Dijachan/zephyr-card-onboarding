import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams } from 'expo-router';
import * as Animatable from 'react-native-animatable';

export default function DocumentUploadScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  
  const docType = params.docType ? (params.docType as string) : 'National ID';
  const [uploaded, setUploaded] = useState(false);

  const handleToggleUpload = () => {
    setUploaded(prev => !prev);
  };

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
            <Text style={styles.headlineText}>{docType}</Text>
            <Text style={styles.subheadText}>
              Upload a photo or scan of your document.
            </Text>
            <TouchableOpacity 
              activeOpacity={0.7} 
              onPress={() => router.push('/document-type')}
              style={styles.linkWrapper}
            >
              <Text style={styles.linkText}>Choose a different ID document</Text>
            </TouchableOpacity>
          </Animatable.View>

          {/* Upload Drop Zone */}
          <Animatable.View animation="fadeInUp" duration={600} delay={200} style={styles.uploadContainer}>
            <TouchableOpacity 
              style={[styles.uploadBox, uploaded && styles.uploadBoxDone]} 
              activeOpacity={0.8}
              onPress={handleToggleUpload}
            >
              <View style={[styles.iconCircle, uploaded && styles.iconCircleDone]}>
                <Feather 
                  name={uploaded ? "check-circle" : "upload-cloud"} 
                  size={36} 
                  color={uploaded ? "#10b981" : "#0891b2"} 
                />
              </View>
              <Text style={[styles.uploadText, uploaded && styles.uploadTextDone]}>
                {uploaded ? `${docType} front side attached` : 'Upload the front side of your document'}
              </Text>
              {uploaded && (
                <Text style={styles.tapToChangeText}>Tap to replace file</Text>
              )}
            </TouchableOpacity>

            {/* Pagination Dots */}
            <View style={styles.pagination}>
              <View style={[styles.dot, styles.dotActive]} />
              <View style={styles.dot} />
            </View>
          </Animatable.View>
        </View>

        {/* Footer CTA */}
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
    gap: 8,
  },
  headlineText: {
    fontFamily: 'ClashDisplay-Bold',
    fontSize: 32,
    lineHeight: 38,
    color: '#0f172a',
  },
  subheadText: {
    fontFamily: 'GeneralSans-Regular',
    fontSize: 16,
    lineHeight: 24,
    color: '#475569',
  },
  linkWrapper: {
    marginTop: 4,
  },
  linkText: {
    fontFamily: 'GeneralSans-Medium',
    fontSize: 15,
    color: '#0891b2',
    textDecorationLine: 'underline',
  },
  uploadContainer: {
    paddingHorizontal: 24,
    paddingTop: 24,
    alignItems: 'center',
    gap: 24,
  },
  uploadBox: {
    width: '100%',
    minHeight: 200,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#94a3b8',
    borderStyle: 'dashed',
    backgroundColor: '#f8fafc',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    gap: 16,
  },
  uploadBoxDone: {
    borderColor: '#10b981',
    backgroundColor: '#ecfdf5',
    borderStyle: 'solid',
  },
  iconCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#ecfeff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconCircleDone: {
    backgroundColor: '#d1fae5',
  },
  uploadText: {
    fontFamily: 'GeneralSans-Semibold',
    fontSize: 16,
    color: '#334155',
    textAlign: 'center',
  },
  uploadTextDone: {
    color: '#065f46',
  },
  tapToChangeText: {
    fontFamily: 'GeneralSans-Regular',
    fontSize: 13,
    color: '#059669',
  },
  pagination: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#e2e8f0',
  },
  dotActive: {
    width: 24,
    backgroundColor: '#0891b2',
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
