import React, { Component } from 'react'
import {View, Image, Dimensions} from 'react-native'

const wW = Dimensions.get('window').width;
const wH = Dimensions.get('window').height;

const Language = () => (
   <Image source = {require('../assets/language.png')}
   style = {{ width: 0.03*wH, height: 0.03*wH}}
   />
)

export default Language