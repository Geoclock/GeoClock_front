import {StyleSheet, Text, TextInput, View, Dimensions} from 'react-native';
import React, {Component} from "react";
import MapView from 'react-native-maps';
import {withNavigation} from "react-navigation";

const {width, height} = Dimensions.get('window')
// const SCREEN_HEIGHT = height
// const SCREEN_WIDTH = width
const ASPECT_RATIO = width / height
const LATTITUDE_DELTA = 0.03
const LONGITUDE_DELTA = LATTITUDE_DELTA * ASPECT_RATIO

class DefaultScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      initialPosition: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0,
      },
      markerPosition: {
        latitude: 0,
        longitude: 0,
      }
    };
  }

    watchID : ?number = null

    componentDidMount()
    {
      navigator.geolocation.getCurrentPosition((position) => {
        var lat = parseFloat(position.coords.latitude)
        var long = parseFloat(position.coords.longitude)

        //cur pos
        var initialRegion={
          latitude: lat,
          longitude: long,
          latitudeDelta: LATTITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }

        this.setState({initialPosition: initialRegion})
        this.setState({markerPosition: initialRegion})
      },
      (error) => alert(JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 200, maximumAge: 10}
      )

      this.watchID = navigator.geolocation.watchPosition((position) => {
          var lat = parseFloat(position.coords.latitude)
          var long = parseFloat(position.coords.longitude)

          var lastRegion = {
            latitude: lat,
            longitude: long,
            latitudeDelta: LATTITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }

          this.setState({initialPosition: lastRegion})
          this.setState({markerPosition: lastRegion})
      })
    }

  componentWillUnmount(){
    navigator.geolocation.clearWatch(this.watchID)
  }

  render(){
      return(
            <View
                style={styles.container}>
              <MapView
                  style={styles.map}
                  region={this.state.initialPosition}>
                  <MapView.Marker
                      coordinate={this.state.markerPosition}>
                      <View style={styles.radius}>
                          <View style={styles.marker}/>
                      </View>
                  </MapView.Marker>
              </MapView>
            </View>
        )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radius:{
    height: 50,
    width: 50,
    borderRadius: 50/2,
    backgroundColor: 'rgba(0,122,255,0.1)',
    borderWidth: 1,
    borderColor: 'rgba(0,122,255,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  marker:{
    height: 20,
    width: 20,
    borderRadius: 20/2,
    borderColor: 'white',
    borderWidth: 3,
    backgroundColor: '#1e85f5',
    overflow: 'hidden'
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default withNavigation(DefaultScreen)