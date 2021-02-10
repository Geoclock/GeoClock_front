import React, { Component } from 'react'
import {View, Image, Dimensions} from 'react-native'

const wW = Dimensions.get('window').width;
const wH = Dimensions.get('window').height;

const Account = () => (
   <Image source = {require('../assets/account.png')}
   style = {{ width: 0.045*wH, height: 0.045*wH, alignSelf: 'center'}}
   />
)

export default Account