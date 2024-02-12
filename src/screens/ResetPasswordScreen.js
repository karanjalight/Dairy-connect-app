import React, { useState } from "react";
import Background from "../components/BackgroundAuth";
import BackButton from "../components/BackButton";
import Logo from "../components/Logo";
import Header from "../components/Header";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import { emailValidator } from "../helpers/emailValidator";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  ImageBackground,
} from "react-native";
import { theme } from "../core/theme";
import Paragraph from "../components/Paragraph";
import { FontAwesome5 } from "@expo/vector-icons";
import { Text } from "react-native-paper";
import { Ionicons } from '@expo/vector-icons';

export default function ResetPasswordScreen({ navigation }) {
  const [email, setEmail] = useState({ value: "", error: "" });

  const sendResetPasswordEmail = () => {
    const emailError = emailValidator(email.value);
    if (emailError) {
      setEmail({ ...email, error: emailError });
      return;
    }
    navigation.navigate("LoginScreen");
  };

  return (
    <Background>
      {/* back button */}
      {/*  <BackButton goBack={navigation.goBack} /> */}
      <Header> Restore Password</Header>
      <Paragraph style={styles.marginTop}>
        <FontAwesome5 name="unlock" size={24} style={styles.text} />
        {/* <Text> Login</Text> */}
      </Paragraph>

      <Paragraph>
        <Text style={styles.text}>Recover Account</Text>
      </Paragraph>
      <Paragraph>
        <Text style={styles.describe}>Please Enter your phone number.</Text>
      </Paragraph>
      
      
      <View style={styles.container}>
        <View>
        <TextInput
          label="Phone Number"
          returnKeyType="done"
          value={email.value}
          onChangeText={(text) => setEmail({ value: text, error: "" })}
          error={!!email.error}
          errorText={email.error}
          autoCapitalize="none"
          autoCompleteType="number"
          textContentType="emailAddress"
          keyboardType="email-address"
          description="You will receive email with password reset link."
        />
        <View style={styles.forgotPassword}>
            <TouchableOpacity
              onPress={() => navigation.navigate("LoginScreen")}
            >
              <Text style={styles.forgot}>
                back to log in?</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Button
          mode="contained"
          onPress={sendResetPasswordEmail}
          style={{ marginTop: 16 }}
        >
          Send Instructions
        </Button>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: "100%",
    alignItems: "flex-start",
    marginBottom: 24,
    color: "green",
    marginTop: 20
  },
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  forgot: {
    fontSize: 15,
    color: theme.colors.primary,
  },
  describe: {
    fontSize: 13,
    color: "gray",
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary,
  },
  container: {
    flex: 1,
    padding: 10,
    width: "100%",
    maxWidth: 350,
    alignSelf: "center",
    // alignItems: 'center',
    justifyContent: "space-between",
  },
  marginTop: {
    marginTop: 60,
    paddingHorizontal: 40,
  },
  text: {
    color: theme.colors.primary,
    fontSize: 24,
    fontWeight: "bold",
  },
  flex: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 1,
    alignItems: "center",
    border: "green",
    backgroundColor: "white",
    // margin: 5,
    alignSelf: "center",
    alignItems: "center",
  },
});
