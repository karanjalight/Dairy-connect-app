import React from 'react'
import { StyleSheet } from 'react-native'
import { Button as PaperButton } from 'react-native-paper'
import { theme } from '../core/theme'

export default function Button({ mode, style, ...props }) {
  return (
    <PaperButton
      style={[
        styles.button,
        // mode === 'outlined' && { backgroundColor: theme.colors.surface },
        // style,
      ]}
      labelStyle={styles.text}
      mode={mode}
      {...props}
    /> 
  )
}

const styles = StyleSheet.create({
  button: {
    width: '48%',
    marginVertical: 10,
    // paddingVertical: 2,
    height: 120,
    paddingHorizontal: 10,
    // paddingBottom: 40,
    // // backgroundColor: 'lightgreen',
    // color: 'green',

    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    // lineHeight: 6,
  },
})
