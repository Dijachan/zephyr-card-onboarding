import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Feather, FontAwesome5 } from '@expo/vector-icons';

export default function CardScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Balance Header */}
        <View style={styles.balanceHeader}>
          <Text style={styles.balanceAmount}>15 USD</Text>
          <View style={styles.balanceLabelRow}>
            <Text style={styles.balanceSubtitle}>Available to spend</Text>
            <Feather name="info" size={14} color="#64748b" />
          </View>
        </View>

        {/* Card Mockup */}
        <View style={styles.cardContainer}>
          <Image 
            source={require('../../assets/images/wallet-card.png')} 
            style={styles.cardImage}
            resizeMode="contain"
          />
        </View>

        {/* Card Metadata */}
        <View style={styles.cardMetadata}>
          <Text style={styles.cardDetailsLabel}>Card details</Text>
          <Text style={styles.cardMaskedNumber}>Physical card •••• 8641</Text>
        </View>

        {/* Dashboard Actions */}
        <View style={styles.dashboardActions}>
          <TouchableOpacity style={styles.actionButton}>
            <View style={styles.actionIconOuter}>
              <Feather name="plus" size={20} color="#0f172a" />
            </View>
            <Text style={styles.actionLabel}>Add money</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>
            <View style={styles.actionIconOuter}>
              <Feather name="grid" size={20} color="#0f172a" />
            </View>
            <Text style={styles.actionLabel}>Card details</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>
            <View style={styles.actionIconOuter}>
              <Feather name="snowflake" size={20} color="#0f172a" />
            </View>
            <Text style={styles.actionLabel}>Freeze card</Text>
          </TouchableOpacity>
        </View>

        {/* Integrations Section */}
        <View style={styles.integrationsSection}>
          <TouchableOpacity style={styles.appleWalletRow} activeOpacity={0.7}>
            <FontAwesome5 name="apple" size={20} color="#0f172a" style={styles.appleIcon} />
            <Text style={styles.applePayLabel}>Add to Apple Wallet</Text>
            <Feather name="chevron-right" size={16} color="#94a3b8" />
          </TouchableOpacity>
        </View>
        
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollContent: {
    paddingBottom: 40,
  },
  balanceHeader: {
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 24,
  },
  balanceAmount: {
    fontFamily: 'ClashDisplay-Bold',
    fontSize: 40,
    color: '#0f172a',
  },
  balanceLabelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 4,
  },
  balanceSubtitle: {
    fontFamily: 'GeneralSans-Medium',
    fontSize: 15,
    color: '#64748b',
  },
  cardContainer: {
    paddingHorizontal: 24,
    height: 184,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardImage: {
    width: '100%',
    height: '100%',
  },
  cardMetadata: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    marginTop: 32,
    marginBottom: 24,
  },
  cardDetailsLabel: {
    fontFamily: 'GeneralSans-Semibold',
    fontSize: 16,
    color: '#0f172a',
  },
  cardMaskedNumber: {
    fontFamily: 'GeneralSans-Medium',
    fontSize: 14,
    color: '#64748b',
  },
  dashboardActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  actionButton: {
    alignItems: 'center',
    width: 80,
    gap: 8,
  },
  actionIconOuter: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#f1f5f9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionLabel: {
    fontFamily: 'GeneralSans-Medium',
    fontSize: 13,
    color: '#0f172a',
    textAlign: 'center',
  },
  integrationsSection: {
    paddingHorizontal: 24,
  },
  appleWalletRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: '#f8fafc',
    borderRadius: 16,
  },
  appleIcon: {
    marginRight: 16,
  },
  applePayLabel: {
    flex: 1,
    fontFamily: 'GeneralSans-Semibold',
    fontSize: 15,
    color: '#0f172a',
  }
});
