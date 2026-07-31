import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, ImageBackground, Platform } from 'react-native';
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function CardScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Balance Header */}
        <View style={styles.balanceHeader}>
          <Text style={styles.balanceAmount}>15 USD</Text>
          <View style={styles.balanceLabelRow}>
            <Text style={styles.balanceSubtitle}>Available to spend</Text>
            <Feather name="info" size={14} color="#94a3b8" />
          </View>
        </View>

        <View style={styles.cardContainer}>
          <ImageBackground 
            source={require('../../assets/images/wallet-card.png')} 
            style={styles.zephyrCard} 
            imageStyle={styles.cardBgImage}
          >
            <LinearGradient
              colors={['rgba(207,250,254,0.2)', 'rgba(165,243,252,0.2)']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={[StyleSheet.absoluteFill, { zIndex: 1 }]}
            />
            
            <Text style={[styles.hugeOverlayText, { zIndex: 2 }]}>ZEPHYR</Text>
            
            <View style={[styles.cardContent, { zIndex: 3 }]}>
              <View style={styles.cardTopRow}>
                <Text style={styles.cardBrand}>ZEPHYR</Text>
                <View style={styles.cardChip} />
              </View>
              
              <View style={styles.cardBottomRow}>
                <View style={styles.cardHolderContainer}>
                  <Text style={styles.cardHolder}>Sarah Jenkins</Text>
                </View>
                <Text style={styles.cardType}>VISA</Text>
              </View>
            </View>
          </ImageBackground>
        </View>

        {/* Card Metadata */}
        <View style={styles.cardMetadataRow}>
          <Text style={styles.cardMetadataType}>Physical card</Text>
          <Text style={styles.cardMetadataNumber}>•••• 8841</Text>
        </View>

        {/* Dashboard Actions */}
        <View style={styles.dashboardActions}>
          <TouchableOpacity style={styles.actionButton} activeOpacity={0.7}>
            <View style={styles.actionIconOuter}>
              <Feather name="plus" size={20} color="#0f172a" />
            </View>
            <Text style={styles.actionLabel}>Add money</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton} activeOpacity={0.7}>
            <View style={styles.actionIconOuter}>
              <Feather name="grid" size={20} color="#0f172a" />
            </View>
            <Text style={styles.actionLabel}>Card details</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton} activeOpacity={0.7}>
            <View style={styles.actionIconOuter}>
              <Feather name="snowflake" size={20} color="#0f172a" />
            </View>
            <Text style={styles.actionLabel}>Freeze card</Text>
          </TouchableOpacity>
        </View>

        {/* Integrations Section */}
        <View style={styles.integrationsSection}>
          <TouchableOpacity style={styles.appleWalletRow} activeOpacity={0.7}>
            <FontAwesome5 name="apple" size={18} color="#0f172a" style={styles.appleIcon} />
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
    backgroundColor: '#f8fafc',
  },
  scrollContent: {
    paddingBottom: 40,
  },
  balanceHeader: {
    alignItems: 'center',
    paddingTop: 24,
    paddingBottom: 20,
  },
  balanceAmount: {
    fontFamily: 'ClashDisplay-Bold',
    fontSize: 38,
    color: '#0f172a',
  },
  balanceLabelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 4,
  },
  balanceSubtitle: {
    fontFamily: 'GeneralSans-Medium',
    fontSize: 14,
    color: '#94a3b8',
  },
  cardContainer: {
    paddingHorizontal: 24,
    width: '100%',
  },
  zephyrCard: {
    width: '100%',
    height: 184,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(8,145,178,0.13)',
    backgroundColor: '#f8fafc',
    overflow: 'hidden',
  },
  cardContent: {
    flex: 1,
    padding: 24,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  cardBgImage: {
    width: '100%',
    height: '100%',
    opacity: 0.5,
    resizeMode: 'cover',
  },
  hugeOverlayText: {
    position: 'absolute',
    top: 47,
    left: 23,
    fontFamily: 'ClashDisplay-Bold',
    fontSize: 44,
    color: '#0f172a',
    opacity: 0.08,
  },
  cardTopRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 10,
  },
  cardBrand: {
    fontFamily: 'ClashDisplay-Bold',
    fontSize: 18,
    color: '#0f172a',
  },
  cardChip: {
    width: 36,
    height: 24,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 4,
  },
  cardBottomRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    zIndex: 10,
  },
  cardHolderContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  cardHolder: {
    fontFamily: 'GeneralSans-Medium',
    fontSize: 14,
    color: '#0f172a',
  },
  cardType: {
    fontFamily: 'ClashDisplay-Bold',
    fontSize: 20,
    color: '#0f172a',
  },
  cardMetadataRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingTop: 16,
    paddingHorizontal: 24,
  },
  cardMetadataType: {
    fontFamily: 'GeneralSans-Semibold',
    fontSize: 15,
    color: '#0f172a',
  },
  cardMetadataNumber: {
    fontFamily: 'GeneralSans-Regular',
    fontSize: 14,
    color: '#94a3b8',
  },
  dashboardActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingTop: 24,
    paddingHorizontal: 24,
  },
  actionButton: {
    width: 80,
    alignItems: 'center',
    gap: 8,
  },
  actionIconOuter: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#e2e8f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionLabel: {
    fontFamily: 'GeneralSans-Semibold',
    fontSize: 12,
    color: '#0f172a',
    textAlign: 'center',
  },
  integrationsSection: {
    paddingTop: 32,
    paddingHorizontal: 24,
    width: '100%',
  },
  appleWalletRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 12,
    height: 56,
    paddingHorizontal: 16,
    gap: 12,
  },
  appleIcon: {
    marginLeft: 4,
  },
  applePayLabel: {
    flex: 1,
    fontFamily: 'GeneralSans-Semibold',
    fontSize: 14,
    color: '#0f172a',
  }
});
