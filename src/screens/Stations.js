import { FlatList, Text, View } from "react-native";
import React from "react";
import Background from "../components/BackgroundList";
import BackButton from "../components/BackButton";
import Header from "../components/Header";

const data = [
  { id: 1, name: "John", email: "View" },
  { id: 2, name: "Bob", email: "View" },
  { id: 3, name: "Mei", email: "View" },
  { id: 4, name: "Steve", email: "View" },
  { id: 5, name: "John", email: "View" },
  { id: 6, name: "Bob", email: "View" },
  { id: 7, name: "Mei", email: "View" },
  { id: 8, name: "Steve", email: "View" },
];


const TableOne = ({ navigation }) => {
  const item = ({ item }) => (
    <View
      style={{ flexDirection: "row", padding: 10, backgroundColor: "white" }}
    >
      <View style={{ width: 50, backgroundColor: "lightyellow" }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            textAlign: "left",
            padding: 10,
          }}
        >
          {item.id}
        </Text>
      </View>
      <View style={{ width: 200, padding: 10 }}>
        <Text style={{ fontSize: 16, fontWeight: "bold", textAlign: "left" }}>
          {item.name}
        </Text>
      </View>
      <View style={{ width: 100, backgroundColor: "lavender" }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            textAlign: "center",
            padding: 10,
          }}
        >
          {item.email}
        </Text>
      </View>
    </View>
  );
  return (
    <Background>
      <Header></Header>
      <Header><BackButton goBack={navigation.goBack} /> Stations List</Header>
      

      <View
        style={{
          flex: 1,
          justifyContent: "left",
          alignItems: "left",
          marginTop: "10%",
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
