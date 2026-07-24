import { View, Text, StyleSheet } from 'react-native';

export default function RecipientsScreen() {
  return (
    <View style={styles.container}>
      <Text>Recipients Screen</Text>
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
