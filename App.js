import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import Navigation from './src/navigation';
import Amplify from 'aws-amplify'
import awsconfig from './src/aws-exports'
Amplify.configure(awsconfig)
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      {/* Navigation will go here */}
      <Navigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
