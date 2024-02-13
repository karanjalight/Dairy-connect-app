import React from 'react'
import { TouchableOpacity, Image, StyleSheet, Text } from 'react-native'
// import { getStatusBarHeight } from 'react-native-status-bar-height'
import { MaterialIcons } from '@expo/vector-icons';

export default function BackButton({ goBack }) {
  return (
    <TouchableOpacity onPress={goBack} style={styles.container}>
      {/* <Image
        style={styles.image}
        // source={require('../assets/arrow_back.png')}
      /> */}
      {/* <Text>back</Text> */}
      <MaterialIcons name="clear" size={24} color="white" />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    // top: 10 + getStatusBarHeight(),
    // left: 4,
    // marginRight: 20
  },
  image: {
    // width: 24,
    // height: 24,
    // marginVertical: 50,
  },
})
