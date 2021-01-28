import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Button, Dimensions, TouchableOpacity } from "react-native";
import StartImage from '../assets/background_image.png';

const Ww = Dimensions.get('window').width;
const Wh = Dimensions.get('window').height;

export default function StartScreen({navigation}) {
  return (
    <View
        style={styles.container}>
        <ImageBackground source={StartImage} style={styles.image}>
        <TouchableOpacity
            style={styles.sign_in}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.text}>Sign in</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.sign_up}
            onPress={() => navigation.navigate('Register')}>
            <Text style={styles.text}>Sign up</Text>
        </TouchableOpacity>

      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 14,
    textAlign: "center"
  },
  texttry: {
    marginTop: 500,
    color: "white",
    fontSize: 31,
    textAlign: "center",
    fontFamily: "monospace",
    letterSpacing: 6,
    fontWeight: "600",
  },
  sign_in:{
    height: 40,
    borderRadius: 33,
    borderColor: "#E9ECF7",
    borderWidth: 2,
    marginTop: (Wh/6*4),
    marginLeft: (Ww-297)/2,
    width: 297,
    backgroundColor: "transparent",
    zIndex: 1,
    justifyContent: 'center'
  },
  sign_up:{
    height: 40,
    borderRadius: 33,
    borderColor: "#E9ECF7",
    borderWidth: 2,
    marginTop: (527-470-40),
    marginLeft: (Ww-297)/2,
    width: 297,
    backgroundColor: "transparent",
    zIndex: 1,
    justifyContent: 'center'
  }
});
