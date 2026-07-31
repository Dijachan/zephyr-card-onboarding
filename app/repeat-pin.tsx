import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, Platform } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import * as Animatable from 'react-native-animatable';

const KEYPAD_DATA = [
  [{ num: '1', sub: '' }, { num: '2', sub: 'ABC' }, { num: '3', sub: 'DEF' }],
  [{ num: '4', sub: 'GHI' }, { num: '5', sub: 'JKL' }, { num: '6', sub: 'MNO' }],
  [{ num: '7', sub: 'PQRS' }, { num: '8', sub: 'TUV' }, { num: '9', sub: 'WXYZ' }],
  [{ num: '', sub: '' }, { num: '0', sub: '' }, { num: 'backspace', sub: '' }],
];

export default function RepeatPinScreen() {
  const router = useRouter();
  const [pin, setPin] = useState('');

  useEffect(() => {
    if (pin.length === 4) {
      const timeout = setTimeout(() => {
        router.push('/purpose-question');
      }, 250);
      return () => clearTimeout(timeout);
    }
  }, [pin, router]);

  const handlePressKey = (key: string) => {
    if (key === 'backspace') {
      setPin((prev) => prev.slice(0, -1));
    } else if (pin.length < 4 && key !== '') {
      setPin((prev) => prev + key);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Top Header & PIN Display */}
        <View style={styles.topSection}>
          <Animatable.View animation="fadeInDown" duration={500} style={styles.navBar}>
            <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
              <Feather name="chevron-left" size={24} color="#0f172a" />
            </TouchableOpacity>
          </Animatable.View>

          <Animatable.View animation="fadeIn" duration={600} delay={100} style={styles.headlineContainer}>
            <Text style={styles.headlineText}>Confirm your new PIN</Text>
            <Text style={styles.subheadText}>Please re-enter the 4-digit PIN you just created.</Text>
          </Animatable.View>

          {/* Passcode Boxes */}
          <Animatable.View animation="fadeInUp" duration={600} delay={200} style={styles.boxesContainer}>
            {[0, 1, 2, 3].map((index) => {
              const isFilled = index < pin.length;
              const isActive = index === pin.length;
              return (
                <View 
                  key={index} 
                  style={[
                    styles.pinBox, 
                    isFilled && styles.pinBoxFilled,
                    isActive && styles.pinBoxActive
                  ]}
                >
                  {isFilled ? (
                    <View style={styles.pinDot} />
                  ) : isActive ? (
                    <View style={styles.cursorLine} />
                  ) : null}
                </View>
              );
            })}
          </Animatable.View>
        </View>

        {/* Custom Keypad matching pay-new-card */}
        <Animatable.View animation="fadeInUp" duration={600} delay={300} style={styles.keypadSection}>
          <View style={styles.numpadGrid}>
            {KEYPAD_DATA.map((row, rowIndex) => (
              <View key={rowIndex} style={styles.numpadRow}>
                {row.map((item, colIndex) => {
                  if (item.num === '') {
                    return <View key={colIndex} style={styles.keyEmpty} />;
                  }
                  if (item.num === 'backspace') {
                    return (
                      <TouchableOpacity
                        key={colIndex}
                        style={styles.keyAction}
                        onPress={() => handlePressKey('backspace')}
                        activeOpacity={0.6}
                      >
                        <Feather name="delete" size={24} color="#0f172a" />
                      </TouchableOpacity>
                    );
                  }
                  return (
                    <TouchableOpacity
                      key={colIndex}
                      style={styles.key}
                      onPress={() => handlePressKey(item.num)}
                      activeOpacity={0.6}
                    >
                      <Text style={styles.keyText}>{item.num}</Text>
                      {item.sub ? <Text style={styles.keySubtext}>{item.sub}</Text> : null}
                    </TouchableOpacity>
                  );
                })}
              </View>
            ))}
          </View>
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
  headlineContainer: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    gap: 8,
  },
  headlineText: {
    fontFamily: 'ClashDisplay-Bold',
    fontSize: 32,
    color: '#0f172a',
  },
  subheadText: {
    fontFamily: 'GeneralSans-Regular',
    fontSize: 15,
    color: '#64748b',
    lineHeight: 22,
  },
  boxesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
    paddingTop: 24,
  },
  pinBox: {
    width: 60,
    height: 60,
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: '#e2e8f0',
    backgroundColor: '#f8fafc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pinBoxActive: {
    borderColor: '#0891b2',
    backgroundColor: '#ecfeff',
  },
  pinBoxFilled: {
    borderColor: '#0f172a',
    backgroundColor: '#ffffff',
  },
  pinDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#0f172a',
  },
  cursorLine: {
    width: 2,
    height: 24,
    backgroundColor: '#0891b2',
  },
  keypadSection: {
    backgroundColor: '#f8fafc',
    borderTopWidth: 1,
    borderTopColor: '#e2e8f0',
    paddingTop: 16,
    paddingBottom: Platform.OS === 'ios' ? 34 : 24,
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
