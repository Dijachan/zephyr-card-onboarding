import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import * as Animatable from 'react-native-animatable';

export default function SetPinScreen() {
  const router = useRouter();
  const [pin, setPin] = useState('');

  useEffect(() => {
    if (pin.length === 4) {
      const timeout = setTimeout(() => {
        router.push('/repeat-pin');
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
            <Text style={styles.headlineText}>Set a new 4-digit PIN</Text>
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

        {/* Custom Numpad */}
        <Animatable.View animation="fadeInUp" duration={600} delay={300} style={styles.keypad}>
          {[
            ['1', '2', '3'],
            ['4', '5', '6'],
            ['7', '8', '9'],
            ['', '0', 'backspace'],
          ].map((row, rowIndex) => (
            <View key={rowIndex} style={styles.keypadRow}>
              {row.map((key, colIndex) => {
                if (key === '') {
                  return <View key={colIndex} style={styles.keyButton} />;
                }
                if (key === 'backspace') {
                  return (
                    <TouchableOpacity
                      key={colIndex}
                      style={styles.keyButton}
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
                    style={styles.keyButton}
                    onPress={() => handlePressKey(key)}
                    activeOpacity={0.6}
                  >
                    <Text style={styles.keyText}>{key}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          ))}
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
  },
  headlineText: {
    fontFamily: 'ClashDisplay-Bold',
    fontSize: 32,
    color: '#0f172a',
  },
  boxesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
    paddingTop: 32,
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
  keypad: {
    paddingHorizontal: 24,
    paddingBottom: 36,
    gap: 16,
  },
  keypadRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  keyButton: {
    width: 80,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  keyText: {
    fontFamily: 'GeneralSans-Semibold',
    fontSize: 26,
    color: '#0f172a',
  },
});
