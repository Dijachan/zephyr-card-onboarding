import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, Platform } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function PayNewCardScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Feather name="chevron-left" size={16} color="#0f172a" />
          </TouchableOpacity>
          
          <View style={styles.badge}>
            <Text style={styles.badgeText}>Zephyr</Text>
          </View>
          
          <TouchableOpacity style={styles.scanButton}>
            <Feather name="camera" size={14} color="#ffffff" />
            <Text style={styles.scanText}>Scan card</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          {/* Headline */}
          <View style={styles.headlineSection}>
            <Text style={styles.headlineTitle}>Pay with a new card</Text>
            <Text style={styles.headlineSubtitle}>We accept Visa, Mastercard and Maestro.</Text>
          </View>

          {/* Form Section */}
          <View style={styles.formSection}>
            {/* Card Number (Active State) */}
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Card number</Text>
              <View style={[styles.inputBox, styles.inputBoxActive]}>
                <View style={styles.mastercardIcon}>
                  <View style={[styles.mcCircle, styles.mcRed]} />
                  <View style={[styles.mcCircle, styles.mcOrange, { marginLeft: -8 }]} />
                </View>
                <Text style={styles.inputTextActive}>5412 75</Text>
                <View style={styles.cursor} />
              </View>
            </View>

            {/* Save Card Toggle */}
            <View style={styles.toggleRow}>
              <Text style={styles.toggleLabel}>Save this card for future payments</Text>
              <View style={styles.toggleOn}>
                <View style={styles.toggleThumb} />
              </View>
            </View>

            {/* Expiry & CVV */}
            <View style={styles.rowInputs}>
              <View style={styles.halfInputGroup}>
                <Text style={styles.inputLabel}>Expiry date</Text>
                <View style={styles.inputBox}>
                  <Text style={styles.inputTextFilled}>12</Text>
                  <Text style={styles.inputSlash}> / </Text>
                  <Text style={styles.inputTextFilled}>27</Text>
                </View>
              </View>
              
              <View style={styles.halfInputGroup}>
                <Text style={styles.inputLabel}>Security code</Text>
                <View style={styles.inputBox}>
                  <Feather name="lock" size={18} color="#0f172a" style={styles.inputIcon} />
                  <Text style={styles.inputTextFilled}>•••</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* Keypad Section */}
      <View style={styles.keypadSection}>
        {/* CTA Button */}
        <View style={styles.ctaContainer}>
          <TouchableOpacity 
            style={styles.ctaButton}
            onPress={() => router.push('/processing')}
          >
            <Text style={styles.ctaText}>Pay 24 USD</Text>
          </TouchableOpacity>
        </View>

        {/* Numpad Grid */}
        <View style={styles.numpadGrid}>
          {/* Row 1 */}
          <View style={styles.numpadRow}>
            <TouchableOpacity style={styles.key}>
              <Text style={styles.keyText}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.key}>
              <Text style={styles.keyText}>2</Text>
              <Text style={styles.keySubtext}>ABC</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.key}>
              <Text style={styles.keyText}>3</Text>
              <Text style={styles.keySubtext}>DEF</Text>
            </TouchableOpacity>
          </View>
          {/* Row 2 */}
          <View style={styles.numpadRow}>
            <TouchableOpacity style={styles.key}>
              <Text style={styles.keyText}>4</Text>
              <Text style={styles.keySubtext}>GHI</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.key}>
              <Text style={styles.keyText}>5</Text>
              <Text style={styles.keySubtext}>JKL</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.key}>
              <Text style={styles.keyText}>6</Text>
              <Text style={styles.keySubtext}>MNO</Text>
            </TouchableOpacity>
          </View>
          {/* Row 3 */}
          <View style={styles.numpadRow}>
            <TouchableOpacity style={styles.key}>
              <Text style={styles.keyText}>7</Text>
              <Text style={styles.keySubtext}>PQRS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.key}>
              <Text style={styles.keyText}>8</Text>
              <Text style={styles.keySubtext}>TUV</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.key}>
              <Text style={styles.keyText}>9</Text>
              <Text style={styles.keySubtext}>WXYZ</Text>
            </TouchableOpacity>
          </View>
          {/* Row 4 */}
          <View style={styles.numpadRow}>
            <View style={styles.keyEmpty} />
            <TouchableOpacity style={styles.key}>
              <Text style={styles.keyText}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.keyAction}>
              <Feather name="delete" size={24} color="#0f172a" />
            </TouchableOpacity>
          </View>
        </View>
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
  },
  content: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    height: 56,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  badge: {
    backgroundColor: '#ecfeff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  badgeText: {
    fontFamily: 'GeneralSans-Bold',
    fontSize: 12,
    color: '#0891b2',
  },
  scanButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0891b2',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 6,
  },
  scanText: {
    fontFamily: 'GeneralSans-Semibold',
    fontSize: 12,
    color: '#ffffff',
  },
  headlineSection: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 28,
  },
  headlineTitle: {
    fontFamily: 'ClashDisplay-Bold',
    fontSize: 28,
    color: '#0f172a',
    marginBottom: 8,
  },
  headlineSubtitle: {
    fontFamily: 'GeneralSans-Regular',
    fontSize: 14,
    color: '#64748b',
    lineHeight: 21,
  },
  formSection: {
    paddingHorizontal: 24,
    gap: 20,
  },
  inputGroup: {
    gap: 8,
  },
  inputLabel: {
    fontFamily: 'GeneralSans-Semibold',
    fontSize: 14,
    color: '#0f172a',
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 12,
    paddingHorizontal: 16,
    backgroundColor: '#f8fafc',
    gap: 8,
  },
  inputBoxActive: {
    borderColor: '#0891b2',
    borderWidth: 1.5,
    backgroundColor: '#ffffff',
  },
  mastercardIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 4,
    width: 28,
    height: 18,
  },
  mcCircle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    opacity: 0.9,
  },
  mcRed: {
    backgroundColor: '#eb001b',
  },
  mcOrange: {
    backgroundColor: '#f79e1b',
  },
  inputTextActive: {
    fontFamily: 'GeneralSans-Medium',
    fontSize: 15,
    color: '#0f172a',
    flex: 1,
  },
  cursor: {
    width: 1.5,
    height: 18,
    backgroundColor: '#0891b2',
  },
  inputIcon: {
    marginRight: 4,
  },
  inputTextFilled: {
    fontFamily: 'GeneralSans-Semibold',
    fontSize: 15,
    color: '#0f172a',
  },
  inputSlash: {
    fontFamily: 'GeneralSans-Regular',
    fontSize: 15,
    color: '#64748b',
  },
  toggleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  toggleLabel: {
    fontFamily: 'GeneralSans-Medium',
    fontSize: 14,
    color: '#0f172a',
    flex: 1,
  },
  toggleOn: {
    width: 44,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#34C759',
    justifyContent: 'center',
    paddingHorizontal: 2,
  },
  toggleThumb: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    alignSelf: 'flex-end',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  rowInputs: {
    flexDirection: 'row',
    gap: 16,
  },
  halfInputGroup: {
    flex: 1,
    gap: 8,
  },
  keypadSection: {
    backgroundColor: '#f8fafc',
    borderTopWidth: 1,
    borderTopColor: '#e2e8f0',
    paddingTop: 16,
    paddingBottom: Platform.OS === 'ios' ? 34 : 24,
  },
  ctaContainer: {
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  ctaButton: {
    height: 52,
    backgroundColor: 'rgba(229,112,43,0.8)',
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  ctaText: {
    fontFamily: 'GeneralSans-Semibold',
    fontSize: 16,
    color: '#ffffff',
  },
  numpadGrid: {
    paddingHorizontal: 24,
    gap: 10,
  },
  numpadRow: {
    flexDirection: 'row',
    gap: 10,
  },
  key: {
    flex: 1,
    height: 48,
    backgroundColor: '#f1f5f9',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  keyEmpty: {
    flex: 1,
    height: 48,
  },
  keyAction: {
    flex: 1,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  keyText: {
    fontFamily: 'ClashDisplay-Bold',
    fontSize: 24,
    color: '#0f172a',
  },
  keySubtext: {
    fontFamily: 'GeneralSans-Medium',
    fontSize: 10,
    color: '#64748b',
    textTransform: 'uppercase',
    marginTop: -2,
  },
});
