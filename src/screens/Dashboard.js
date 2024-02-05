import React from "react";
import Background from "../components/BackgroundDash";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/ButtonDash";
import Paragraph from "../components/Paragraph";
import { StyleSheet, View, Text, Image } from "react-native";
import BottomNavigation from "../components/BottomNav";


export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Header>Dairy Connect</Header>
      {/* <Logo /> */}
      {/* <Header>Set up your Account</Header> */}
      {/* <BottomNavigation /> */}

      <Image
        source={{
          uri: "https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          cache: "only-if-cached",
        }}
        style={{ width: 350, height: 200, borderRadius: 8 }}
      />

      {/* <Header></Header> */}
      <Paragraph></Paragraph>
      <Paragraph>Welcome to Dairy Connect.</Paragraph>
      <Paragraph>With you every day!</Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate("Production")}
      >
        Create Production
      </Button>

      {/* <Paragraph>
        or
      </Paragraph> */}

      <Button
        mode="outlined"
        onPress={() => navigation.navigate("Routes")}
      >
        Routes
      </Button>

      <Button
        mode="outlined"
        onPress={() => navigation.navigate("Stations")}
      >
        {/* <Image
          source={{
            uri: "https://reactjs.org/logo-og.png",
            cache: "only-if-cached",
          }}
          style={{ width: 40, height: 40 }}
        /> */}
        Stations
        <View>
          <Text></Text>
        </View>
      </Button>

      <Button
        mode="outlined"
        onPress={() => navigation.navigate("Farmers")}
      >
        Farmers
      </Button>
      <Paragraph></Paragraph>
      <Paragraph></Paragraph>

      
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});



