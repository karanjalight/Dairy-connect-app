import React from 'react'
import Background from '../components/BackgroundDash'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { theme } from '../core/theme'
import { Text } from 'react-native-paper'



export default function Dashboard({ navigation }) {
  return (
    <Background>
      <View style={styles.row}>
        <Text>Dairy Connect</Text>
        
      </View>
      <Logo />
      <Header>Let’s start</Header>
      <Paragraph>
        Your amazing app starts here. Open you favorite code editor and start
        editing this project.
      </Paragraph>
      <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'StartScreen' }],
          })
        }
      >
        Logout
      </Button>
    </Background>
  )
}


const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    width: '100%',    
    backgroundColor: theme.colors.primary,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})
