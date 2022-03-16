import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Profile, ProfileDetail} from "../screens"

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={"Profile"} component={Profile}/>
            <Stack.Screen name={"ProfileDetail"} component={ProfileDetail}/>
        </Stack.Navigator>

    );
};

export default ProfileStack;