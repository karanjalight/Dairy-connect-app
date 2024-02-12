import React from 'react'
import { StyleSheet, ImageBackground } from 'react-native'
import { Text } from 'react-native-paper'
import { theme } from '../core/theme'
import {  View,  Image } from "react-native";

const image = {uri: '../assets/farmer2.jpg'};


export default function Header(props) {
  return <View>
    <View style={styles.container}>
    <ImageBackground source={require('../assets/farmer2.jpg')} resizeMode="contain" style={styles.image}>
    <Text style={styles.text} {...props} />
    </ImageBackground>
  </View>
  </View> 
}

const styles = StyleSheet.create({
  header: {
    fontSize: 32,
    color: theme.colors.primary,
    fontWeight: 'bold',
    // backgroundColor: 'red'
    paddingVertical: 3,
  },
  
  text: {
    color: 'white',
    fontSize: 28,
    lineHeight: 230,
    fontWeight: 'bold',
    textAlign: 'left',
    backgroundColor: '#000000c0',
    padding: 10
    
  },
  image: {
    height: 140,
    marginTop: 20,
    lineHeight: 100,
    
  }
})

