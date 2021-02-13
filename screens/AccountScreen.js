import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground, StyleSheet, Text, View, Button, Dimensions, TouchableOpacity } from "react-native";
import Geo from "../Images/Geo";
import Notification from "../Images/Notification";
import Account from "../Images/Account";
import Settings from "../Images/Settings";
import Maps from "../Images/Map";
import Add from "../Images/Add";
import Delete from "../Images/Delete";
import Name from "../Images/Name";
import Post from "../Images/Post";
import ScrollView from 'expo-faded-scrollview';
import Http from "../ConnectionToFlask";
import {showMessage} from "react-native-flash-message";


const Ww = Dimensions.get('window').width;
const Wh = Dimensions.get('window').height;

export default function AccountScreen({navigation}) {

  const OnClick = () => {
          const resp = {}
          Http.get('/logout')
              .then(function (response) {
                  resp['status'] = response.data['status'];
                  resp['message'] = response.data['message'];
                  navigation.navigate('Start');
              })
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['rgba(63,44,109,1)', 'rgba(211,237,255,1)']}
        style={styles.background}
      />

      <View style={styles.rectangle1}>
          <ScrollView style={styles.rectangle} fadeSize={40} scrollThreshold={0} fadeColors={['rgba(255,255,255,0)', 'rgba(225, 225, 225, 0.75)']}>
            <Text style={styles.header}>PROFILE</Text>

            <Text
                style={styles.textinput}><Name /> Username:
            </Text>
            <Text
                style={styles.text}>Example name
            </Text>
            <Text
                style={styles.textinput}><Post /> E-mail:
            </Text>
            <Text
                style={styles.text}>examplemail@mail.com
            </Text>

            <TouchableOpacity onPress={OnClick}
                style={styles.button}>
              <Text style={styles.btntext}>Logout</Text>
            </TouchableOpacity>
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
  input1: {
      marginTop: Wh*0.01,
    },
  textinput: {
     alignItems: 'center',
     alignSelf: 'center',
     fontSize: 15,
     height: 30,
     lineHeight: 20,
     width: 290,
     marginBottom: 0,
     color: "rgba(0, 0, 0, 0.52)",
     //borderBottomColor: '#242F68',
     //borderBottomWidth: 2,
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
  text: {
      fontSize: 15,
      alignItems: 'center',
      alignSelf: 'center',
      color: "rgba(0,0,0,1)",
      height: 35,
      width: 290,
      marginBottom: 10,
      fontWeight: 'bold',
    },
    button: {
        width: 122,
        height: 40,
        flexDirection: 'row', justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(68,47,110,1)',
        marginTop: 120,
        borderTopLeftRadius: 33,
        borderTopRightRadius: 33,
        borderBottomLeftRadius: 33,
        borderBottomRightRadius: 33,
        zIndex: 1
  },
  btntext: {
      color: '#e9ecf6',
      fontSize: 16,
      fontWeight: 'bold',
    },
  header: {
      color: '#242F68',
      marginTop: 0.04*Wh,
      fontSize: 21,
      textAlign: 'center',
      paddingBottom: 0.03*Wh,
      fontWeight: 'bold',
      alignItems: 'center',
    },
});