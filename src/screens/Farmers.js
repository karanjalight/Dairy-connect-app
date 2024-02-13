import { FlatList, Text, View } from "react-native";
import React from "react";
import Background from "../components/BackgroundList";
import BackButton from "../components/BackButton";
import Header from "../components/DashboardHeader";
import Button from "../components/ButtonList";
import { theme } from "../core/theme";

const data = [
  {
    id: 1,
    name: "John Doe Smith",
    station: "Station A",
    slug: "john-doe-smith",
  },
  {
    id: 2,
    name: "Bob Lee Johnson",
    station: "Station B",
    slug: "bob-lee-johnson",
  },
  {
    id: 3,
    name: "Mei Chen Wang",
    station: "Station C",
    slug: "mei-chen-wang",
  },
  {
    id: 4,
    name: "Steve Miller Brown",
    station: "Station D",
    slug: "steve-miller-brown",
  },
  {
    id: 5,
    name: "John Doe Smith",
    station: "Station E",
    slug: "john-doe-smith",
  },
  {
    id: 6,
    name: "Bob Lee Johnson",
    station: "Station F",
    slug: "bob-lee-johnson",
  },
  {
    id: 7,
    name: "Mei Chen Wang",
    station: "Station G",
    slug: "mei-chen-wang",
  },
  {
    id: 8,
    name: "Steve Miller Brown",
    station: "Station H",
    slug: "steve-miller-brown",
  },
  {
    id: 9,
    name: "Bob Lee Johnson",
    station: "Station I",
    slug: "bob-lee-johnson",
  },
  {
    id: 10,
    name: "Mei Chen Wang",
    station: "Station J",
    slug: "mei-chen-wang",
  },
  {
    id: 11,
    name: "Steve Miller Brown",
    station: "Station K",
    slug: "steve-miller-brown",
  },
  {
    id: 12,
    name: "Steve Miller Brown",
    station: "Station K",
    slug: "steve-miller-brown",
  },
  {
    id: 13,
    name: "Steve Miller Brown",
    station: "Station K",
    slug: "steve-miller-brown",
  },
  {
    id: 14,
    name: "Steve Miller Brown",
    station: "Station K",
    slug: "steve-miller-brown",
  },
];

const TableOne = ({ navigation }) => {
  const item = ({ item }) => (
    <View
      style={{ flexDirection: "row", padding: 6, backgroundColor: "white" }}
    >
      <View
        style={{
          width: 50,
          alignSelf: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            textAlign: "center",
            padding: 12,
            alignItems: "center",
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 1,
            borderColor: "green",
            borderRadius: 25,
            paddingHorizontal: 15,
            backgroundColor: theme.colors.secondary,
            color: "#fff",
          }}
        >
          {item.id}
        </Text>
      </View>
      <View style={{ width: 230, padding: 10 }}>
        <Text style={{ fontSize: 16, fontWeight: "bold", textAlign: "left" }}>
          {item.name}
        </Text>
        <Text style={{ fontSize: 12, fontWeight: "100", textAlign: "left" }}>
          {item.station}
        </Text>
      </View>

      <View style={{}}>
        {/* <Button icon="transfer-right" mode="outlined"></Button> */}
      </View>
    </View>
  );
  return (
    <Background>
      <Header>
        <View
          
        >
          {/* <BackButton goBack={navigation.goBack} /> */}
        </View>
        Farmers List
      </Header>

      <View
        style={{
          flex: 1,
          justifyContent: "left",
          alignItems: "left",
          marginTop: "1%",
          padding: 10,
        }}
      >
        <FlatList
          data={data}
          renderItem={item}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </Background>
  );
};
export default TableOne;
