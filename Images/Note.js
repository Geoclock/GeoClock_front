import React, { Component } from 'react'
import { View, Image } from 'react-native'

const Note = () => (
    <Image source = {require('../assets/note.png')}
           style = {{ width: 29, height: 23, alignSelf: 'center'}}
    />
)
export default Note
