import { RouteProp, useRoute } from '@react-navigation/native';
import {
  Dimensions, StyleSheet, Text, View,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';

type ParamList = {
  Map: {
    latitude: number,
    longitude: number,
    title: string,
  };
};

function Map() {
  const route = useRoute<RouteProp<ParamList, 'Map'>>();
  const { latitude } = route.params;
  const { longitude } = route.params;
  const { title } = route.params;
  return (
    <View style={styles.container}>
      {latitude && longitude
         ? <MapView
             initialRegion={{
           latitude,
           longitude,
           latitudeDelta: 0.005,
           longitudeDelta: 0.005,
         }}
             style={styles.map}
        >
           <Marker
             coordinate={{
             latitude,
             longitude,
           }}
             title={title}
             identifier='origin'
             pinColor='#00CCBB'
         />
         </MapView>
       : <Text>No cordinates found</Text>
      }
    </View>

  );
}

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
