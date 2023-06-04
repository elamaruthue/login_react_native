import React, { useState } from "react";
import {View,Text,Image, TextInput, TouchableOpacity} from 'react-native';
import { loginBg } from "../assets";
import color from "../style/color";
const Login =()=>{

const [mobileNo,setMobileNo] = useState('')

//err Handle
const [mobileNoErr,setMobileNoErr] = useState(false)

const onChangeHandle =(e)=>{
    setMobileNo(e)
    if(e.length <10){
        setMobileNoErr(true)
    }
    else{
        setMobileNoErr(false)
    }
}

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
              maxLength={10}
              keyboardType='number-pad'
              onChangeText={(e)=> onChangeHandle(e)}
            />
           </View>
           {mobileNoErr &&
           <View>
            <Text style={{
                textAlign:'center',
                fontSize:15,
                color:color.Error,
                marginVertical:10
            }}>
                Please Enter Valid Number!
            </Text>
           </View>
}

           <View style={{
            backgroundColor:mobileNoErr ?color.LightGrey: color.red,
            width:150,
            alignSelf:'center',
            borderRadius:30,
            paddingVertical:10,

           }}>
             <TouchableOpacity
             disabled={!mobileNoErr ?  false : true}
             >
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