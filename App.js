import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Dimensions, Image } from 'react-native';
import Navigator from './routes/StartStack';
import {Provider} from 'react-redux';
import ResetPassEmailScreen from "./screens/ResetPassEmailScreen";
import storage from "./Storage/Initialize";

export default function App(){
    return( <Provider store={storage}><Navigator /></Provider>)
}
