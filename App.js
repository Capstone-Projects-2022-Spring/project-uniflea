import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import SignInScreen from './src/screens/SignInScreen';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      {/* Navigation will go here */}
      <SignInScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
