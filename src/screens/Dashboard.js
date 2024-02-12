import React from "react";
import Background from "../components/BackgroundDash";
import Logo from "../components/Logo";
import Header from "../components/DashboardHeader";
import Button from "../components/ButtonDash";
import Paragraph from "../components/Paragraph";
import { StyleSheet, View, Text, Image } from "react-native";
import BottomNavigation from "../components/BottomNav";

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Header>Dairy Connect</Header>

      {/* <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          marginBottom: 10,
          marginTop: 10,
          color: "#666",
        }}
      >
        {" "}
        Hi there,
      </Text> */}
      <View style={styles.container}>
        <View
          style={{
            // flex: 0.3,
            // backgroundColor: 'grey',
            borderWidth: 1,
            borderColor: "green",
            borderRadius: 5,
            padding: 25,
            marginTop: 10,
            height: "100",
          }}
        >
          <View style={styles.row}>
            <View>
              <Text
                style={{
                  color: "green",
                  fontSize: 21,
                  fontWeight: "900",
                }}
              >
                Welcome
              </Text>
              <Text
                style={{
                  color: "green",
                  fontSize: 15,
                  fontWeight: "100",
                }}
              >
                Let's track
              </Text>
              <Text
                style={{
                  color: "green",
                  fontSize: 15,
                  fontWeight: "100",
                }}
              >
                Milk Production
              </Text>
            </View>
            <Image
              source={require("../assets/farmer1.jpg")}
              style={styles.image}
            />
          </View>
        </View>

        <View style={styles.containers}>
          {/* Flex Box 1 */}
          <View style={styles.rows}>
            <View style={styles.row}>
              {/* Create Production */}
              <Button
                icon="tab-plus"
                mode="contained"
                onPress={() => navigation.navigate("Production")}
              >
                Creates
              </Button>

              {/* Routes */}
              <Button
                icon="routes"
                mode="outlined"
                onPress={() => navigation.navigate("Routes")}
              >
                Routes
              </Button>
            </View>
          </View>

          {/* Flex Box 2 */}
          <View style={styles.rows}>
            <View style={styles.row}>
              {/* Create Production */}
              <Button
                icon="pokemon-go"
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
                <Text> Stations</Text>
              </Button>

              {/* farmers */}
              <Button
                icon="account-arrow-right"
                mode="outlined"
                onPress={() => navigation.navigate("Farmers")}
              >
                <Text>Farmers</Text>
              </Button>
            </View>
          </View>
        </View>
      </View>
      
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 10,
    justifyContent: "space-between",
  },
  containers: {
    // flex: 1,
    padding: 10,
    justifyContent: "space-between",
    marginTop: 30
  },
  image: {
    width: 190,
    height: 120,
    marginBottom: 8,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 1,
    alignItems: "center",
    border: "green",
    backgroundColor: "white",

    // justifyContent: 'center',
  },

  rows: {
    flexDirection: "row",
    // flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 1,
    alignItems: "center",
    border: "green",
    backgroundColor: "white",

    alignSelf: "center",
    alignItems: "center",
    // justifyContent: 'center',
  },
});
