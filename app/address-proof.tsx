import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import * as Animatable from 'react-native-animatable';

export default function AddressProofScreen() {
  const router = useRouter();
  const [uploaded, setUploaded] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          {/* Navigation Bar */}
          <Animatable.View animation="fadeInDown" duration={500} style={styles.navBar}>
            <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
              <Feather name="chevron-left" size={26} color="#0f172a" />
            </TouchableOpacity>
          </Animatable.View>

          {/* Headline & Subhead */}
          <Animatable.View animation="fadeIn" duration={600} delay={100} style={styles.header}>
            <Text style={styles.headlineText}>Upload a proof of residential address</Text>
            <Text style={styles.subheadText}>
              Upload a copy of your bank statement, utility bill or a phone bill
            </Text>
          </Animatable.View>

          {/* Checklist */}
          <Animatable.View animation="fadeInUp" duration={600} delay={200} style={styles.checklistContainer}>
            <View style={styles.checklistItem}>
              <View style={styles.checkBadge}>
                <Feather name="check" size={14} color="#0891b2" />
              </View>
              <Text style={styles.checklistText}>Must show name and address</Text>
            </View>
            
            <View style={styles.checklistItem}>
              <View style={styles.checkBadge}>
                <Feather name="check" size={14} color="#0891b2" />
              </View>
              <Text style={styles.checklistText}>Is dated less than 3 months ago</Text>
            </View>
            
            <View style={styles.checklistItem}>
              <View style={[styles.checkBadge, styles.xBadge]}>
                <Feather name="x" size={14} color="#ef4444" />
              </View>
              <Text style={styles.checklistText}>Can't be cropped or blurry</Text>
            </View>
          </Animatable.View>

          {/* Upload Dropzone */}
          <Animatable.View animation="fadeInUp" duration={600} delay={300} style={styles.uploadContainer}>
            {!uploaded ? (
              <TouchableOpacity 
                style={styles.uploadBox} 
                activeOpacity={0.8}
                onPress={() => setUploaded(true)}
              >
                <View style={styles.iconCircle}>
                  <Feather name="upload-cloud" size={32} color="#0891b2" />
                </View>
                <Text style={styles.uploadText}>Upload a file less than 10MB</Text>
              </TouchableOpacity>
            ) : (
              <Animatable.View animation="zoomIn" duration={400} style={styles.uploadedBox}>
                <TouchableOpacity 
                  style={styles.removeButton} 
                  onPress={() => setUploaded(false)}
                >
                  <Feather name="x" size={16} color="#64748b" />
                </TouchableOpacity>
                <View style={styles.pdfIconContainer}>
                  <Feather name="file-text" size={36} color="#ef4444" />
                  <View style={styles.pdfBadge}>
                    <Text style={styles.pdfBadgeText}>PDF</Text>
                  </View>
                </View>
                <Text style={styles.fileName}>utility_bill.pdf</Text>
              </Animatable.View>
            )}
          </Animatable.View>
        </ScrollView>

        {/* Footer CTA */}
        <Animatable.View animation="fadeInUp" duration={600} delay={400} style={styles.footer}>
          <TouchableOpacity 
            style={[styles.ctaButton, !uploaded && styles.ctaButtonDisabled]}
            activeOpacity={0.9}
            disabled={!uploaded}
            onPress={() => router.push('/loading')}
          >
            <Text style={[styles.ctaText, !uploaded && styles.ctaTextDisabled]}>Continue</Text>
            <Feather name="arrow-right" size={20} color={uploaded ? "#ffffff" : "#94a3b8"} style={styles.ctaIcon} />
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
  scrollContent: {
    paddingBottom: 40,
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
    fontSize: 16,
    lineHeight: 24,
    color: '#475569',
  },
  checklistContainer: {
    paddingHorizontal: 24,
    paddingTop: 24,
    gap: 16,
  },
  checklistItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  checkBadge: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#ecfeff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  xBadge: {
    backgroundColor: '#fef2f2',
  },
  checklistText: {
    flex: 1,
    fontFamily: 'GeneralSans-Medium',
    fontSize: 15,
    color: '#334155',
  },
  uploadContainer: {
    paddingHorizontal: 24,
    paddingTop: 40,
    alignItems: 'center',
  },
  uploadBox: {
    width: '100%',
    height: 180,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#cbd5e1',
    borderStyle: 'dashed',
    backgroundColor: '#f8fafc',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
  iconCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#e0f2fe',
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadText: {
    fontFamily: 'GeneralSans-Medium',
    fontSize: 15,
    color: '#475569',
  },
  uploadedBox: {
    width: '100%',
    height: 180,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    backgroundColor: '#f8fafc',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    position: 'relative',
  },
  removeButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#e2e8f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pdfIconContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    width: 72,
    height: 80,
  },
  pdfBadge: {
    position: 'absolute',
    bottom: -4,
    backgroundColor: '#ef4444',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  pdfBadgeText: {
    fontFamily: 'GeneralSans-Bold',
    fontSize: 11,
    color: '#ffffff',
  },
  fileName: {
    fontFamily: 'GeneralSans-Semibold',
    fontSize: 15,
    color: '#0f172a',
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
  ctaButtonDisabled: {
    backgroundColor: '#f1f5f9',
    borderColor: '#e2e8f0',
    elevation: 0,
    shadowOpacity: 0,
  },
  ctaText: {
    fontFamily: 'GeneralSans-Semibold',
    fontSize: 16,
    color: '#ffffff',
  },
  ctaTextDisabled: {
    color: '#94a3b8',
  },
  ctaIcon: {
    marginTop: 2,
  },
});
