import React, { Component } from 'react'
import {View, Image, Dimensions} from 'react-native'

const wW = Dimensions.get('window').width;
const wH = Dimensions.get('window').height;

const Maps = () => (
   <Image style = {{ width: 0.055*wH, height: 0.055*wH, alignSelf: 'center', marginTop: wH*0.01}}
          source = {require('../assets/Maps.png')}
   />
)

export default Maps