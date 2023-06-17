import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "../screens/login";
import OtpScreen from "../screens/otp";
import Home from "../screens/home";

const Stack = createNativeStackNavigator();

const StackNav =()=>{
    return(
        <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Otp" component={OtpScreen} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    )
}

export default StackNav;