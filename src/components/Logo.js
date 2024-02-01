import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function Logo() {
  return <Image source={require('../assets/logomain.png')} style={styles.image} />
}

// arrow_back.png
const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 110,
    marginBottom: 8,
  },
})
