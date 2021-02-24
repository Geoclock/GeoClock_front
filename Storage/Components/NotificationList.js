import ScrollView from "expo-faded-scrollview";
import storage from "../Initialize";
import Note from "../../Images/Note";
import {Text, TouchableOpacity, View} from "react-native";
import {Fragment} from "react";
import React from 'react';
import {useEffect, Component} from "react";
import {connect} from 'react-redux';
import {StyleSheet} from "react-native";
import Line from "../../Images/Line";
import {wWidth} from "../../Styles/Dimensions";

import { SwipeRow } from 'react-native-swipe-list-view'
import Delete from "../../Images/Delete";
import Edit from "../../Images/Edit";

class NotificationList extends Component{
    notification = this.props.notifications;
    geolocation = this.props.geolocations;
    notesubjection = this.props.notesubjections;

    GetGeo = (note_id) => {
        let g;
         this.notesubjection.map((notesub) => {
            if(note_id === notesub.note_id){
                 this.geolocation.map((geo) => {
                    if(notesub.geo_id === geo.id){
                        g= geo;
                    }
                });
            }
        });
         return g;
    }


    render() {
        return (
            <View>
                <Line/>
                {this.notification.map((note, index) => (
                <Fragment>
                    <SwipeRow rightOpenValue={-120}>
                    <View style={styles.hidden}>
                        <TouchableOpacity style = {[styles.rectangle,{backgroundColor: "#FEF181"}]}>
                            <Edit/>
                        </TouchableOpacity>
                        <TouchableOpacity style = {[styles.rectangle,{backgroundColor: "#FD6161"}]}>
                            <Delete/>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity activeOpacity = {1}
                                      style={[styles.root]}
                                      >
                        <Fragment>
                            <Text style={styles.text}>
                                <Note/> {note.notification}
                            </Text>
                            <Text style={styles.text}> {note.radius}km - {this.GetGeo(note.id).address}
                            </Text>
                        </Fragment>
                    </TouchableOpacity>

                </SwipeRow>
                    <Line />
                </Fragment>
                ))}
            </View>
        )
    }

}

function mapStateToProps(state) {
    return{
        notifications: state.notifications.notifications,
        geolocations: state.geolocations.geolocations,
        notesubjections: state.notesubjections.notesubjections,

    }
}

export default connect(mapStateToProps)(NotificationList)



const styles = StyleSheet.create({
    text: {

        fontSize: 15,
        alignItems: 'center',
        alignSelf: 'center',
        color: "rgba(0,0,0,1)",
        height: 35,
        width: 0.025*29*wWidth,
        marginTop:11,
        marginBottom:2,
        fontWeight: 'bold',
        justifyContent: 'center'
    },
    root: {
        height: 80,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 0,

    },
    rectangle: {
        height: 80,
        width: 60,
        justifyContent: 'center',
    },
    hidden: {
        height: 80,
        backgroundColor: 'white',
        justifyContent: 'flex-end',
        //alignItems: 'flex-end',
        flexDirection: 'row',

        //paddingRight: 100,
    }
});
