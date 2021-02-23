import React, {Component, useState} from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import {ImageBackground, StyleSheet, Text, View, Button, Dimensions, TouchableOpacity, TextInput, Picker, TouchableWithoutFeedback,} from "react-native";
import Geo from "../Images/Geo";
import Notification from "../Images/Notification";
import Account from "../Images/Account";
import Settings from "../Images/Settings";
import Maps from "../Images/Map";
import Add from "../Images/Add";
import Delete from "../Images/Delete";
import ScrollView from 'expo-faded-scrollview';
import {useDispatch} from "react-redux";
import NotificationCommunication from "../Storage/CommunicationDB/NotificationCommunication";
import {addNotification} from "../Storage/Actions/NotificationActions";
import storage from "../Storage/Initialize";


const Ww = Dimensions.get('window').width;
const Wh = Dimensions.get('window').height;

export default function NotificationCreate({navigation}) {
    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');
    const [text3, setText3] = useState('');
    const data = new FormData();
    data.append('text', text1);
    data.append('text', text2);
    data.append('text', text3);
    const [selectedValue, setSelectedValue] = useState("java");

    const dispatch = useDispatch();

    const AddNotification = () =>{
        const Storage = storage.getState();
        const user_id = Storage.userINFO.userINFO[0].id;
        const notification = NotificationCommunication("AddNotification",
            user_id,
            text1, // -> notification
            text2, // -> radius
            text3);// -> geo_id
        dispatch(
            addNotification(notification)
        );
    }

    const OnClick = () => {
        if( (text1 !== '') && (text2 !== '') ){
            AddNotification();
            navigation.navigate('Notification');
        }
    }

    return (

        <View style={styles.container}>
            <LinearGradient
                colors={['rgba(63,44,109,1)', 'rgba(211,237,255,1)']}
                style={styles.background}
            />

            <View style={styles.rectangle1}>
                <ScrollView style={styles.rectangle} fadeSize={40} scrollThreshold={0} fadeColors={['rgba(255,255,255,0)', 'rgba(225, 225, 225, 0.75)']}>

                    <Text style={styles.header}>CREATE NOTIFICATION</Text>

                    <Text style={styles.graytext}>Note:</Text>
                    <TextInput style={styles.textinput} placeholder="Text" onChangeText={text1 => setText1(text1)} defaultValue={text1}/>

                    <Text style={styles.graytext}>Radius of coverage:</Text>
                    <TextInput style={styles.textinput} placeholder="Radius in meters" onChangeText={text2 => setText2(text2)} defaultValue={text2}/>

                    <Text style={styles.graytext}>Place:</Text>
                    <Picker
                        selectedValue={selectedValue}
                        mode={'dropdown'}
                        style={{ height: 30, width: 305, fontSize: 15, alignSelf: 'center', color: '#000000', marginBottom: 45,}}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                        <Picker.Item label="Default folder" value="default folder" />
                        <Picker.Item label="Folder 1" value="folder 1"/>
                        <Picker.Item label="Folder 2" value="folder 2"/>
                    </Picker>

                    <Text style={styles.line}> </Text>
                    <TouchableOpacity style={styles.button} onPress={OnClick}>
                        <Text style={styles.save}>Save</Text>
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
                    <View style={styles.circle1}>
                        <View style={styles.circle2}><Geo/></View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} style={styles.menu}
                                  onPress={() => navigation.navigate('Notification')}>
                    <Notification /></TouchableOpacity>
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
    header: {
        color: '#242F68',
        marginTop: 0.04*Wh,
        fontSize: 21,
        textAlign: 'center',
        paddingBottom: 0.03*Wh,
        fontWeight: 'bold',
        alignItems: 'center',
        letterSpacing: 0.9,
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
    graytext: {
        alignItems: 'center',
        alignSelf: 'center',
        fontSize: 15,
        marginBottom: 10,
        width: 290,
        letterSpacing: 0.9,
        color: '#9c9c9c'
    },
    textinput: {
        alignItems: 'center',
        alignSelf: 'center',
        fontSize: 15,
        height: 30,
        lineHeight: 20,
        width: 290,
        letterSpacing: 0.9,
        marginBottom: 45,
        borderBottomColor: '#242F68',
        borderBottomWidth: 2,
    },
    line: {
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: -68,
        marginBottom: 20,
        width: 290,
        borderBottomColor: '#242F68',
        borderBottomWidth: 2,
    },
    button: {
        width: Ww*0.35,
        height: Wh*0.056,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: '#442F6E',
        borderRadius: 33,
    },
    save: {
        color: '#E9ECF6',
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 0.9
    },
    orucan: {
        fontSize: 13,
        letterSpacing: 0.9,
        color: '#9c9c9c',
        alignItems: 'center',
        alignSelf: 'center',
        textAlign: 'center',
        width: 290,
        marginBottom: 5,
    },
    createfolder: {
        fontSize: 13,
        letterSpacing: 0.9,
        alignItems: 'center',
        alignSelf: 'center',
        color: '#9c9c9c',
        marginBottom: 45,
        textDecorationLine: 'underline',
    },
});
