import React, {Component} from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import {StyleSheet, Text, View, Dimensions, TouchableOpacity} from "react-native";
import Geo from "../Images/Geo";
import Notification from "../Images/Notification";
import Account from "../Images/Account";
import Settings from "../Images/Settings";
import Language from "../Images/Language";
import Sounds from "../Images/Sounds";
import ScrollView from 'expo-faded-scrollview';
import {withNavigation} from "react-navigation";
import DropDownPicker from 'react-native-dropdown-picker';


const Ww = Dimensions.get('window').width;
const Wh = Dimensions.get('window').height;


class SettingsScreen extends Component {
    constructor(props) {
        super(props);
    }

    state = {
    modalVisible: false,
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }

    changeLanguage(item) {

        this.setState({
            language: item.value
        });
    }

    changeSound(item) {
        this.setState({
            sound: item.value
        });
    }


  render(){
    const { navigation } = this.props;

      return(
            <View
                style={styles.container}>
                <LinearGradient
                    colors={['rgba(63,44,109,1)', 'rgba(211,237,255,1)']}
                    style={styles.background}/>

                <View style={styles.rectangle1}>
                  <ScrollView style={styles.rectangle} fadeSize={30}>
                    <Text style={styles.text}>Settings</Text>
                    <View>
                      <Text style={{
                        color: 'rgba(0, 0, 0, 0.52)',
                        marginTop: 0.02 * Wh,
                        marginLeft: 0.02 * Ww,
                        padding: 15,
                        fontSize: 17
                      }}><Language/> Language:</Text>
                    </View>
                      <DropDownPicker
                        items={[
                            {label: 'English', value: 'en'},
                            {label: 'Ukrainian', value: 'uk'},
                        ]}
                        defaultValue = 'en'
                        containerStyle={{height: 40}}
                        onChangeItem={item => this.changeLanguage(item)}
                        labelStyle={{
                            fontSize: 15,
                            textAlign: 'left',
                            color: 'white', borderBottomColor: 'white', height: 25,
                        }}
                        dropDownStyle={{
                            backgroundColor: 'rgba(70, 52, 115, 0.83)', borderBottomColor: 'white',
                            borderBottomWidth: 2, width:  0.8*Ww,  alignSelf: 'center', fontWeight: 'bold',
                            fontSize: 15, borderBottomLeftRadius: 10, borderBottomRightRadius: 10
                        }}
                        selectedLabelStyle={{
                            color: 'black', fontSize: 15, fontWeight: 'bold'
                        }}
                        style={{
                            paddingVertical: 5, width:  0.8*Ww, borderBottomColor: '#242F68', borderTopColor: 'white',  alignSelf: 'center',
                            borderBottomWidth: 2, fontSize: 15, borderLeftColor: 'white', borderColor: 'white', color: 'black'
                        }}
                    />

                    <View>
                      <Text style={{
                        color: 'rgba(0, 0, 0, 0.52)',
                        marginLeft: 0.015 * Ww,
                        padding: 16,
                        fontSize: 17
                      }}><Sounds/> Sound:</Text>
                    </View>
                      <DropDownPicker
                        items={[
                            {label: 'Sound #1', value: 's1'},
                            {label: 'Sound #2', value: 's2'},
                        ]}
                        defaultValue = 's1'
                        containerStyle={{height: 40}}
                        onChangeItem={item => this.changeSound(item)}
                        labelStyle={{
                            fontSize: 15,
                            textAlign: 'left',
                            color: 'white', borderBottomColor: 'white', height: 25,
                        }}
                        dropDownStyle={{
                            backgroundColor: 'rgba(70, 52, 115, 0.83)', borderBottomColor: 'white',
                            borderBottomWidth: 2, width:  0.8*Ww,  alignSelf: 'center', fontWeight: 'bold',
                            fontSize: 15, borderBottomLeftRadius: 10, borderBottomRightRadius: 10
                        }}
                        selectedLabelStyle={{
                            color: 'black', fontSize: 15, fontWeight: 'bold'
                        }}
                        style={{
                            paddingVertical: 5, width:  0.8*Ww, borderBottomColor: '#242F68', borderTopColor: 'white',  alignSelf: 'center',
                            borderBottomWidth: 2, fontSize: 15, borderLeftColor: 'white', borderColor: 'white', color: 'black'
                        }}
                    />

                    <TouchableOpacity
                    style={styles.button}>
                  <Text style={styles.btntext} onPress={() => this.setModalVisible(true)}>Save</Text>
                    </TouchableOpacity>

                    <LinearGradient
                        colors={['transparent', 'rgba(67,48,112,0.01)']}
                        style={styles.rectangle1}>
                    </LinearGradient>
                  </ScrollView>

                    <View style={{flexDirection: 'row', justifyContent: 'flex-end', Bottom: 0, backgroundColor: null}}>
                      <TouchableOpacity activeOpacity={1} style={styles.menu}
                                        onPress={() => navigation.navigate('Geolocation')}>
                        <Geo/></TouchableOpacity>
                      <TouchableOpacity activeOpacity={1} style={styles.menu}
                                        onPress={() => navigation.navigate('Notification')}>
                        <Notification/></TouchableOpacity>
                      <TouchableOpacity activeOpacity={1} style={styles.menu}
                                        onPress={() => navigation.navigate('Account')}>
                        <Account/></TouchableOpacity>
                      <TouchableOpacity activeOpacity={1} style={styles.menu}
                                        onPress={() => navigation.navigate('Settings')}>
                        <View style={styles.circle1}>
                          <View style={styles.circle2}><Settings/></View>
                        </View>
                      </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },

  button: {
    width: 122,
    height: 40,
    flexDirection: 'row', justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#442F6E',
    marginTop: 0.05*Wh,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  btntext: {
    color: '#E9ECF6',
    fontSize: 16,
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
    height: Wh*0.895,
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
  picker: {
    borderBottomColor: '#242F68',
    borderBottomWidth: 2,
    width: 0.8*Ww,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
    centeredView: {
        flex: 1,
        justifyContent: "flex-start",
        marginTop:200,
        alignItems: "center",
    },
    modalView: {
        width: 239,
        height: 100,
        left: Ww*0.005,
        top: Wh*0.016 ,
        backgroundColor: "rgba(70, 53, 116, 0.83)",
        borderRadius: 20,
    },
    modalText: {
        marginBottom: 15,
        color: "white",
        fontWeight: "bold",
        marginTop: 0.5,
        marginLeft: 12,
        fontSize: 14,
        letterSpacing: 0.9,
        textAlign: 'center'
    },
});

export default withNavigation(SettingsScreen)
