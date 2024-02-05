import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-native-paper'
import { theme } from './src/core/theme'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
// import {
//   StartScreen
  
// } from './src/screens.StartScreen'

// import StartScreen from './src/screens/StartScreen';
// import LoginScreen from './src/screens/LoginScreen'

import Production from './src/screens/Production'
import Routes from './src/screens/Routes';
import Farmers from './src/screens/Farmers';
import Stations from './src/screens/Stations';


import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
  
  
} from './src/screens'


const Stack = createStackNavigator()


export default function App() {
  return (

    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Production" component={Production} />
          <Stack.Screen name="Routes" component={Routes} />
          <Stack.Screen name="Farmers" component={Farmers} />
          <Stack.Screen name="Stations" component={Stations} />
          
          
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

   
  );
}


