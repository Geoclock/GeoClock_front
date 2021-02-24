import React, { Component } from 'react'
import { View, Image } from 'react-native'
import {wWidth} from "../Styles/Dimensions";

const Note = () => (
    <Image source = {require('../assets/note.png')}
           style = {{ width: 29, height: 23,
               //alignSelf: 'center',
               //marginRight:(wWidth-0.015*27*wWidth)/2+15*5,
           }}
    />
)
export default Note
