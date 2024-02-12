import React from 'react'
import { StyleSheet } from 'react-native'
import { Button as PaperButton } from 'react-native-paper'
import { theme } from '../core/theme'

export default function Button({ mode, style, ...props }) {
  return (
    <PaperButton
      style={[
        styles.button,
        mode === 'outlined' && { backgroundColor: 'white' },
        style,
      ]}
      labelStyle={styles.text}
      mode={mode}
      {...props}
    />
  )
}

const styles = StyleSheet.create({
  button: {
    width: '66%',
    // marginVertical: 10,
    // paddingVertical: 2,
    marginRight: 10,
    marginTop: 20,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    // lineHeight: 26,
    color: theme.colors.secondary
  },
  
})
