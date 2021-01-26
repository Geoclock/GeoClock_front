import {StyleSheet, Text, TextInput, View, TouchableOpacity, Dimensions, Image, Button} from 'react-native';
import Google from "../assets/google.png";
import React, {useState} from "react";
const Googleimg = Image.resolveAssetSource(Google).uri;

const wW = Dimensions.get('window').width;
const wH = Dimensions.get('window').height;


export default function LoginScreen({ navigation }) {
    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');
    return (
          <View style={styles.container}>
              <View style={styles.rectangle_back}>
                  <Text style={styles.title}>GEOCLOCK</Text>
                  <View style={styles.rectangle}>
                      <Text style={{
                          color: '#242F68',
                          marginTop: 0.04*wH,
                          fontSize: 24,
                          textAlign: 'center',
                            paddingBottom: 0.07*wH,
                            fontWeight: 'bold',
                            alignItems: 'center',
                      }}>SIGN IN</Text>
                  </View>
              </View>

              <TextInput
                    style={styles.username}
                    placeholder="Username"
                    onChangeText={text1 => setText1(text1)}
                    defaultValue={text1}
                />

                <TextInput
                    style={styles.password}
                    placeholder="Password"
                    secureTextEntry={true}
                    onChangeText={text2 => setText2(text2)}
                    defaultValue={text2}
                />

                <Text style={styles.text2}>Forgot password?
                <TouchableOpacity>
                    <Text style={{
                        fontSize: 12,
                        color: "gray",
                        textDecorationLine: 'underline',
                    }}> Reset it </Text>
                </TouchableOpacity>
                </Text>

                <TouchableOpacity style={styles.button}
                onPress={() => navigation.navigate('Start')}>
                    <Text style={styles.buttontext}>Sign in</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button1}>
                    <Text style={styles.boldsmalltext2}>Sign in with<Image source={{uri: Googleimg}}
                         style={styles.image}></Image></Text>
                </TouchableOpacity>
                <Text style={styles.smalltext}>Don`t have an account?

                    <TouchableOpacity>
                        <Text style={styles.boldsmalltext1}>Sign up</Text>
                    </TouchableOpacity>
                </Text>
          </View>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
  },
  rectangle_back: {
    width: wW,
    height: wH*0.23,
    backgroundColor: 'rgba(68,47,110,1)',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title:{
    color: "white",
    fontSize: 36,
    zIndex: 1,
    textAlign: 'center'
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
  image: {
      width: 20,
      height: 20,
      alignSelf: 'center'
  },
  text2: {
        position: 'absolute',
        textAlign: 'center',
        fontSize: 12,
        color: "gray",
        marginTop: 350,
        //marginLeft: 50 ,
        width: 337,
        height: 34,
  },
  text_input: {
        alignItems: 'center',
        alignSelf: 'center',
        fontSize: 15,
        marginTop: 29,
        height: 40,
        width: 290,
        color: "black",
        borderBottomColor: '#242F68',
        borderBottomWidth: 2,
    },

    sign: {
        color: "#242F68",
        fontWeight: "bold",
        textAlign: 'center',
        letterSpacing: 0.09,
        width: 360,
        height: 35,
        marginTop: 73,
        fontSize: 21,
        zIndex: 1
    },
    username: {
        position: "absolute",
        fontSize: 15,
        width: 290,
        height: 43,
        marginTop: 223,
        alignItems: 'center',
        alignSelf: 'center',
        borderBottomColor: '#242F68',
        borderBottomWidth: 2,
    },
    password: {
        position: "absolute",
        fontSize: 15,
        width: 290,
        height: 43,
        marginTop: 289,
        alignItems: 'center',
        alignSelf: 'center',
        borderBottomColor: '#242F68',
        borderBottomWidth: 2,
    },
    button: {
        position: "absolute",
        width: 122,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: '#442F6E',
        marginTop: 389,
        borderRadius: 33,
    },
    button1: {
        position: "absolute",
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        marginTop: 460,
    },
    buttontext: {
        color: '#E9ECF6',
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 0.09
    },
    smalltext: {
        position: 'absolute',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 12,
        color: "gray",
        marginTop: 490,
        width: 337,
        height: 34,
    },
    boldsmalltext1: {
        fontSize: 12,
        color: "gray",
        textDecorationLine: 'underline',
        justifyContent: 'space-around',
        fontWeight: "bold",
    },
    boldsmalltext2: {
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 12,
        color: "gray",
        textDecorationLine: 'underline',
        fontWeight: "bold",
    },

});
