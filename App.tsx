import { SafeAreaView, StatusBar } from 'react-native';
import Navigation from './Navigation';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle='light-content'/>
      <Navigation/>
    </SafeAreaView>
  );
}
