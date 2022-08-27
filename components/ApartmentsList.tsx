import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  FlatList, ListRenderItem, SafeAreaView, StyleSheet, Text, View,
} from 'react-native';
import Constants from 'expo-constants';
import { roomsType } from '../types';
import Apartment from './Apartment';
import { POSTS_URL1, POSTS_URL2 } from '../environment';

type apartmentsListType = {
  apartmentsListData: Array<roomsType>,
  title: string,
};

function ApartmentsList({ apartmentsListData, title }: apartmentsListType) {
  const [id1, setId1] = useState(0);
  const [id2, setId2] = useState(0);

  useEffect(() => {
    const fetchId = async () => {
      axios.get(POSTS_URL1).then((res) => {
        setId1(res.data.id);
      });
      axios.get(POSTS_URL2).then((res) => {
        setId2(res.data.id);
      });
    };
    fetchId();
  }, []);
  const renderItem: ListRenderItem<roomsType> = ({ item }) => <Apartment {...item}/>;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View>
          <Text>{id1}</Text>
          <Text>{id2}</Text>
          <Text>{Constants.expo}</Text>
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
