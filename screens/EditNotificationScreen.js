import React, {useState} from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import {StyleSheet, Text, View, Button, Dimensions, TouchableOpacity, TextInput, Alert, Pressable, Modal}
    from "react-native";
import Geo from "../Images/Geo";
import Notification from "../Images/Notification";
import Account from "../Images/Account";
import Settings from "../Images/Settings";
import Delete from "../Images/Delete";
import ScrollView from 'expo-faded-scrollview';
import Http from "../ConnectionToFlask";
import Exit from "../Images/Exit";
import {useDispatch} from "react-redux";


const Ww = Dimensions.get('window').width;
const Wh = Dimensions.get('window').height;

export default function NotificationEdit({navigation}) {
    const [modalVisible, setModalVisible] = useState(false);
    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');
    const OnClick = () => {
        const resp = {}
        Http.get('/save')
            .then(function (response) {
                resp['status'] = response.data['status'];
                resp['message'] = response.data['message'];
                navigation.navigate('Notification');
            })
    }
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['rgba(63,44,109,1)', 'rgba(211,237,255,1)']}
                style={styles.background}
            />
            <View style={styles.rectangle1}>
                <ScrollView style={styles.rectangle} fadeSize={30}>
                    {/*<Text style={styles.header}>EDIT NOTIFICATION <Edit/></Text>*/}
                    <Text style={styles.header}>EDIT NOTIFICATION</Text>
                    <Text style={styles.textinput}>Note:</Text>
                    <TextInput
                        style={styles.textinputt}
                        onChangeText={text1 => setText1(text1.toString())}
                        defaultValue={text1}
                    />
                    <Text style={styles.textinput}>Radious of coverage: </Text>
                    <TextInput
                        style={styles.textinputt}
                        onChangeText={text2 => setText2(text2.toString())}
                        defaultValue={text2}
                    />
                    <Text style={styles.textinput}>Place: </Text>
                    <Text style={styles.textplace}>Bakery </Text>
                    <Text style={styles.textplace}>Schevchenka Street </Text>
                    <TouchableOpacity onPress={OnClick}
                                      style={styles.button1}>
                        <Text style={styles.btntext}>Save</Text>
                    </TouchableOpacity>
                    <LinearGradient
                        colors={['transparent', 'rgba(67,48,112,0.01)']}
                        style={styles.rectangle1}>
                    </LinearGradient>
                </ScrollView>
                <TouchableOpacity style={styles.circle4} onPress={() => setModalVisible(true)}><View><Delete/></View></TouchableOpacity>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <TouchableOpacity
                                style={{ marginTop: 7, marginLeft: 213,}}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Exit /></TouchableOpacity>
                            <Text style={styles.modalText}>Are you sure?</Text>
                            <View style={{weight: 239, marginTop: 0,marginLeft: 10, flexDirection: 'row', justifyContent: 'center'}}>
                                <Pressable
                                    style={[styles.button2]}
                                    onPress={() => navigation.navigate('Geolocation') && setModalVisible(!modalVisible)}>
                                    <Text style={styles.textStyle}>Delete</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
            {/*Нижня панель*/}
            <View style={{flexDirection: 'row', justifyContent: 'flex-end', Bottom: 0, backgroundColor: null}}>
                <TouchableOpacity activeOpacity={1} style={styles.menu}
                                  onPress={() => navigation.navigate('Geolocation')}>
                    <Geo /></TouchableOpacity>
                <TouchableOpacity activeOpacity={1} style={styles.menu}
                                  onPress={() => navigation.navigate('NotificationCreate')}>
                    <View style={styles.circle1}>
                        <View style={styles.circle2}><Notification/></View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} style={styles.menu}
                                  onPress={() => navigation.navigate('Account')}>
                    <Account /></TouchableOpacity>
                <TouchableOpacity activeOpacity={1} style={styles.menu}
                                  onPress={() => navigation.navigate('Settings')}>
                    <Settings /></TouchableOpacity>
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
    header: {
        color: '#242F68',
        marginTop: 0.04*Wh,
        fontSize: 21,
        textAlign: 'center',
        paddingBottom: 0.03*Wh,
        fontWeight: 'bold',
        alignItems: 'center',
    },
    textinput: {
        alignItems: 'center',
        alignSelf: 'center',
        fontSize: 15,
        height: 23,
        lineHeight: 20,
        width: 290,
        marginBottom: 0,
        color: "rgba(0, 0, 0, 0.52)",
    },
    textinputt: {
        alignItems: 'center',
        alignSelf: 'center',
        fontSize: 15,
        height: 43,
        lineHeight: 20,
        width: 290,
        marginBottom: 15,
        color: "black",
        borderBottomColor: '#242F68',
        borderBottomWidth: 2,
    },
    textplace: {
        fontSize: 15,
        alignItems: 'center',
        alignSelf: 'center',
        color: "rgba(0,0,0,1)",
        height: 25,
        width: 290,
        fontWeight: 'bold',
    },
    button1: {
        width: 122,
        height: 40,
        flexDirection: 'row', justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(68,47,110,1)',
        marginTop: 33,
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
        marginTop: 0.005*Wh,
        marginLeft: 12,
        fontSize: 12,
        textAlign: 'center'
    },
    button2: {
        width: 108,
        height: 38,
        backgroundColor: "transparent",
        marginRight: 3,
        alignItems: 'center',
    },
    textStyle: {
        fontSize: 15,
        letterSpacing: 0.9,
        alignItems: 'center',
        alignSelf: 'center',
        color: '#FFFFFF',
        marginBottom: 45,
        fontWeight: "bold",
        textDecorationLine: 'underline',
    },
});
