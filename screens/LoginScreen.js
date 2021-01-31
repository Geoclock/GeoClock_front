import {StyleSheet, Text, TextInput, View, TouchableOpacity, Dimensions, Image, Button} from 'react-native';
import React, {useState} from "react";
import Google from "../image_example";
import Http from "../ConnectionToFlask";
import FlashMessage, {showMessage} from "react-native-flash-message";

const wW = Dimensions.get('window').width;
const wH = Dimensions.get('window').height;

export default function LoginScreen({navigation}) {
    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');

    const data = new FormData();
    data.append('login', text1);
    data.append('password', text2);

    const OnClick = () => {
        const resp = {}
        Http.post('/Login', data)
        .then(function (response) {
            resp['status'] = response.data['status'];
            resp['message'] = response.data['message'];
            if(resp['status']==200){ navigation.navigate('Start');}
            else {
                showMessage({
                    message: resp['message'],
                    textStyle: {
                        fontSize: 20,
                        textAlign: 'center',
                        color: "white",
                    },
                    backgroundColor: "rgba(68,47,110,1)",
                    color: "white"
                });
            }
        })
    }

    return (
        <View
            style={styles.container}>
            <View
                style={styles.rectangle_back}>
                <Text
                    style={styles.title}>GEOCLOCK</Text>
                <View
                    style={styles.rectangle}>
                    <Text style={styles.header}>SIGN IN</Text>
                </View>
            </View>

            <View>
                <FlashMessage position='bottom'/>

                <TextInput
                    style={styles.textinput}
                    placeholder="Username"
                    onChangeText={text1 => setText1(text1)}
                    defaultValue={text1}
                />

                <TextInput
                    style={styles.textinput}
                    placeholder="Password"
                    secureTextEntry={true}
                    onChangeText={text2 => setText2(text2)}
                    defaultValue={text2}
                />

                <Text style={styles.forgotpass}>Forgot password?
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Reset1')}>
                        <Text style={styles.reset}> Reset it</Text>
                    </TouchableOpacity>
                </Text>

                <TouchableOpacity
                    style={styles.button}
                    onPress={OnClick}>
                    <Text style={styles.signintext}>Sign in</Text>
                </TouchableOpacity>


                <View>
                    <TouchableOpacity
                        style={styles.button1}>
                        <Text style={styles.boldsmalltext1}>Sign in with<Google/></Text>
                    </TouchableOpacity>

                    <Text style={styles.smalltext}>Don`t have an account?
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Register')}>
                            <Text style={styles.boldsmalltext2}> Sign up</Text>
                        </TouchableOpacity>
                    </Text>

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
        height: wH * 0.23,
        backgroundColor: 'rgba(68,47,110,1)',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    title: {
        color: "white",
        fontSize: 36,
        zIndex: 1,
        textAlign: 'center'
    },
    rectangle: {
        width: wW - 40,
        height: wH * 0.7,
        backgroundColor: 'rgb(255,251,251)',
        marginTop: 0.02 * wH,
        marginLeft: 20,
        borderRadius: 20,
        zIndex: 0
    },
    header:{
        color: '#242F68',
        marginTop: 0.04*wH,
        fontSize: 24,
        textAlign: 'center',
        paddingBottom: 0.07*wH,
        fontWeight: 'bold',
        alignItems: 'center',
    },
    textinput: {
        alignItems: 'center',
        alignSelf: 'center',
        fontSize: 15,
        height: 43,
        lineHeight: 20,
        width: 290,
        marginBottom: 23,
        borderBottomColor: '#242F68',
        borderBottomWidth: 2,
    },
    forgotpass: {
        fontSize: 12,
        color: "gray",
        alignItems: 'center',
        alignSelf: 'center',
        textAlign: 'right',
        width: 290,
        paddingTop: 2,
        marginBottom: 40,
    },
    reset: {
        fontSize: 12,
        fontWeight: "bold",
        color: "gray",
        textDecorationLine: 'underline',
    },
    button: {
        width: 122,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: '#442F6E',
        marginBottom: 20,
        borderRadius: 33,
    },
    signintext: {
        color: '#E9ECF6',
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 0.09
    },
    button1: {
        alignItems: 'center',
        height: wH*0.02,
    },
    boldsmalltext1: {
        fontSize: 12,
        marginLeft: 15,
        alignSelf: 'center',
        color: "gray",
        textDecorationLine: 'underline',
        fontWeight: "bold",
    },
    smalltext: {
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: 12,
        color: "gray",
        height: 34,
        width: 337,
        paddingTop: 10,
    },
    boldsmalltext2: {
        fontSize: 12,
        color: "gray",
        textDecorationLine: 'underline',
        fontWeight: "bold",
    },
});
