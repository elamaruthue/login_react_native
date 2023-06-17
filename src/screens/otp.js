import React, { useState } from "react";
import {View,Text,Image, TouchableOpacity,StyleSheet} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { otpBg } from "../assets";
import color from "../style/color";

const OtpScreen =({navigation})=>{
    const [otp,setOtp] = useState('');

    //err handle
    const [otpErr,setOtpErr] = useState(false);

    const onCodeChanged =(e)=>{
        setOtp(e)
        if (e.length < 4) {
            setOtpErr(true) 
        }
        else{
            setOtpErr(false)   
        }
    }

    const verifyOtp =()=>{
        navigation.navigate('Home')
    }
    return(
        <View>
            <View style={{
                    justifyContent:'center',
                    alignItems:'center',
                    marginVertical:50
                }}>
                <Image 
                source={otpBg}
                 style={{
                    resizeMode:'contain',
                    width:250,
                    height:250
                 }}
                />
            </View>
            <View>
                <Text style={{
                    textAlign:'center',
                    fontSize:22,
                    fontWeight:'900',
                    color:'#000'
                }}>
                    Please Verify your Otp!
                </Text>
            </View>
            <View style={{
                alignItems:'center',
            }}>
         <OTPInputView
    style={{width: '80%', height: 100}}
    pinCount={4}
    // code={otp}
    onCodeChanged = {code => { onCodeChanged(code)}}
    autoFocusOnLoad
    codeInputFieldStyle={styles.underlineStyleBase}
    codeInputHighlightStyle={styles.underlineStyleHighLighted}
    onCodeFilled = {(code => {
        console.log(`Code is ${code}, you are good to go!`)
    })}
/>
</View>
{otpErr &&
<View>
    <Text style={{
        color:color.Error,
        textAlign:'center',
        marginBottom:15
    }}>
        Please Enter valid Otp!
    </Text>
</View>
}
<View style={{
    alignItems:'center',
    backgroundColor:!otpErr ? color.red : color.LightGrey,
    width:200,
    paddingVertical:10,
    borderRadius:10,
    alignSelf:'center'
}}>
    <TouchableOpacity
    disabled={otpErr}
    onPress={verifyOtp}
    >
        <Text style={{
            fontSize:20,
            color:color.White,
            fontWeight:'700'
        }}>
            Verify Otp
        </Text>
    </TouchableOpacity>
</View>
        </View>
    )
}

const styles = StyleSheet.create({
    borderStyleBase: {
      width: 30,
      height: 45
    },
  
    borderStyleHighLighted: {
      borderColor: "#03DAC6",
    },
  
    underlineStyleBase: {
      width: 30,
      height: 45,
      borderWidth: 0,
      borderBottomWidth: 1,
      borderColor:'#000',
      color:'#000',
      fontSize:18
    },
  
    underlineStyleHighLighted: {
      borderColor: "#03DAC6",
    },
  });

export default OtpScreen;