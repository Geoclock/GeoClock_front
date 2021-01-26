import React from 'react';
import {StyleSheet, Text, TextInput, View, TouchableOpacity, Dimensions, Image, Button} from 'react-native';

const wW = Dimensions.get('window').width;
const wH = Dimensions.get('window').height;

export default function ResetPasswordMessage({ navigation }) {
      return (
          <View style={styles.container}>
              <View style={styles.rectangle_back}>
                  <Button
                    title="Go to start page"
                    onPress={() => navigation.navigate('Start')}
                  />
                  {/*<TouchableOpacity style={styles.button1}>*/}
                  {/*  <Image source = {require('./assets/arrow.png')} style = {{ width: 33, height: 20}}/>*/}
                  {/*</TouchableOpacity>*/}
                  <Text style={styles.title}>GEOCLOCK</Text>
                  <View style={styles.rectangle}>
                      <Text style={{color: '#242F68', marginTop: 0.09*wH, fontSize: 24, textAlign: 'center'}}>RESET THE
                          PASSWORD</Text>
                      <Text style={{color: 'rgba(0, 0, 0, 0.52)', marginTop: 0.03*wH, marginLeft: 12, fontSize: 12, textAlign: 'center'}}>The letter was sent. Please, follow the instructions in the letter</Text>
                  </View>
              </View>
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
});
