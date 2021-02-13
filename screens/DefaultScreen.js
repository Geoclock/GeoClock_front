import {StyleSheet, Text, Alert, Modal, Pressable, TextInput, View, Dimensions, TouchableOpacity, Button} from 'react-native';
import React, {Component} from "react";
import MapView from 'react-native-maps';
import {withNavigation} from "react-navigation";
import Geo from "../Images/Geo";
import Notification from "../Images/Notification";
import Account from "../Images/Account";
import Settings from "../Images/Settings";
import Add from "../Images/Add";
import Exit from "../Images/Exit";

const {width, height} = Dimensions.get('window')
const Wh = height
const Ww = width
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
      },
      show: false,
    };
  }

    watchID : ?number = null

    componentDidMount()
    {
      navigator.geolocation.getCurrentPosition((position) => {
        var lat = parseFloat(position.coords.latitude)
        var long = parseFloat(position.coords.longitude)

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
    const { navigation } = this.props;
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
              <TouchableOpacity style={[styles.circle4]} onPress={() => this.setState({show:true})}><View><Add/></View></TouchableOpacity>
              <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.show}>

                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <TouchableOpacity
                          style={{ marginTop: 7, marginLeft: 213,}}
                          onPress={() => this.setState({show:false})}>
                    <Exit /></TouchableOpacity>
                    <Text style={styles.modalText}>Create new ...</Text>
                    <View style={{weight: 239, marginTop: 0, flexDirection: 'row', justifyContent: 'flex-end'}}>
                      <Pressable
                        style={[styles.button]}
                        onPress={() => navigation.navigate('Geolocation') && this.setState({show:false})}>
                        <Text style={styles.textStyle}>Geo</Text>
                      </Pressable>
                      <Pressable
                        style={[styles.button2]}
                        onPress={() => navigation.navigate('Geolocation') && this.setState({show:false})}>
                        <Text style={styles.textStyle}>Folder</Text>
                      </Pressable>
                    </View>
                  </View>
                </View>
              </Modal>

              <View style={{flexDirection: 'row', justifyContent: 'flex-end', Bottom: 0, backgroundColor: null}}>
                <TouchableOpacity activeOpacity={1} style={styles.menu}
                                  onPress={() => navigation.navigate('Geolocation')}>
                    <View style={styles.circle1}>
                       <View style={styles.circle2}><Geo/></View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={1} style={styles.menu}
                                  onPress={() => navigation.navigate('Notification')}>
                <Notification /></TouchableOpacity>

                <TouchableOpacity activeOpacity={1} style={styles.menu}
                                  onPress={() => navigation.navigate('Account')}>
                <Account /></TouchableOpacity>

                <TouchableOpacity activeOpacity={1} style={styles.menu}
                                  onPress={() => navigation.navigate('Settings')}>
                <Settings /></TouchableOpacity>
              </View>
            </View>

        )
  }

}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: 239,
    height: 90,
    left: Ww*0.005,
    top: Wh*0.016 ,
    backgroundColor: "rgba(70, 53, 116, 0.83)",
    borderRadius: 20,
  },
  button: {
    width: 108,
    height: 38,
    marginRight: 15,
    backgroundColor: "transparent",
    alignItems: 'center',
  },
  button2: {
    width: 108,
    height: 38,
    backgroundColor: "transparent",
    marginRight: 3,
    alignItems: 'center',
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
    textDecorationLine: 'underline',
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    color: "white",
    fontWeight: "bold",
    marginTop: 0.005*Wh,
    marginLeft: 12,
    fontSize: 12,
    textAlign: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    height: Dimensions.get('window').height*0.785,
  },
  menu: {
      width: Ww/4,
      height: Wh * 0.1,
      backgroundColor: 'rgba(255,255,255,1)',
      justifyContent: 'center',
      alignItems: 'center',
  },
  circle1: {
    width: Wh*0.11,
    height: Wh*0.11,
    borderRadius: Wh*0.11 / 2,
    backgroundColor: "rgba(255,255,255,1)",
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 0,
  },
  circle2: {
    width: Wh*0.09,
    height: Wh*0.09,
    borderRadius: Wh*0.09 / 2,
    backgroundColor: "rgba(141,129,201,1)",
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 0,
  },
  circle4: {
    width: Wh*0.08,
    height: Wh*0.08,
    borderRadius: Wh*0.08 / 2,
    backgroundColor: "rgba(141,129,201,1)",
    marginLeft: Ww*0.8,
    marginTop: Wh*0.67,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute'
  },
});

export default withNavigation(DefaultScreen)
