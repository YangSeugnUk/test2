import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import axios from "axios";
const Posts = () => {
    const [posts, setPosts] = useState([])

    const getPost = async ()=>{
        const {data, status} = await axios.get("https://jsonplaceholder.typicode.com/posts");
        console.log(data.length);

        if (status === 200){
            setPosts(data);
        }

    }

    useEffect(()=>{
        getPost();
    },[])

    return (
        <ScrollView>

            {posts.map(data => (
                <View key={data.id}>
                    <Text>{data.title}</Text>
                </View>
            ))}

        </ScrollView>
    );
};

export default Posts;