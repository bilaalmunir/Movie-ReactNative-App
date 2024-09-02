import React, { FC } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "@/app/Home"
import Explore from "@/app/Explore";

const Tab = createBottomTabNavigator();

const RootLayout: FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{headerShown:false}} />
      <Tab.Screen name="Explore" component={Explore} />
    </Tab.Navigator>
  );
};

export default RootLayout;