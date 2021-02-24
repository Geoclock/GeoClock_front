import React, { Component } from 'react'
import {View, Image, Dimensions} from 'react-native'

const wW = Dimensions.get('window').width;
const wH = Dimensions.get('window').height;

const Place = () => (
    <Image style = {{ width: 0.045*wH, height: 0.045*wH, alignSelf: 'center'}}
           source = {require('../assets/place.png')}
    />
)

export default Place
