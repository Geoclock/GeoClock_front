import ScrollView from "expo-faded-scrollview";
import storage from "../Initialize";
import Note from "../../Images/Note";
import {Text, TouchableOpacity, View} from "react-native";
import {Fragment} from "react";
import React from 'react'
import {useEffect, Component} from "react";
import {connect} from 'react-redux'
import {StyleSheet} from "react-native";
import Line from "../../Images/Line";
import {wWidth} from "../../Styles/Dimensions";
import Draggable from 'react-draggable';
import DraggableFlatList, { RenderItemInfo, OnMoveEndInfo } from 'react-native-draggable-flatlist'
import { SwipeRow } from 'react-native-swipe-list-view'
import Delete from "../../Images/Delete";
import Edit from "../../Images/Edit";
import Place from "../../Images/Place";
import Folder from "../../Images/Folder";
import Yes from "../../Images/Yes";


class GeolocationList extends Component{
    notification = this.props.notifications;
    geolocation = this.props.geolocations;
    notesubjection = this.props.notesubjections;
    folder = this.props.folders;
    show = this.folder.map(() => {0});

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

    ChangeValue = (index) => {
        if (this.show[index] === 1){
            this.show[index] = 0;
        }
        else {
            this.show[index] = 1;
        }
    }


    render() {
        return (
            <View>
                <Line/>
                {this.folder.map((folder, index) => (
                    <Fragment>
                        <SwipeRow rightOpenValue={-110}>
                            <View style={styles.hidden}>
                                <TouchableOpacity style = {[styles.rectangle,{backgroundColor: "#FEF181"}]}>
                                    <Edit/>
                                </TouchableOpacity>
                                <TouchableOpacity style = {[styles.rectangle,{backgroundColor: "#FD6161"}]}>
                                    <Delete/>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity activeOpacity = {1}
                                              style={[styles.root]}>
                                <View style={ {flexDirection: 'row'}}>
                                    <Text style={styles.text}>
                                        <Folder/> {folder.folder_name}
                                    </Text>
                                    <TouchableOpacity onPress={this.ChangeValue(index)}
                                        style={ {justifyContent: 'center',}}>
                                        <Yes/>
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                            {this.show[index] === 1
                                ? this.geolocation.map((geo, index) =>(
                                    <Fragment>
                                        {folder.id === geo.folder_id
                                            ? <SwipeRow rightOpenValue={-110}>
                                                <View style={styles.hidden}>
                                                    <TouchableOpacity style = {[styles.rectangle,{backgroundColor: "#FEF181"}]}>
                                                        <Edit/>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style = {[styles.rectangle,{backgroundColor: "#FD6161"}]}>
                                                        <Delete/>
                                                    </TouchableOpacity>
                                                </View>
                                                <TouchableOpacity activeOpacity = {1}
                                                                  style={[styles.root]}>
                                                    <View style={ {flexDirection: 'row'}}>
                                                        <Text style={styles.text1}>
                                                            <Place/> {geo.name}
                                                        </Text>
                                                        <Text style={styles.text1}>
                                                            <Place/> {geo.address}
                                                        </Text>
                                                    </View>
                                                </TouchableOpacity>
                                            </SwipeRow>
                                            : null
                                        }

                                    </Fragment>
                                ))
                                : null
                            }
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
        folders: state.folders.folders

    }
}

export default connect(mapStateToProps)(GeolocationList)



const styles = StyleSheet.create({
    text: {

        fontSize: 15,
        alignItems: 'center',
        alignSelf: 'center',
        color: "rgba(0,0,0,1)",
        height: 30,
        width: 0.025*29*wWidth,
        marginTop:0,
        marginBottom:10,
        fontWeight: 'bold',
        justifyContent: 'center'
    },
    text1: {

        fontSize: 15,
        alignItems: 'center',
        alignSelf: 'center',
        color: "rgba(0,0,0,1)",
        height: 30,
        width: 0.025*29*wWidth-10,
        marginTop:0,
        marginLeft: 10,
        marginBottom:10,
        fontWeight: 'bold',
        justifyContent: 'center'
    },
    root: {
        height: 60,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 0,

    },
    rectangle: {
        height: 60,
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
