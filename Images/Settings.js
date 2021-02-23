import React, { Component } from 'react'
import {View, Image, Dimensions} from 'react-native'

const wW = Dimensions.get('window').width;
const wH = Dimensions.get('window').height;

const Settings = () => (
   <Image source = {require('../assets/settings.png')}
   style = {{ width: 0.045*wH, height: 0.045*wH, alignSelf: 'center', marginHorizontal: 0.01*wW}}
   />
)

export default Settings