import React from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { Text } from "react-native-paper";
import { theme } from "../core/theme";
import { View, Image } from "react-native";
import Button from "../components/HeaderButton";

const image = { uri: "../assets/farmer2.jpg" };

export default function Header(props, navigation) {
  return (
    <View style={styles.flex}>
      <Text style={styles.text} {...props} />
      <Text style={styles.texts}>
        Production</Text> 

      <View>
        {/* <Button
          style={styles.button}
          mode="outlined"
          onPress={() => navigation.navigate("Production")}
        >
          +
        </Button> */}

        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 26,
    color: theme.colors.primary,
    fontWeight: "bold",
    // backgroundColor: 'red'
    // paddingHorizontal: 30,
  },

  text: {
    color: "white",
    fontSize: 28,
    height: 70,
    fontWeight: "bold",
    textAlign: "left",
    backgroundColor: theme.colors.secondary,
    paddingTop: 40,
    // alignSelf: 'center',
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  texts: {
    color: "white",
    fontSize: 16,
    height: 30,
    // fontWeight: "bold",
    textAlign: "left",
    backgroundColor: theme.colors.secondary,
    paddingTop: -80,

    // alignSelf: 'center',
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  image: {
    height: 140,
    marginTop: 20,
    lineHeight: 100,
  },
  flex: {
    // flexDirection: "row",
    // flexWrap: "wrap",
    // justifyContent: "space-between",
    // // padding: 1,
    // alignItems: "center",
    // // border: "green",
    // backgroundColor: theme.colors.secondary,
    // // margin: 5,
    // alignSelf: "center",
    // alignItems: "center",
  },
});
