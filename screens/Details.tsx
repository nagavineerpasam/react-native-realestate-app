import {
  ParamListBase, RouteProp, useNavigation, useRoute,
} from '@react-navigation/native';
import {
  ActivityIndicator,
  Image,
  ImageBackground, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { useContext, useState } from 'react';
import { roomsType } from '../types';
import { WishListContext } from '../context/wishlistcontext';

const mapImg = 'https://t4.ftcdn.net/jpg/01/24/27/05/360_F_124270591_CtuUNrS8u5uvyH9BFCLgSi4ayLeIzZj2.jpg';

type ParamList = {
  Details: {
    item: roomsType
  };
};

function Details() {
  const wishListContext = useContext(WishListContext);
  const route = useRoute<RouteProp<ParamList, 'Details'>>();
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [isLoading, setIsLoading] = useState(false);
  const [isBooked, setIsBooked] = useState(false);
  const apartmentDetails = route.params.item;
  const isInWishList = wishListContext.wishListIds.includes(apartmentDetails.id);

  const onMapPress = () => {
    navigation.navigate('Map', {
      latitude: apartmentDetails.latitude,
      longitude: apartmentDetails.longitude,
      title: apartmentDetails.name,
    });
  };

  const addOrRemoveWishList = () => {
    if (isInWishList) {
      wishListContext.removeFromWishList(apartmentDetails.id);
    } else {
      wishListContext.addToWishList(apartmentDetails.id);
    }
  };

  const onBookHandler = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsBooked(true);
    }, 2000);
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ flex: 1 }}>
          <View style={styles.girdItem}>
            <ImageBackground style={styles.stretch} source={{ uri: apartmentDetails.images[0].url }}>
              <View style={styles.icons}>
                <View style={styles.round}>
                  <Pressable onPress={() => navigation.goBack()}>
                    <MaterialIcons style={styles.backarrow} name="arrow-back-ios" color="black" size={16}/>
                  </Pressable>
                </View>
                <View style={styles.round}>
                  <Pressable onPress={addOrRemoveWishList}>
                    <Ionicons
                      style={styles.backarrow}
                      name={isInWishList ? 'heart' : 'heart-outline'}
                      color={isInWishList ? 'red' : 'black'} size={16}
                    />
                  </Pressable>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.mainHeading}>{apartmentDetails.name}</Text>
            <Text style={styles.sideHeading}>{apartmentDetails.location}</Text>
            <Text style={styles.mainHeading}>Details</Text>
            <View style={styles.aptInfo}>
              <Text>{apartmentDetails.details.guests} Guests. </Text>
              <Text>{apartmentDetails.details.bedrooms} Bedrooms. </Text>
              <Text>{apartmentDetails.details.bathrooms} Bath </Text>
            </View>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
              {apartmentDetails.images.map((img) => (
                <Image style={styles.imagesScroll} key={img.imId} source={{ uri: img.url }}/>
              ))}
            </ScrollView>
            <View>
              <Text style={styles.mainHeading}>Where you will be</Text>
              <Pressable onPress={onMapPress}>
                <Image style={{ height: 130, marginTop: 10 }} source={{ uri: mapImg }}/>
              </Pressable>
            </View>
            <View>
              <Text style={styles.mainHeading}>Description</Text>
              <Text style={{ marginTop: 5 }}>{apartmentDetails.description}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomContainer}>
        <View>
          <Text style={styles.price}>{apartmentDetails.details.price}/month</Text>
        </View>
        <View>
          {isBooked
          ? <Text style={styles.bookedText}>Booked Successfully</Text>
          : <TouchableOpacity onPress={onBookHandler} activeOpacity={0.8}>
            <View style={styles.btn}>
              {isLoading
              ? <ActivityIndicator style={styles.activityIndicator} size="small" color='white' />
              : <Text style={styles.pay}>Book Now</Text>}
            </View>
          </TouchableOpacity>
          }
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bookedText: {
    fontSize: 18,
    color: 'green',
    marginVertical: 12,
    fontWeight: '600',
  },
  price: {
    fontSize: 20,
    fontWeight: '400',
    marginVertical: 12,
  },
  pay: {
    fontSize: 20,
    color: 'white',
    fontWeight: '600',
    marginVertical: 12,
    textAlign: 'center',
  },
  activityIndicator: {
    marginVertical: 12,
    textAlign: 'center',
  },
  bottomContainer: {
    margin: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn: {
    width: 150,
    height: 50,
    borderRadius: 8,
    backgroundColor: '#F25F6F',
  },
  priceContainer: {
    bottom: 10,
  },
  girdItem: {
    flex: 1,
    height: 300,
  },
  round: {
    position: 'relative',
    width: 33,
    height: 33,
    borderRadius: 50,
    backgroundColor: 'white',
    top: 15,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  backarrow: {
    marginVertical: 8,
    marginHorizontal: 9,
  },
  stretch: {
    flex: 1,
    resizeMode: 'cover',
  },
  contentContainer: {
    marginLeft: 20,
    marginRight: 20,
  },
  mainHeading: {
    fontSize: 20,
    fontWeight: '500',
    marginTop: 20,
  },
  sideHeading: {
    color: '#576F72',
    marginTop: 10,
  },
  aptInfo: {
    marginTop: 8,
    flexDirection: 'row',
  },
  imagesScroll: {
    height: 130,
    marginTop: 10,
    width: 130,
    marginRight: 15,
    borderRadius: 10,
  },
});

export default Details;
