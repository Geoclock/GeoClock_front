import React, { Component } from 'react'
import { View, Image } from 'react-native'

const Post = () => (
   <Image source = {require('../assets/post.png')}
   style = {{ width: 29, height: 28, alignSelf: 'center'}}
   />
)
export default Post