import React, {Component} from 'react';
import {View, ImageBackground, TouchableOpacity, TouchableHighlight, Image} from 'react-native';
import MapView from 'react-native-maps';
import {Marker, AnimatedRegion} from 'react-native-maps';

import {
  Container,
  Header,
  Button,
  Text,
  Body,
  Form,
  Item as FormItem,
  Input,
  Label,
  Title,
} from 'native-base';

export default class Map extends Component {
    LATITUDE = 59.3293232349999999;
    LONGITUDE = 18.068580800000063;
    getInitialState(){
        return {
            coordinate: new AnimatedRegion({
                latitude: LATITUDE,
                longitude: LONGITUDE,
            }),
        };
    }

    componentWillReceiveProps(nextProps){
        const duration = 500

        if (this.props.coordinate !== nextProps.coordinate) {
            if (Platform.OS === 'android') {
                if (this.marker) {
                    this.marker._component.animateMarkerToCoordinate(
                    nextProps.coordinate,
                    duration
                    );
                }
            } else {
                this.state.coordinate.timing({
                    ...nextProps.coordinate,
                    duration
                }).start();
            }
        }
    }

  render(){
    return (
      /*<MapView style={styles.map}
        region={{
          latitude: 59.3293232349999999,
          longitude: 18.068580800000063,
          latitudeDelta:0.1,
          longitudeDelta:0.1}}>

        <MapView.Marker
          coordinate={{
            latitude: 59.3293232349999999,
            longitude: 18.068580800000063
          }}
          title={'My marker title'}
          description = {'My marker description'}/>
      </MapView>*/
      <MapView initialRegion={{
          latitude: 59.3293232349999999,
          longitude: 18.068580800000063,
          latitudeDelta:0.1,
          longitudeDelta:0.1
      }}>

      <MapView.Marker.Animated
        ref={marker => { this.marker = marker }}
        coordinate={this.state.coordinate}
      />
    </MapView>

     );
  }
}

/*const styles = {
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    flex: 1
 },
 redbox: {
    width: 100,
    height: 100,
    backgroundColor: 'red'
 },
 bluebox: {
    width: 100,
    height: 100,
    backgroundColor: 'blue'
 },
 blackbox: {
    width: 100,
    height: 100,
    backgroundColor: 'black'
 },
}*/
