import React, { useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  ImageBackground,
} from "react-native";
import { Text } from "react-native-paper";
import Background from "../components/BackgroundAuth";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/AuthButton";
import TextInput from "../components/TextInput";
import BackButton from "../components/BackButton";
import { theme } from "../core/theme";
import { emailValidator } from "../helpers/emailValidator";
import { passwordValidator } from "../helpers/passwordValidator";
import Paragraph from "../components/Paragraph";
import { FontAwesome5 } from "@expo/vector-icons";

const image = { uri: "https://legacy.reactjs.org/logo-og.png" };

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });

  const onLoginPressed = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }
    navigation.reset({
      index: 0,
      routes: [{ name: "Dashboard" }],
    });
  };

  return (
    <Background>
      {/* <Paragraph>Welcome Back</Paragraph> */}
      <Header> Log in</Header>

      <Paragraph style={styles.marginTop}>
        <FontAwesome5 name="unlock" size={24} style={styles.text} />
        {/* <Text> Login</Text> */}
      </Paragraph>

      <Paragraph>
        <Text style={styles.text}> User Details</Text>
        
      </Paragraph>
      <Paragraph>
      <Text style={styles.describe}>Please Enter your credentials</Text>
      </Paragraph>
      

      <View style={styles.container}>
        <View>
          <TextInput
            label="Phone Number"
            returnKeyType="next"
            value={email.value}
            onChangeText={(text) => setEmail({ value: text, error: "" })}
            // error={!!email.error}
            // errorText={email.error}
            autoCapitalize="none"
            autoCompleteType="email"
            textContentType="emailAddress"
            keyboardType="email-address"
          />
          <TextInput
            label="Password"
            returnKeyType="done"
            value={password.value}
            onChangeText={(text) => setPassword({ value: text, error: "" })}
            error={!!password.error}
            errorText={password.error}
            secureTextEntry
          />
          <View style={styles.forgotPassword}>
            <TouchableOpacity
              onPress={() => navigation.navigate("ResetPasswordScreen")}
            >
              <Text style={styles.forgot}>Forgot your password?</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.flex}>
        <Button style={styles.button}
          mode="outlined"
          onPress={() => navigation.navigate("StartScreen")}
        >
         back
        </Button>
         
          <Button mode="contained" onPress={onLoginPressed}>
            Login
          </Button>
        </View>

        {/* <View style={styles.row}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View> */}
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
    color: 'gray',
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
