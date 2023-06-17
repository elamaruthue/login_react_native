import React from "react";
import {View,Text} from 'react-native';
import Login from "./src/screens/login";
import OtpScreen from "./src/screens/otp";
import { NavigationContainer } from '@react-navigation/native';
import StackNav from "./src/navigation/stack";

const App =()=>{
  return(
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  )
}

export default App;