import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from "@react-navigation/native";


const Home = () => {

    const navigation = useNavigation();

    return (
        <View>
            <Text>
                Home
            </Text>
            <Button
                title="화면이동"
                color="red"
                onPress={() => navigation.navigate("HomeDetail")}
            />

        </View>
    );
};

export default Home;