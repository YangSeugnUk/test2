import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from "@react-navigation/native";

const Profile = () => {

    const navigation = useNavigation();

    return (
        <View>
            <Text>
                Profile
            </Text>
            <Button
                title="화면이동"
                color="red"
                onPress={() => navigation.navigate("ProfileDetail") }
            />


        </View>
    );
};

export default Profile;