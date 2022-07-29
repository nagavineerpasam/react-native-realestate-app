import {
  Dimensions,
  FlatList, ListRenderItem, SafeAreaView, StyleSheet, Text, View,
} from 'react-native';
import Apartment from '../components/Apartment';
import rooms from '../Data/apartments';
import { roomsType } from '../types';

const deviceHeight = Dimensions.get('window').height;
function Home() {
  const renderItem: ListRenderItem<roomsType> = ({ item }) => <Apartment {...item}/>;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.heading}>Find Your Dream Stay</Text>
        <View style={{ flex: 1 }}>
          <FlatList
            data={rooms}
            renderItem={renderItem}
            keyExtractor={(item: roomsType) => item.id.toString()}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Home;

const styles = StyleSheet.create(({
  container: {
    margin: 22,
    flex: 1,
  },
  heading: {
    marginTop: deviceHeight * 0.01,
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 15,
    width: '40%',
  },
}));
