import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import * as Animatable from 'react-native-animatable';

export default function OrderConfirmationScreen() {
  const router = useRouter();
  const [selectedTopUp, setSelectedTopUp] = useState<string>('0 USD');

  const topUpOptions = ['0 USD', '15 USD', '30 USD', '75 USD'];

  // Calculate total: 9 USD for the card + selected top up
  const baseFee = 9;
  const topUpAmount = parseInt(selectedTopUp.split(' ')[0], 10) || 0;
  const totalAmount = baseFee + topUpAmount;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          {/* Navigation Bar */}
          <Animatable.View animation="fadeInDown" duration={500} style={styles.navBar}>
            <TouchableOpacity onPress={() => router.back()} style={styles.closeButton}>
              <Feather name="x" size={20} color="#0f172a" />
            </TouchableOpacity>
          </Animatable.View>

          {/* Headline & Currency */}
          <Animatable.View animation="fadeIn" duration={600} delay={100} style={styles.header}>
            <Text style={styles.headlineText}>Confirm your order</Text>
            <View style={styles.currencySelector}>
              <Text style={styles.currencyLabel}>Paying in</Text>
              <Text style={styles.currencyValue}>USD</Text>
              <Feather name="chevron-down" size={14} color="#0f172a" />
            </View>
          </Animatable.View>

          {/* Order Summary */}
          <Animatable.View animation="fadeInUp" duration={600} delay={200} style={styles.summarySection}>
            <Text style={styles.sectionTitle}>Your order</Text>
            
            <View style={styles.divider} />

            {/* Item 1: Zephyr Card */}
            <View style={styles.orderItem}>
              <View style={styles.itemLeft}>
                <View style={styles.iconCircle}>
                  <Feather name="credit-card" size={20} color="#0891b2" />
                </View>
                <View style={styles.itemTextGroup}>
                  <Text style={styles.itemName}>Zephyr card</Text>
                  <Text style={styles.itemDesc}>One-time fee</Text>
                </View>
              </View>
              <Text style={styles.itemPrice}>9 USD</Text>
            </View>

            <View style={styles.divider} />

            {/* Item 2: Add money */}
            <View style={styles.orderItem}>
              <View style={styles.itemLeft}>
                <View style={styles.iconCircle}>
                  <Feather name="flag" size={20} color="#0891b2" />
                </View>
                <View style={styles.itemTextGroup}>
                  <Text style={styles.itemName}>Add money</Text>
                  <Text style={styles.itemDesc}>Top up your USD balance</Text>
                </View>
              </View>
              <Text style={styles.itemPrice}>{selectedTopUp}</Text>
            </View>

            {/* Top Up Pills */}
            <View style={styles.pillsContainer}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.pillsScroll}>
                {topUpOptions.map((option) => {
                  const isSelected = selectedTopUp === option;
                  return (
                    <TouchableOpacity
                      key={option}
                      style={[styles.pill, isSelected && styles.pillSelected]}
                      activeOpacity={0.7}
                      onPress={() => setSelectedTopUp(option)}
                    >
                      <Text style={[styles.pillText, isSelected && styles.pillTextSelected]}>
                        {option}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </View>

            <View style={styles.divider} />

            {/* Payment Method */}
            <View style={styles.paymentMethodSection}>
              <View style={styles.paymentHeader}>
                <Text style={styles.sectionTitle}>Payment method</Text>
                <TouchableOpacity>
                  <Text style={styles.changeText}>Change</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.paymentCard}>
                <View style={styles.iconCircle}>
                  <Feather name="credit-card" size={20} color="#0891b2" />
                </View>
                <Text style={styles.paymentMethodText}>Debit card</Text>
              </View>
            </View>

            <View style={styles.divider} />

            {/* Total */}
            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>Total</Text>
              <Text style={styles.totalValue}>{totalAmount} USD</Text>
            </View>
          </Animatable.View>
        </ScrollView>

        {/* Footer CTA */}
        <Animatable.View animation="fadeInUp" duration={600} delay={400} style={styles.footer}>
          <TouchableOpacity 
            style={styles.ctaButton}
            activeOpacity={0.9}
            onPress={() => router.replace('/(tabs)/card')}
          >
            <Text style={styles.ctaText}>Add card</Text>
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
  closeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f1f5f9',
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
  currencySelector: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  currencyLabel: {
    fontFamily: 'GeneralSans-Medium',
    fontSize: 15,
    color: '#64748b',
  },
  currencyValue: {
    fontFamily: 'GeneralSans-Semibold',
    fontSize: 15,
    color: '#0f172a',
  },
  summarySection: {
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  sectionTitle: {
    fontFamily: 'GeneralSans-Semibold',
    fontSize: 16,
    color: '#0f172a',
    marginBottom: 16,
  },
  divider: {
    height: 1,
    backgroundColor: '#f1f5f9',
    marginVertical: 16,
  },
  orderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#ecfeff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemTextGroup: {
    gap: 4,
  },
  itemName: {
    fontFamily: 'GeneralSans-Semibold',
    fontSize: 16,
    color: '#0f172a',
  },
  itemDesc: {
    fontFamily: 'GeneralSans-Regular',
    fontSize: 14,
    color: '#64748b',
  },
  itemPrice: {
    fontFamily: 'GeneralSans-Semibold',
    fontSize: 16,
    color: '#0f172a',
  },
  pillsContainer: {
    marginTop: 16,
  },
  pillsScroll: {
    gap: 12,
  },
  pill: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    backgroundColor: '#ffffff',
  },
  pillSelected: {
    borderColor: '#0891b2',
    backgroundColor: '#0891b2',
  },
  pillText: {
    fontFamily: 'GeneralSans-Medium',
    fontSize: 14,
    color: '#475569',
  },
  pillTextSelected: {
    color: '#ffffff',
  },
  paymentMethodSection: {
    // Spacing handled by dividers
  },
  paymentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  changeText: {
    fontFamily: 'GeneralSans-Medium',
    fontSize: 14,
    color: '#0891b2',
  },
  paymentCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  paymentMethodText: {
    fontFamily: 'GeneralSans-Semibold',
    fontSize: 16,
    color: '#0f172a',
  },
  totalRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  totalLabel: {
    fontFamily: 'GeneralSans-Bold',
    fontSize: 16,
    color: '#0f172a',
  },
  totalValue: {
    fontFamily: 'GeneralSans-Bold',
    fontSize: 16,
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
  ctaText: {
    fontFamily: 'GeneralSans-Semibold',
    fontSize: 16,
    color: '#ffffff',
  },
  ctaIcon: {
    marginTop: 2,
  },
});
