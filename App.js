import React from "react";
import {View,Text} from 'react-native';
import Login from "./src/screens/login";
import OtpScreen from "./src/screens/otp";

const App =()=>{
  return(
    <View>
      <OtpScreen />
      {/* <Login /> */}
    </View>
  )
}

export default App;