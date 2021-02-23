import React, { Component } from 'react'
import {View, Image, Dimensions} from 'react-native'

const wW = Dimensions.get('window').width;
const wH = Dimensions.get('window').height;

const Sounds = () => (
   <Image source = {require('../assets/music.png')}
   style = {{ width: 0.04*wH, height: 0.04*wH}}
   />
)

export default Sounds