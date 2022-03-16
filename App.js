import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Trading, Posts} from "./screens";
import HomeStack from "./stacks/HomeStack";
import ProfileStack from "./stacks/ProfileStack";

const Tab = createBottomTabNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name={"Home"}
                    component={HomeStack}
                    options={{
                        headerShown: false
                    }}
                />
                <Tab.Screen name={"Trading"} component={Trading}/>
                <Tab.Screen name={"Posts"} component={Posts}/>
                <Tab.Screen
                    name={"Profile"}
                    component={ProfileStack}
                    options={{
                        headerShown : false
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default App;