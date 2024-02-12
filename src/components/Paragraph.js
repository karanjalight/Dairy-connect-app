import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'

export default function Paragraph(props) {
  return <Text style={styles.text} {...props} />
}

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    lineHeight: 40,
    textAlign: 'left',
    marginBottom: 12,
    paddingHorizontal: 40,
    // marginTop: 40,
  },
})
