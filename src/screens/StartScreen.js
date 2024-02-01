import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Header>Dairy Connect</Header>
      {/* <Logo /> */}
      {/* <Header>Set up your Account</Header> */}
      <Paragraph>
        Welcome to Dairy Connect. Set up your Account
      </Paragraph>
      <Paragraph>
        Set up your Account
      </Paragraph>
      <Header></Header>
      <Header></Header>
      <Header></Header>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Login
      </Button>

      {/* <Paragraph>
        or
      </Paragraph>

      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Sign Up
      </Button> */}
    </Background>
  )
}
