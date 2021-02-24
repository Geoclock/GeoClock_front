import React, { Component } from 'react'
import {View, Image, Dimensions} from 'react-native'

const wW = Dimensions.get('window').width;
const wH = Dimensions.get('window').height;

const Yes = () => (
    <Image style = {{ width: 0.025*wH, height: 0.025*wH, alignSelf: 'flex-end'}}
           source = {require('../assets/yes.png')}
    />
)

export default Yes
