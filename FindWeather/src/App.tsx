import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'





// Navigation
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

//Screens
import Login from './Registeration/Login'
import Signup from './Registeration/Signup'


// This is not must do it is just for type safty shit
export type RootStackParamList = {
  Login: undefined;
  Signup:undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();






const App = () => {
  return (
   <NavigationContainer>
      <StatusBar hidden={true}
      showHideTransition={'slide'} 
      translucent={true}
     />
        <Stack.Navigator initialRouteName='Login'
        screenOptions={{
          headerShown:false
        }}>
            <Stack.Screen 
            name='Login'
            component={Login} />
            <Stack.Screen 
            name='Signup'
            component={Signup} />
        </Stack.Navigator>

   </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})