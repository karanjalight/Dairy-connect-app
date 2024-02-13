import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/BackgroundDash'
import Logo from '../components/Logo'
import Header from '../components/ProductionHeader'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import Paragraph from '../components/Paragraph'


export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })

  const onLoginPressed = () => {
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }
    navigation.reset({
      index: 0,
      routes: [{ name: 'Dashboard' }],
    })
  }

  return (
    <Background>
      
      
      {/* <Header></Header> */}
      {/* <Logo /> */}
      

      <Header>
      <BackButton goBack={navigation.goBack} />
        Create Production</Header>
      {/* <Paragraph>Create Today's Production</Paragraph> */}

      <View style={styles.container}>
      <TextInput
        label="Farmer ID"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />

      <TextInput
        label="Name"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        
      />
      <TextInput
        label="Phone Number"
        returnKeyType="done"
        
      />
      <TextInput
        label="Station"
        returnKeyType="done"
        
      />
      <TextInput
        label="Amount Produced"
        returnKeyType="done"
        
      />
      <TextInput
        label="Collection Time"
        returnKeyType="done"
        // value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
       
      />
      
      {/* <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ResetPasswordScreen')}
        >
          <Text style={styles.forgot}>Forgot your password?</Text>
        </TouchableOpacity>
      </View> */}
      <Button mode="contained" onPress={onLoginPressed}>
        Create Production
      </Button>

      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Dashboard')}
        >
          <Text style={styles.forgot}>Go back Home</Text>
        </TouchableOpacity>
      </View>
      </View>
      {/* <View style={styles.row}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View> */}
    </Background>
  )
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-start',
    marginBottom: 24,
    textAlign: 'left'

  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
    textAlign: 'left'

  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },

  container: {
    // flex: 1,
    padding: 10,
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
  forgot: {
    textAlign: 'left',
    color: 'green'
  }
})
