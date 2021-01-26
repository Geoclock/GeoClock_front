import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View, TouchableOpacity, Dimensions, Image, Button} from 'react-native';


const wW = Dimensions.get('window').width;
const wH = Dimensions.get('window').height;


export default function ResetPasswordEmail({ navigation }) {
      const [text1, setText1] = useState('');
      return (
          <View style={styles.container}>
              <View style={styles.rectangle_back}>
                  {/*<TouchableOpacity style={styles.button1}>*/}
                  {/*  <Image source = {require('./assets/arrow.png')} style = {{ width: 33, height: 20}}/>*/}
                  {/*</TouchableOpacity>*/}
                  <Text style={styles.title}>GEOCLOCK</Text>
                  <View style={styles.rectangle}>
                        <Text style={{color: '#242F68', marginTop: 0.09*wH, fontSize: 24, textAlign: 'center'}}>RESET THE
                            PASSWORD</Text>
                        <Text style={{color: 'rgba(0, 0, 0, 0.52)', marginTop: 0.03*wH, fontSize: 12, textAlign: 'center'}}>Write
                            email to send reset-letter to</Text>
                  </View>
              </View>
              <TextInput
                  style={styles.textinput}
                  placeholder="Email"
                  onChangeText={text1 => setText1(text1)}
                  defaultValue={text1}
              />
              <TouchableOpacity style={styles.button}
                  onPress={() => navigation.navigate('Reset2')}>
              <Text style={styles.btntext}>Send</Text>
              </TouchableOpacity>
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
  title:{
    color: "white",
    fontSize: 36,
    zIndex: 1,
    textAlign: 'center'
  },
  button1: {
    marginTop: 0.02*wH,
    marginLeft: 0.03*wH,
  },
  rectangle:{
    width : wW-40,
    height: wH*0.46,
    backgroundColor: 'rgb(255,251,251)',
    marginTop: 0.02 * wH,
    marginLeft: 20,
    borderRadius: 20,
    zIndex: 0
  },
  textinput: {
    alignItems: 'center',
    alignSelf: 'center',
    fontSize: 15,
    height: 40,
    width: 290,
    marginTop: 0.125*wH,
    color: "black",
    borderBottomColor: '#140A36',
    borderBottomWidth: 2,
    zIndex: 1
  },
  button: {
    width: 122,
    height: 40,
    flexDirection: 'row', justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(68,47,110,1)',
    marginTop: 0.06*wH,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    zIndex: 1
  },
  btntext: {
    color: '#e9ecf6',
    fontSize: 16,
    zIndex: 1
  },
});
