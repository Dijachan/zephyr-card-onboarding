import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, ScrollView, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import * as Animatable from 'react-native-animatable';

export default function SelfieWithIdScreen() {
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

          {/* Headline */}
          <Animatable.View animation="fadeIn" duration={600} delay={100} style={styles.header}>
            <Text style={styles.headlineText}>Upload a photo of yourself holding your ID</Text>
          </Animatable.View>

          {/* Examples Grid */}
          <Animatable.View animation="fadeInUp" duration={600} delay={200} style={styles.examplesGrid}>
            <View style={styles.exampleItem}>
              <View style={[styles.badge, styles.badgeCorrect]}>
                <Feather name="check" size={14} color="#ffffff" />
              </View>
              <View style={[styles.imagePlaceholder, styles.imagePlaceholderCorrect]}>
                <Image 
                  source={{ uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=300' }} 
                  style={styles.exampleImage} 
                  resizeMode="cover"
                />
              </View>
            </View>

            <View style={styles.exampleItem}>
              <View style={[styles.badge, styles.badgeIncorrect]}>
                <Feather name="x" size={14} color="#ef4444" />
              </View>
              <View style={[styles.imagePlaceholder, styles.imagePlaceholderIncorrect]}>
                <Image 
                  source={{ uri: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=300' }} 
                  style={[styles.exampleImage, styles.exampleImageIncorrect]} 
                  resizeMode="cover"
                  blurRadius={4}
                />
              </View>
            </View>
          </Animatable.View>

          {/* Checklist Box */}
          <Animatable.View animation="fadeInUp" duration={600} delay={300} style={styles.checklistContainer}>
            <View style={styles.checklistItem}>
              <View style={styles.checkBadge}>
                <Feather name="check" size={14} color="#0891b2" />
              </View>
              <Text style={styles.checklistText}>To get it right make sure the photo is taken in good light</Text>
            </View>
            
            <View style={styles.checklistItem}>
              <View style={styles.checkBadge}>
                <Feather name="check" size={14} color="#0891b2" />
              </View>
              <Text style={styles.checklistText}>Details are in focus</Text>
            </View>
            
            <View style={styles.checklistItem}>
              <View style={styles.checkBadge}>
                <Feather name="check" size={14} color="#0891b2" />
              </View>
              <Text style={styles.checklistText}>There is no glare on the ID</Text>
            </View>
          </Animatable.View>

          {/* Upload Box */}
          <Animatable.View animation="fadeInUp" duration={600} delay={400} style={styles.uploadWrapper}>
            <TouchableOpacity 
              style={[styles.uploadBox, uploaded && styles.uploadBoxDone]} 
              activeOpacity={0.8}
              onPress={() => setUploaded(!uploaded)}
            >
              <Feather 
                name={uploaded ? "check-circle" : "camera"} 
                size={24} 
                color={uploaded ? "#10b981" : "#0891b2"} 
              />
              <Text style={[styles.uploadText, uploaded && styles.uploadTextDone]}>
                {uploaded ? 'Selfie attached. Tap to replace.' : 'Take or upload selfie'}
              </Text>
            </TouchableOpacity>
          </Animatable.View>
        </ScrollView>

        {/* Footer CTA */}
        <Animatable.View animation="fadeInUp" duration={600} delay={500} style={styles.footer}>
          <TouchableOpacity 
            style={styles.ctaButton}
            activeOpacity={0.9}
            onPress={() => router.push('/address-proof')}
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
  },
  headlineText: {
    fontFamily: 'ClashDisplay-Bold',
    fontSize: 28,
    lineHeight: 34,
    color: '#0f172a',
  },
  examplesGrid: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingTop: 16,
    gap: 16,
  },
  exampleItem: {
    flex: 1,
    alignItems: 'center',
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: -12,
    zIndex: 10,
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  badgeCorrect: {
    backgroundColor: '#10b981',
  },
  badgeIncorrect: {
    backgroundColor: '#ffffff',
    borderColor: '#ef4444',
  },
  imagePlaceholder: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden', // Add this to contain images within border radius
  },
  exampleImage: {
    width: '100%',
    height: '100%',
  },
  exampleImageIncorrect: {
    opacity: 0.8,
  },
  imagePlaceholderCorrect: {
    backgroundColor: '#ecfdf5',
    borderWidth: 1,
    borderColor: '#a7f3d0',
  },
  imagePlaceholderIncorrect: {
    backgroundColor: '#fef2f2',
    borderWidth: 1,
    borderColor: '#fecaca',
  },
  checklistContainer: {
    paddingHorizontal: 24,
    paddingTop: 32,
    gap: 16,
  },
  checklistItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  checkBadge: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#ecfeff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },
  checklistText: {
    flex: 1,
    fontFamily: 'GeneralSans-Medium',
    fontSize: 15,
    lineHeight: 22,
    color: '#475569',
  },
  uploadWrapper: {
    paddingHorizontal: 24,
    paddingTop: 32,
  },
  uploadBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    height: 72,
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: '#0891b2',
    borderStyle: 'dashed',
    backgroundColor: '#ecfeff',
  },
  uploadBoxDone: {
    borderColor: '#10b981',
    backgroundColor: '#ecfdf5',
    borderStyle: 'solid',
  },
  uploadText: {
    fontFamily: 'GeneralSans-Semibold',
    fontSize: 16,
    color: '#0891b2',
  },
  uploadTextDone: {
    color: '#10b981',
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
