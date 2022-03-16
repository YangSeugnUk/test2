import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Home, HomeDetail} from "../screens";


const Stack = createNativeStackNavigator();


const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={"Home"} component={Home}/>
            <Stack.Screen name={"HomeDetail"} component={HomeDetail}/>
        </Stack.Navigator>
    );
};

export default HomeStack;