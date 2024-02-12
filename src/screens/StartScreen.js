import React from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/HeaderStart";
import Button from "../components/Button";
import Paragraph from "../components/StartParagraph";
import { StyleSheet, View, Text, Image } from "react-native";


export default function StartScreen({ navigation }) {
  return (
    <Background>
      <View style={styles.container}>
        <Header></Header>
        {/* <Header>Set up your Account</Header> */}
        <View>
        <Header>Dairy Connect</Header>
        <Paragraph>Welcome to Dairy Connect. Set up your Account</Paragraph>
        {/* <Paragraph>Set up your Account</Paragraph> */}
       <View style={styles.containers}>
       <Logo />

       </View>
        
        </View>

        <Button style={styles.button}
          mode="outlined"
          onPress={() => navigation.navigate("LoginScreen")}
        >
          Proceed to Log In
        </Button>
      </View>
    </Background>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
    

  },
  containers: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'center'

  },
  button: {
    // marginTop:  60,
  }
})