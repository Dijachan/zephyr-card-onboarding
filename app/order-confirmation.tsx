import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, ScrollView, Modal, Pressable, Animated } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function OrderConfirmationScreen() {
  const router = useRouter();
  const [selectedTopUp, setSelectedTopUp] = useState<string>('15 USD');
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
  
  // Animation value for scroll position
  const scrollY = useRef(new Animated.Value(0)).current;

  const topUpOptions = ['0 USD', '15 USD', '30 USD', '75 USD'];

  // Calculate totals
  const baseFee = 9;
  const topUpAmount = parseInt(selectedTopUp.split(' ')[0], 10) || 0;
  const totalAmount = baseFee + topUpAmount;

  // The small header title opacity should increase as you scroll past the big title (y: ~40-60)
  const headerTitleOpacity = scrollY.interpolate({
    inputRange: [40, 80],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        
        {/* Fixed Navigation Bar with Animated Title */}
        <View style={styles.navBar}>
          <TouchableOpacity onPress={() => router.back()} style={styles.closeButton}>
            <Feather name="x" size={16} color="#111827" />
          </TouchableOpacity>
          <Animated.Text style={[styles.headerTitle, { opacity: headerTitleOpacity }]}>
            Confirm your order
          </Animated.Text>
          <View style={{ width: 40 }} />
        </View>

        <Animated.ScrollView 
          contentContainerStyle={styles.scrollContent} 
          showsVerticalScrollIndicator={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: true }
          )}
          scrollEventThrottle={16}
        >
          {/* Headline & Currency (Disappears on scroll) */}
          <View style={styles.header}>
            <Text style={styles.headlineText}>Confirm your order</Text>
            <View style={styles.currencySelector}>
              <Text style={styles.currencyLabel}>Paying in USD</Text>
              <Feather name="chevron-down" size={12} color="#6b7280" />
            </View>
          </View>

          <View style={styles.summarySection}>
            {/* Top part: Your order (from 31251:3362) */}
            <Text style={styles.sectionTitle}>Your order</Text>
            
            <View style={styles.orderItem}>
              <View style={styles.itemLeft}>
                <View style={styles.iconCircleCyan}>
                  <Feather name="credit-card" size={18} color="#111827" />
                </View>
                <View style={styles.itemTextGroup}>
                  <Text style={styles.itemName}>Zephyr card</Text>
                  <Text style={styles.itemDesc}>One-time fee</Text>
                </View>
              </View>
              <Text style={styles.itemPrice}>9 USD</Text>
            </View>

            <View style={styles.orderItem}>
              <View style={styles.itemLeft}>
                <View style={[styles.iconCircleCyan, { borderRadius: 22 }]}>
                  <Feather name="plus" size={18} color="#111827" />
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
            </View>

            <View style={styles.divider} />

            {/* Payment Method */}
            <View style={styles.paymentMethodSection}>
              <View style={styles.paymentHeader}>
                <Text style={styles.paymentTitle}>Payment method</Text>
                <TouchableOpacity onPress={() => setBottomSheetVisible(true)}>
                  <Text style={styles.changeText}>Change</Text>
                </TouchableOpacity>
              </View>
              
              <View style={styles.paymentMethodRow}>
                <Feather name="credit-card" size={20} color="#111827" style={{ marginRight: 12 }} />
                <Text style={styles.paymentMethodText}>Debit card</Text>
              </View>
            </View>

            <View style={styles.divider} />

            {/* Bottom part: Price Breakdown (from 31251:3432) */}
            <View style={styles.priceBreakdownSection}>
              <Text style={styles.sectionTitle}>Price breakdown</Text>
              
              <View style={styles.breakdownRow}>
                <Text style={styles.breakdownLabel}>Card order</Text>
                <Text style={styles.breakdownValue}>8.33 USD</Text>
              </View>
              
              <View style={styles.breakdownRow}>
                <Text style={styles.breakdownLabel}>Card order VAT</Text>
                <Text style={styles.breakdownValue}>0.67 USD</Text>
              </View>

              <View style={styles.breakdownRow}>
                <Text style={styles.breakdownLabel}>Deposit money</Text>
                <Text style={styles.breakdownValue}>{topUpAmount} USD</Text>
              </View>
              
              <View style={styles.breakdownTotalRow}>
                <Text style={styles.breakdownTotalLabel}>Total</Text>
                <Text style={styles.breakdownTotalValue}>{totalAmount} USD</Text>
              </View>
            </View>

            <View style={styles.divider} />

            {/* Big Total */}
            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>Total</Text>
              <Text style={styles.totalValue}>{totalAmount} USD</Text>
            </View>
          </View>
        </Animated.ScrollView>

        {/* Floating Footer CTA */}
        <View style={styles.footer}>
          <TouchableOpacity 
            style={styles.ctaButton}
            activeOpacity={0.9}
            onPress={() => router.push('/pay-new-card')}
          >
            <Text style={styles.ctaText}>Pay {totalAmount} USD</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Payment Options Bottom Sheet */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={bottomSheetVisible}
        onRequestClose={() => setBottomSheetVisible(false)}
      >
        <Pressable style={styles.modalOverlay} onPress={() => setBottomSheetVisible(false)}>
          <Pressable style={styles.bottomSheet} onPress={(e) => e.stopPropagation()}>
            <View style={styles.dragHandleContainer}>
              <View style={styles.dragHandle} />
            </View>

            <View style={styles.sheetHeader}>
              <Text style={styles.sheetTitle}>Payment options</Text>
              <TouchableOpacity onPress={() => setBottomSheetVisible(false)} style={styles.sheetCloseButton}>
                <Feather name="x" size={16} color="#111827" />
              </TouchableOpacity>
            </View>

            <View style={styles.optionsContainer}>
              <TouchableOpacity 
                style={styles.optionRow} 
                onPress={() => {
                  setBottomSheetVisible(false);
                  router.push('/pay-new-card');
                }}
              >
                <View style={styles.optionLeft}>
                  <View style={[styles.optionIconContainer, { backgroundColor: '#ecfeff' }]}>
                    <Feather name="credit-card" size={18} color="#111827" />
                  </View>
                  <Text style={[styles.optionText, { fontFamily: 'GeneralSans-Semibold' }]}>Debit card</Text>
                </View>
                <View style={styles.radioOuterSelected}>
                  <View style={styles.radioInner} />
                </View>
              </TouchableOpacity>

              <View style={styles.optionDivider} />

              <TouchableOpacity 
                style={styles.optionRow}
                onPress={() => {
                  setBottomSheetVisible(false);
                  router.push('/pay-new-card');
                }}
              >
                <View style={styles.optionLeft}>
                  <View style={[styles.optionIconContainer, { backgroundColor: '#f9fafb' }]}>
                    <Feather name="credit-card" size={18} color="#111827" />
                  </View>
                  <Text style={styles.optionText}>Credit card</Text>
                </View>
                <View style={styles.radioOuterEmpty} />
              </TouchableOpacity>

              <View style={styles.optionDivider} />

              <TouchableOpacity style={styles.optionRow}>
                <View style={styles.optionLeft}>
                  <View style={[styles.optionIconContainer, { backgroundColor: '#f9fafb' }]}>
                    <Feather name="briefcase" size={18} color="#111827" />
                  </View>
                  <Text style={styles.optionText}>Bank transfer</Text>
                </View>
                <View style={styles.radioOuterEmpty} />
              </TouchableOpacity>
            </View>
            <View style={{ height: 34 }} />
          </Pressable>
        </Pressable>
      </Modal>
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
    paddingBottom: 24,
  },
  navBar: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    height: 56,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    zIndex: 10,
  },
  closeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f9fafb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontFamily: 'ClashDisplay-Bold',
    fontSize: 18,
    color: '#111827',
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 8,
    gap: 8,
  },
  headlineText: {
    fontFamily: 'ClashDisplay-Bold',
    fontSize: 28,
    color: '#111827',
  },
  currencySelector: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  currencyLabel: {
    fontFamily: 'GeneralSans-Medium',
    fontSize: 14,
    color: '#6b7280',
  },
  summarySection: {
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  sectionTitle: {
    fontFamily: 'GeneralSans-Bold',
    fontSize: 14,
    color: '#6b7280',
    textTransform: 'uppercase',
    marginBottom: 16,
  },
  orderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  iconCircleCyan: {
    width: 44,
    height: 44,
    borderRadius: 8,
    backgroundColor: '#ecfeff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemTextGroup: {
    gap: 2,
  },
  itemName: {
    fontFamily: 'GeneralSans-Semibold',
    fontSize: 15,
    color: '#111827',
  },
  itemDesc: {
    fontFamily: 'GeneralSans-Medium',
    fontSize: 13,
    color: '#6b7280',
  },
  itemPrice: {
    fontFamily: 'GeneralSans-Semibold',
    fontSize: 15,
    color: '#111827',
  },
  pillsContainer: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 8,
  },
  pill: {
    flex: 1,
    height: 36,
    borderRadius: 20,
    backgroundColor: '#f9fafb',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pillSelected: {
    backgroundColor: '#0891b2',
    borderColor: '#0891b2',
  },
  pillText: {
    fontFamily: 'GeneralSans-Semibold',
    fontSize: 13,
    color: '#111827',
  },
  pillTextSelected: {
    color: '#ffffff',
  },
  divider: {
    height: 1,
    backgroundColor: '#f3f4f6',
    marginVertical: 24,
  },
  paymentMethodSection: {
    gap: 14,
  },
  paymentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  paymentTitle: {
    fontFamily: 'GeneralSans-Bold',
    fontSize: 14,
    color: '#6b7280',
    textTransform: 'uppercase',
  },
  changeText: {
    fontFamily: 'GeneralSans-Semibold',
    fontSize: 14,
    color: '#0891b2',
  },
  paymentMethodRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paymentMethodText: {
    fontFamily: 'GeneralSans-Medium',
    fontSize: 15,
    color: '#111827',
  },
  priceBreakdownSection: {
    gap: 16,
  },
  breakdownRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  breakdownLabel: {
    fontFamily: 'GeneralSans-Medium',
    fontSize: 14,
    color: '#6b7280',
  },
  breakdownValue: {
    fontFamily: 'GeneralSans-Medium',
    fontSize: 14,
    color: '#111827',
  },
  breakdownTotalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 4,
  },
  breakdownTotalLabel: {
    fontFamily: 'GeneralSans-Bold',
    fontSize: 14,
    color: '#111827',
  },
  breakdownTotalValue: {
    fontFamily: 'GeneralSans-Bold',
    fontSize: 14,
    color: '#111827',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: -8,
  },
  totalLabel: {
    fontFamily: 'GeneralSans-Bold',
    fontSize: 18,
    color: '#111827',
  },
  totalValue: {
    fontFamily: 'ClashDisplay-Bold',
    fontSize: 22,
    color: '#111827',
  },
  footer: {
    paddingHorizontal: 24,
    paddingBottom: 24,
    backgroundColor: '#ffffff',
  },
  ctaButton: {
    height: 52,
    backgroundColor: 'rgba(229,112,43,0.8)',
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ctaText: {
    fontFamily: 'GeneralSans-Semibold',
    fontSize: 16,
    color: '#ffffff',
  },
  // Modal Bottom Sheet Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'flex-end',
  },
  bottomSheet: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: 12,
    paddingBottom: 8,
  },
  dragHandleContainer: {
    alignItems: 'center',
    paddingBottom: 12,
  },
  dragHandle: {
    width: 36,
    height: 4,
    backgroundColor: '#e5e7eb',
    borderRadius: 2,
  },
  sheetHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingBottom: 20,
  },
  sheetTitle: {
    fontFamily: 'ClashDisplay-Bold',
    fontSize: 20,
    color: '#111827',
  },
  sheetCloseButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#f9fafb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionsContainer: {
    paddingHorizontal: 24,
    gap: 20,
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  optionIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionText: {
    fontFamily: 'GeneralSans-Medium',
    fontSize: 16,
    color: '#111827',
  },
  optionDivider: {
    height: 1,
    backgroundColor: '#f3f4f6',
    width: '100%',
  },
  radioOuterSelected: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: '#0891b2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#0891b2',
  },
  radioOuterEmpty: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: '#d1d5db',
  }
});
