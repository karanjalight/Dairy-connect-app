import React, { useState } from "react";
import Background from "../components/BackgroundDash";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { theme } from "../core/theme";
import { Text } from "react-native-paper";
import Navbar from "../components/AppBar";
import BottomNavigation from "../components/BottomNav";
import Flex from "../components/Flex";
import CreateProd from "../components/ProductionButton";

const FlexDirectionBasics = () => {
  const [flexDirection, setflexDirection] = useState("column");
};

export default function Production({ navigation }) {
  const [flexDirection, setflexDirection] = useState("column");
  return (
    <Background>
      <Navbar />

      <View style={styles.top}>
        <Text>Hi There,</Text>
      </View>

      {/* NavBar */}
      <View style={styles.nav}>
        <Text>Production</Text>
      </View>


      <Header></Header>
      <Header></Header>
      <Header></Header>
      <Header></Header>
      <Header></Header>      

      

      {/* <Button
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

      {/* <BottomNavigation /> */}
    </Background>
  );
}

const PreviewLayout = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
}) => (
  <View style={{ padding: 10, flex: 1, height: 40 }}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.row}>
      {values.map((value) => (
        <TouchableOpacity
          key={value}
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [{ name: "StartScreen" }],
            })
          }
          //   onPress={() => setSelectedValue(value)}
          style={[styles.button, selectedValue === value && styles.selected]}
        >
          <Text
            style={[
              styles.buttonLabel,
              selectedValue === value && styles.selectedLabel,
            ]}
          >
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View style={[styles.container, { [label]: selectedValue }]}>
      {children}
    </View>
  </View>
);

const styles = StyleSheet.create({
  forgotPassword: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 24,
  },
  nav: {
    flexDirection: "row",
    width: "90%",
    // backgroundColor: theme.colors.primary,
    border: "2px solid green",
    borderCurve: "20px",
    marginHorizontal: "5%",
    borderRadius: 2,
    height: "20%",
    marginTop: "10%",
    padding: "10%",
    // marginBottom: '95%'
  },
  top: {
    fontSize: "26px",
    marginHorizontal: "5%",
    color: "#666",
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary,
  },
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: "aliceblue",
  },
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginHorizontal: 10,
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "lightgreen",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "48%",
    textAlign: "center",
  },
  selected: {
    backgroundColor: "green",
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: "500",
    color: "green",
  },
  selectedLabel: {
    color: "white",
  },
  label: {
    textAlign: "left",
    marginBottom: 10,
    fontSize: 18,
    marginHorizontal: 10,
    color: 'gray',

  },
});
