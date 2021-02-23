import React, {Fragment} from "react";
import {StyleSheet, Text} from "react-native";
import Login from "../Containers/UserINFO/Login";
import Email from "../Containers/UserINFO/Email";
import Name from "../../Images/Name";
import {Provider} from "react-redux";
import storage from "../Initialize";
import Post from "../../Images/Post";
import ScrollView from "expo-faded-scrollview";


const ProfileINFO = () => {
    return (
    <Fragment>
        <Text style={styles.textinput}>
            <Name/> Username:
        </Text>
        <Text style={styles.text}>
            <Login/>
        </Text>
        <Text style={styles.textinput}>
            <Post/> E-mail:
        </Text>
        <Text style={styles.text}>
            <Email/>
        </Text>
    </Fragment>)
}

/*<Text style={styles.text}>
            <Email/>
        </Text>*/




export default ProfileINFO

const styles = StyleSheet.create({
    text: {
        fontSize: 15,
        alignItems: 'center',
        alignSelf: 'center',
        color: "rgba(0,0,0,1)",
        height: 35,
        width: 290,
        marginBottom: 10,
        fontWeight: 'bold',
    },
    textinput: {
        alignItems: 'center',
        alignSelf: 'center',
        fontSize: 15,
        height: 30,
        lineHeight: 20,
        width: 290,
        marginBottom: 0,
        color: "rgba(0, 0, 0, 0.52)",
        //borderBottomColor: '#242F68',
        //borderBottomWidth: 2,
    }
});
