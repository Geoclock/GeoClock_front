import React, { useState } from 'react';
import {StyleSheet, Text, TextInput, View, TouchableOpacity, Dimensions} from 'react-native';

const wW = Dimensions.get('window').width;
const wH = Dimensions.get('window').height;

export default function ResetPasswordMessage({ navigation }) {
      const [text1, setText1] = useState('');
      return (
          <View
              style={styles.container}>
              <View
                  style={styles.rectangle_back}>
                  <Text style={styles.title}>GEOCLOCK</Text>
                  <View
                      style={styles.rectangle}>
                      <Text
                          style={{
                              color: '#242F68',
                              marginTop: 0.09*wH,
                              fontSize: 24,
                              textAlign: 'center'
                          }}>RESET THE PASSWORD</Text>
                      <Text
                          style={{
                              color: 'rgba(0, 0, 0, 0.52)',
                              marginTop: 0.03*wH,
                              marginLeft: 12,
                              fontSize: 12,
                              textAlign: 'center'
                          }}>The letter was sent. Please, follow the instructions in the letter and enter the code</Text>
                  </View>
              </View>
              <TextInput
                  style={styles.textinput}
                  placeholder="Code"
                  onChangeText={text1 => setText1(text1)}
                  defaultValue={text1}
              />
              <TouchableOpacity
                  style={styles.button}
                  onPress={() => navigation.navigate('Reset3')}>
                  <Text style={styles.btntext}>Send</Text>
              </TouchableOpacity>
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
  textinput: {
    alignItems: 'center',
    alignSelf: 'center',
    fontSize: 15,
    height: 40,
    width: 290,
    marginTop: 0.15*wH,
    color: "black",
    borderBottomColor: '#140A36',
    borderBottomWidth: 2,
    zIndex: 1
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
    height: wH*0.50,
    backgroundColor: 'rgb(255,251,251)',
    marginTop: 0.02 * wH,
    marginLeft: 20,
    borderRadius: 20,
    zIndex: 0
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
