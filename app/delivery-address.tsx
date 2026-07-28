import React, { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  SafeAreaView, 
  ScrollView, 
  KeyboardAvoidingView, 
  Platform 
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import * as Animatable from 'react-native-animatable';

export default function DeliveryAddressScreen() {
  const router = useRouter();
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView 
        style={styles.container} 
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <Animatable.View animation="fadeInDown" duration={500} style={styles.navBar}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Feather name="chevron-left" size={24} color="#0f172a" />
          </TouchableOpacity>
        </Animatable.View>

        <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
          <Animatable.View animation="fadeIn" duration={600} delay={100} style={styles.header}>
            <Text style={styles.headlineText}>What&apos;s your delivery address?</Text>
          </Animatable.View>

          <Animatable.View animation="fadeInUp" duration={600} delay={200} style={styles.formContainer}>
            {/* Country Field */}
            <View style={styles.fieldGroup}>
              <Text style={styles.label}>Country</Text>
              <TouchableOpacity style={styles.selectWrapper} activeOpacity={0.8}>
                <Text style={styles.selectText}>United States</Text>
                <Feather name="chevron-right" size={20} color="#64748b" />
              </TouchableOpacity>
            </View>

            {/* Address Line 1 */}
            <View style={styles.fieldGroup}>
              <Text style={styles.label}>Address line 1</Text>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.input}
                  placeholder="Street address, P.O. box"
                  placeholderTextColor="#94a3b8"
                  value={address1}
                  onChangeText={setAddress1}
                />
              </View>
            </View>

            {/* Address Line 2 */}
            <View style={styles.fieldGroup}>
              <Text style={styles.label}>Address line 2 (optional)</Text>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.input}
                  placeholder="Apartment, suite, unit, building"
                  placeholderTextColor="#94a3b8"
                  value={address2}
                  onChangeText={setAddress2}
                />
              </View>
            </View>

            {/* City */}
            <View style={styles.fieldGroup}>
              <Text style={styles.label}>City</Text>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.input}
                  placeholder="City name"
                  placeholderTextColor="#94a3b8"
                  value={city}
                  onChangeText={setCity}
                />
              </View>
            </View>

            {/* Postal Code */}
            <View style={styles.fieldGroup}>
              <Text style={styles.label}>Postal code</Text>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.input}
                  placeholder="ZIP code"
                  placeholderTextColor="#94a3b8"
                  value={postalCode}
                  onChangeText={setPostalCode}
                  keyboardType="default"
                />
              </View>
            </View>
          </Animatable.View>
        </ScrollView>

        <Animatable.View animation="fadeInUp" duration={600} delay={400} style={styles.footer}>
          <TouchableOpacity 
            style={styles.ctaButton}
            activeOpacity={0.9}
            onPress={() => router.push('/choose-name')}
          >
            <Text style={styles.ctaText}>Continue</Text>
          </TouchableOpacity>
        </Animatable.View>
      </KeyboardAvoidingView>
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
  scrollView: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
  header: {
    paddingVertical: 12,
    marginBottom: 16,
  },
  headlineText: {
    fontFamily: 'ClashDisplay-Bold',
    fontSize: 30,
    lineHeight: 36,
    color: '#0f172a',
  },
  formContainer: {
    gap: 20,
  },
  fieldGroup: {
    gap: 8,
  },
  label: {
    fontFamily: 'GeneralSans-Medium',
    fontSize: 14,
    color: '#475569',
  },
  selectWrapper: {
    height: 52,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  selectText: {
    fontFamily: 'GeneralSans-Medium',
    fontSize: 16,
    color: '#0f172a',
  },
  inputWrapper: {
    height: 52,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  input: {
    fontFamily: 'GeneralSans-Regular',
    fontSize: 16,
    color: '#0f172a',
    padding: 0,
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
