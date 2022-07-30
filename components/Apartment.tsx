import {
  Image, Pressable, StyleSheet, Text, View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { roomsType } from '../types';

function Apartment(item: roomsType) {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const onPressHandler = () => {
    navigation.navigate('Details', { item });
  };
  return (
    <Pressable onPress={onPressHandler}>
      <View style={styles.girdItem}>
        <View style={{ flex: 1 }}>
          <Image style={styles.stretch} source={{ uri: item.images[0].url }}/>
        </View>
        <View style={styles.textBox}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.price}>{item.details.price}/month</Text>
          </View>
          <View style={styles.arrow}>
            <Ionicons name="arrow-forward" size={28} />
          </View>
        </View>
      </View>
    </Pressable>
  );
}

export default Apartment;

const styles = StyleSheet.create({
  girdItem: {
    flex: 1,
    marginTop: 30,
    height: 250,
    borderRadius: 8,
  },
  stretch: {
    flex: 1,
    borderRadius: 8,
  },
  textBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textContainer: {
    marginTop: 20,
    flexDirection: 'column',
    // justifyContent: 'space-between',
  },
  price: {
    marginTop: 10,
    color: '#576F72',
  },
  title: {
    fontSize: 17,
    fontWeight: '600',
  },
  arrow: {
    marginTop: 20,
  },
});
