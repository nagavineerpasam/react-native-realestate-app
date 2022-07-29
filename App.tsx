import { SafeAreaView } from 'react-native';
import Navigation from './Navigation';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Navigation/>
    </SafeAreaView>

  );
}
