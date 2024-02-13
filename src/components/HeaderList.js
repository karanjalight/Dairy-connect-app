import React from 'react'
import { StyleSheet, ImageBackground } from 'react-native'
import { Text } from 'react-native-paper'
import { theme } from '../core/theme'
import {  View,  Image } from "react-native";

const image = {uri: '../assets/farmer2.jpg'};


export default function Header(props) {
  return <View>
    <View style={styles.container}>
    <Text style={styles.text} {...props} />
    {/* <ImageBackground source={require('../assets/farmer1.jpg')} resizeMode="contain" style={styles.image}>
    <Text style={styles.text} {...props} />
    </ImageBackground> */}
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
    lineHeight: 80,
    fontWeight: 'bold',
    textAlign: 'left',
    backgroundColor: theme.colors.secondary,
    padding: 10,
    // alignItems: 'center'
    // paddingTop: 30
    
  },
  image: {
    height: 140,
    marginTop: 20,
    lineHeight: 100,
    
  }
})

