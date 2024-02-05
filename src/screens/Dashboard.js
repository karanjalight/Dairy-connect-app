import React from "react";
import Background from "../components/BackgroundDash";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";
import { StyleSheet, View, Text, Image } from "react-native";

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Header>Dairy Connect</Header>
      {/* <Logo /> */}
      {/* <Header>Set up your Account</Header> */}
      <Paragraph>Welcome to Dairy Connect.</Paragraph>
      <Paragraph>With you every day!</Paragraph>

      <Header></Header>
      <Header></Header>
      <Header></Header>
      <Button
        mode="contained"
        onPress={() => navigation.navigate("LoginScreen")}
      >
        Create Production
      </Button>

      {/* <Paragraph>
        or
      </Paragraph> */}

      <Button
        mode="outlined"
        onPress={() => navigation.navigate("RegisterScreen")}
      >
        Routes
      </Button>
      {/* <Image
        style={{
          width: 51,
          height: 51,
          resizeMode: "contain",
        }}
        source={{
          uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==",
        }}
      />
      <Image
        source={{
          uri: "https://reactjs.org/logo-og.png",
          cache: "only-if-cached",
        }}
        style={{ width: 40, height: 40 }}
      /> */}
      <Button
        mode="outlined"
        onPress={() => navigation.navigate("RegisterScreen")}
      >
        <Image
        source={{
          uri: "https://reactjs.org/logo-og.png",
          cache: "only-if-cached",
        }}
        style={{ width: 40, height: 40 }}
      />
        
        Stations
        <View>
          <Text></Text>
        </View>
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate("RegisterScreen")}
      >
        Farmers
      </Button>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
