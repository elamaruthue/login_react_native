import React from "react";
import {View,Text,Image, TextInput, TouchableOpacity} from 'react-native';
import { loginBg } from "../assets";
const Login =()=>{
    return(
        <View>
            <View style={{
                justifyContent:'center',
                alignItems:'center',
                marginVertical:50
            }}>
                 <Image source={loginBg} 
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
                fontSize:30,
                fontWeight:'900',
                color:'#000'
            }}>
                Wellcome to Login!
            </Text>
           </View>
           <View style={{
            borderColor:'#000',
            borderWidth:1,
            borderRadius:20,
            marginHorizontal:20,
            marginTop:30,
            marginBottom:10
           }}>
            <TextInput 
              placeholder="Mobile"
              style={{
                paddingHorizontal:20
              }}
              keyboardType='number-pad'
            />
           </View>
           <View style={{
            backgroundColor:'blue',
            width:150,
            alignSelf:'center',
            borderRadius:30,
            paddingVertical:10,

           }}>
             <TouchableOpacity>
                <Text style={{
                    color: '#fff',
                    textAlign:'center',
                    fontSize:20
                }}>
                    Login
                </Text>
             </TouchableOpacity>
           </View>
        </View>
    )
}

export default Login;