import { View, Text, StyleSheet } from 'react-native';

export default function CardScreen() {
  return (
    <View style={styles.container}>
      <Text>Card Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
