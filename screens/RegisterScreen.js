import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import Google from "../image_example";

const wW = Dimensions.get('window').width;
const wH = Dimensions.get('window').height;

export default function Registration({navigation}){
    return (
        <View
            style={styles.container}>
            <View
                style={styles.rectangle_back}>
                <Text
                    style={styles.title}>GEOCLOCK</Text>
                <View
                    style={styles.rectangle}>
                    <Text style={styles.header}>SIGN UP</Text>
                </View>
            </View>
            <View
                style={styles.input1}>
                <TextInput style={styles.textinput} placeholder="Username" underlineColorAndroid={'transparent'} />
                <TextInput style={styles.textinput} placeholder="E-mail" underlineColorAndroid={'transparent'} />
                <TextInput style={styles.textinput} placeholder="password" secureTextEntry={true} underlineColorAndroid={'transparent'} />
                <TextInput style={styles.textinput} placeholder="Confirm password" secureTextEntry={true} underlineColorAndroid={'transparent'} />
                <TouchableOpacity style={styles.button}
                    onPress={() => navigation.navigate('Start')}>
                    <Text style={styles.btntext}>Sign up</Text>
                </TouchableOpacity>

                <View>
                    <TouchableOpacity
                        style={{alignItems: "center", height: wH*0.02}}>
                        <Text style={{fontSize: 12,
                                     marginTop: 0,
                                     color: 'rgba(5,5,5,0.52)',
                                     fontWeight: "bold",
                                     textAlign: 'center',
                                     textDecorationLine: 'underline'}}>Sign up with <Google /></Text>
                    </TouchableOpacity>
                    <Text style={styles.text}>Already have an account?
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.text2}> Sign in</Text>
                    </TouchableOpacity></Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

  container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#E5E5E5'
  },
  rectangle_back: {
    width: wW,
    height: wH*0.23,
    backgroundColor: 'rgba(68,47,110,1)',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  button1: {
    marginTop: wH*0.065,
    marginLeft: wH*0.03,
    },
  title: {
      color: "white",
      fontSize: 36,
      zIndex: 1,
      textAlign: 'center',
  },
  rectangle:{
    width : wW-40,
    height: wH*0.7,
    backgroundColor: 'rgb(255,251,251)',
    marginTop: 0.02 * wH,
    marginLeft: 20,
    borderRadius: 20,
    zIndex: 0
  },
  header: {
      color: '#242F68',
      marginTop: 0.04*wH,
      fontSize: 24,
      textAlign: 'center',
      paddingBottom: 0.07*wH,
      fontWeight: 'bold',
      alignItems: 'center',
    },
  input1: {
      marginTop: wH*0.01,
    },
  textinput: {
     alignItems: 'center',
     alignSelf: 'center',
     fontSize: 15,
     height: 43,
     lineHeight: 20,
     width: 290,
     marginBottom: 15,
     color: "black",
     borderBottomColor: '#140A36',
     borderBottomWidth: 2,
    },
  button: {
        width: 122,
        height: 40,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: '#442F6E',
        marginTop: 35,
        marginBottom: 20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
  btntext: {
      color: '#e9ecf6',
      fontSize: 16,
      fontWeight: 'bold',
    },
  text: {
      fontSize: 12,
      color: 'rgba(34,33,33,0.52)',
      alignSelf: 'center',
      paddingTop: 10
    },
  text2: {
      fontSize: 12,
      marginTop: 7,
      color: 'rgba(5,5,5,0.52)',
      fontWeight: "bold",
      textAlign: 'center',
      textDecorationLine: 'underline'
  },
});
