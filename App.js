import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      {/* Navigation will go here */}
      <SignUpScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
