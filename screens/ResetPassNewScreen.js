import React from 'react';
import {StyleSheet, Image, Text, TextInput, View, TouchableOpacity, Dimensions, Button} from 'react-native';

const wW= Dimensions.get('window').width;
const wH = Dimensions.get('window').height;

export default function ResetPasswordNew({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.rectangle_back}>
                <Button
                    title="Go to start page"
                    onPress={() => navigation.navigate('Start')}
                  />
                {/*<TouchableOpacity style={styles.button1}>*/}
                {/*    <Image source = {require('./assets/arrow.png')} style = {{ width: 33, height: 20}}/>*/}
                {/*</TouchableOpacity>*/}
                <Text style={styles.title}>GEOCLOCK</Text>
                <View style={styles.rectangle}>
                    <Text style={{color: '#242F68', marginTop: 0.09*wH, fontSize: 24, textAlign: 'center'}}>RESET THE
                          PASSWORD</Text>
                    <Text style={{color: 'rgba(0, 0, 0, 0.52)', marginTop: 0.03*wH, fontSize: 12, textAlign: 'center'}}>Write
                        your new password</Text>
                </View>
            </View>
            <TextInput style={styles.textinput}
                       placeholder="Password"
                       secureTextEntry={true}
                       underlineColorAndroid={'transparent'}/>
            <TextInput style={styles.textinput2}
                       placeholder="Confirm Password"
                       secureTextEntry={true}
                       underlineColorAndroid={'transparent'}/>
            <TouchableOpacity style={styles.button}
            onPress={() => navigation.navigate('Default')}>
                <Text style={styles.btntext}>Save</Text>
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
  rectangle:{
    width : wW-40,
    height: wH*0.7,
    backgroundColor: 'rgb(255,251,251)',
    marginTop: 0.02 * wH,
    marginLeft: 20,
    borderRadius: 20,
    zIndex: 0
  },
  button1: {
        marginTop: 0.02*wH,
        marginLeft: 0.03*wH,
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
  textinput2: {
    alignItems: 'center',
    alignSelf: 'center',
    fontSize: 15,
    height: 40,
    width: 290,
    marginTop: 0.05*wH,
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
    backgroundColor: '#140A36',
    marginTop: 0.1*wH,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  btntext: {
    color: '#e9ecf6',
    fontSize: 16,
  },
});
