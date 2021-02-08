import {StyleSheet, Text, TextInput, View, TouchableOpacity, Dimensions, Image, Button} from 'react-native';
import React, {useState} from "react";
import MapView from 'react-native-maps';
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }}

  export default function DefaultScreen({navigator}){
        return(
            <View style={styles.container}>
              <MapView style={styles.map} />
            </View>
        )
    }
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
