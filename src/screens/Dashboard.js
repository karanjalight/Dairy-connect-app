import React from 'react'
import Background from '../components/BackgroundDash'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { theme } from '../core/theme'
import { Text } from 'react-native-paper'
import Navbar from '../components/AppBar'
import BottomNavigation from '../components/BottomNav'



export default function Dashboard({ navigation }) {
  return (
    <Background>
      <Navbar />


      {/* NavBar */}
      <View style={styles.nav}>
        <Text>Dairy Connect</Text>        
      </View>




      {/* <Logo />
      <Header>Let’s start</Header>
      <Paragraph onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'StartScreen' }],
          })
        }>
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
      </Button> */}


      <Header></Header>
      <Header></Header>
      <Header></Header>
      <Header></Header>
      <Header></Header>
      <Header></Header>

      <BottomNavigation />
    </Background>
  )
}


const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  nav: {
    flexDirection: 'row',
    width: '90%',    
    backgroundColor: theme.colors.primary,
    marginHorizontal: '5%',
    borderRadius: '1%',
    height: '20%',
    marginTop: '10%',
    padding:'10%',
    marginBottom: '95%'

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
