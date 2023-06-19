import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../screens/home";
import Settings from "../screens/setting";
import Support from "../screens/support";
import Order from "../screens/order";
import { home, menu, profile, wallet } from "../assets";
import { Image } from "react-native";
import color from "../style/color";

const Tab = createBottomTabNavigator();

const TabNav =()=>{
return(
    <Tab.Navigator>
      <Tab.Screen name="Home" 
      options={{
        tabBarIcon: ({ focused, size }) => {
            return(
                <Image source={home} style={{
                    tintColor : focused ? color.Blue : color.Black,
                    height:30,
                    width:30,
                    resizeMode:'contain'
                }}/>
                )
        }
      }}
      component={Home} />
      <Tab.Screen name="Support"
      options={{
        tabBarIcon: ({ focused, size }) => {
            return(
                <Image source={profile} style={{
                    tintColor : focused ? color.Blue : color.Black,
                    height:30,
                    width:30,
                    resizeMode:'contain'
                }}/>
                )
        }
      }}
      component={Support} />
      <Tab.Screen name="Order"
      options={{
        tabBarIcon: ({ focused, size }) => {
            return(
            <Image source={wallet} style={{
                tintColor : focused ? color.Blue : color.Black, height:30,
                width:30,
                resizeMode:'contain'
            }}/>
            )
        }
      }}
      component={Order} />
      <Tab.Screen name="Settings" 
      options={{
        tabBarIcon: ({ focused, size }) => {
            return(
                <Image source={menu} style={{
                    tintColor : focused ? color.Blue : color.Black,     height:30,
                    width:30,
                    resizeMode:'contain'
                }}/>
                )
        }
      }}
      component={Settings} />
    </Tab.Navigator>
)
}

export default TabNav;