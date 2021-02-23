import ScrollView from "expo-faded-scrollview";
import storage from "../Initialize";
import Note from "../../Images/Note";
import {Text, TouchableOpacity, View} from "react-native-web";
import {Fragment} from "react";
import React from 'react'

const NotificationList = () => {
    Storage = storage.getState();
    const notification = Storage.notifications.notifications;
    console.log("nottrlist",notification);

    const Reload = () =>{
        this.notification.setState(state => {
            return storage.getState().notifications.notifications;
        });
    }

    return(
        <Fragment>
            <Note/>
            {notification.map((note, index )=> (
                        <View>
                        <Note/>
                        <Text >
                            {
                                note.notification
                            }
                        </Text>
                        </View>
                ))}
        </Fragment>
    )
}

export default NotificationList
