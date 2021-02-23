import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground, StyleSheet, Text, View, Dimensions, TouchableOpacity } from "react-native";
import Geo from "../Images/Geo";
import Notification from "../Images/Notification";
import Account from "../Images/Account";
import Settings from "../Images/Settings";
import Maps from "../Images/Map";
import Add from "../Images/Add";
import Delete from "../Images/Delete";
import ScrollView from 'expo-faded-scrollview';



const Ww = Dimensions.get('window').width;
const Wh = Dimensions.get('window').height;

export default function AccountScreen({navigation}) {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['rgba(63,44,109,1)', 'rgba(211,237,255,1)']}
        style={styles.background}
      />

      <View style={styles.rectangle1}>
          <ScrollView style={styles.rectangle} fadeSize={30}>
            <Text style={styles.text}>Account</Text>
             <LinearGradient
                colors={['transparent', 'rgba(67,48,112,0.01)']}
                style={styles.rectangle1}>
             </LinearGradient>
          </ScrollView>

      </View>
      {/*Нижня панель*/}
      <View style={{flexDirection: 'row', justifyContent: 'flex-end', Bottom: 0, backgroundColor: null}}>
        <TouchableOpacity activeOpacity={1} style={styles.menu}
                          onPress={() => navigation.navigate('Geolocation')}>
        <Geo/></TouchableOpacity>
        <TouchableOpacity activeOpacity={1} style={styles.menu}
                          onPress={() => navigation.navigate('Notification')}>
        <Notification/></TouchableOpacity>
        <TouchableOpacity activeOpacity={1} style={styles.menu}
                          onPress={() => navigation.navigate('Account')}>
            <View style={styles.circle1}>
               <View style={styles.circle2}><Account /></View>
            </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} style={styles.menu}
                          onPress={() => navigation.navigate('Settings')}>
        <Settings/></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    width: Ww,
    height: Wh,
  },
  rectangle: {
    width: Ww-40,
    height: Wh*0.795,
    marginLeft: 20,
    marginRight: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'rgba(255,255,255,1)',
  },
  rectangle1: {
    width: Ww,
    height: Wh*0.795,
    marginLeft: 0,
    marginRight: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'transparent',
  },
  text: {
    fontSize: 36,
    color: 'rgba(36,47,104,1)',
    textAlign: 'center',
    marginTop: 10
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
  circle3: {
    width: Wh*0.08,
    height: Wh*0.08,
    borderRadius: Wh*0.08 / 2,
    backgroundColor: "rgba(141,129,201,1)",
    marginLeft: Ww*0.75,
    marginTop: Wh*0.57,
    alignContent: 'center',
    position: 'absolute'
  },
  circle4: {
    width: Wh*0.08,
    height: Wh*0.08,
    borderRadius: Wh*0.08 / 2,
    backgroundColor: "rgba(141,129,201,1)",
    marginLeft: Ww*0.75,
    marginTop: Wh*0.67,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute'
  },
});
