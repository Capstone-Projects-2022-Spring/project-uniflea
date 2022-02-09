import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import Navigation from './src/navigation';
import ProfilePage from './src/screens/ProfileScreen';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      {/* Navigation will go here */}
      {/*<Navigation />*/}
      <ProfilePage/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
