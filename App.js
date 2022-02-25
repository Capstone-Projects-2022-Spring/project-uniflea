import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import CreateListingScreen from './src/screens/CreateListingScreen'
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <CreateListingScreen/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
