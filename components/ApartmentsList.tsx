import {
  FlatList, ListRenderItem, SafeAreaView, StyleSheet, Text, View,
} from 'react-native';
import { roomsType } from '../types';
import Apartment from './Apartment';

type apartmentsListType = {
  apartmentsListData: Array<roomsType>,
  title: string,
};

function ApartmentsList({ apartmentsListData, title }: apartmentsListType) {
  const renderItem: ListRenderItem<roomsType> = ({ item }) => <Apartment {...item}/>;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View>
          <Text style={styles.heading}>{title}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <FlatList
            data={apartmentsListData}
            renderItem={renderItem}
            keyExtractor={(item: roomsType) => item.id.toString()}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default ApartmentsList;

const styles = StyleSheet.create(({
  container: {
    margin: 22,
    flex: 1,
  },
  heading: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 15,
    width: '40%',
  },
}));
