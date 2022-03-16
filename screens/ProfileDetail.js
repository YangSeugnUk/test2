import React from 'react';
import {View, Text} from 'react-native';
import {useRoute} from '@react-navigation/native'

const ProfileDetail = () => {

    const route = useRoute();

    return (
        <View>
            <Text>
                {route.params.userId}
            </Text>

        </View>
    );
};

export default ProfileDetail;