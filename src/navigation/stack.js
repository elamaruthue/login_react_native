import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "../screens/login";
import OtpScreen from "../screens/otp";
import Home from "../screens/home";
import TabNav from "./tab";

const Stack = createNativeStackNavigator();

const StackNav =()=>{
    return(
        <Stack.Navigator screenOptions={{
            headerShown:false
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Otp" component={OtpScreen} />
        <Stack.Screen name="Main" component={TabNav} />
      </Stack.Navigator>
    )
}

export default StackNav;