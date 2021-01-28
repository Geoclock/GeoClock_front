import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Dimensions, Image } from 'react-native';
import Navigator from './routes/StartStack';

export default function App(){
    return( <Navigator/> )
}
