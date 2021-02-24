import React, { Component } from 'react'
import {View, Image, Dimensions} from 'react-native'

const wW = Dimensions.get('window').width;
const wH = Dimensions.get('window').height;

const Add = () => (
    <Image style = {{ width: 0.03*27*wW, height: 0.002*wH,alignSelf: 'center'}}
           source = {require('../assets/line.png')}
    />
)

export default Add
