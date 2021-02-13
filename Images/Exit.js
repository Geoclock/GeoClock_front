import React, { Component } from 'react'
import {View, Image, Dimensions} from 'react-native'

const wW = Dimensions.get('window').width;
const wH = Dimensions.get('window').height;

const Exit = () => (
   <Image style = {{ width: 0.022*wH, height: 0.022*wH }}
          source = {require('../assets/cancel.png')}
   />
)

export default Exit
