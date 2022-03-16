import React, {useEffect, useState} from 'react';
import {View, Text, Button, ScrollView, Image, StyleSheet} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import axios from "axios";


const Home = () => {
    const navigation = useNavigation();
    const [movies, setMovies] = useState([]);

    const getMovie = async () => {

        try {
            const {data, status} = await axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US&page=1");

            if(status === 200){
                setMovies(data.results);
            }

        }catch (err){
            err.response.data(err);
        }

    }

    useEffect(()=>{
        getMovie();
    },[])




    return (
        <ScrollView>
            {movies && movies.map(data =>(
                <View
                    key={data.id}
                    style={{
                        flex:1,
                        justifyContent:"center",
                        alignItems:"center",
                        margin:20,
                    }}
                >
                    <Text>{data.title}</Text>
                    <Text>{data.release_date}</Text>
                    <Text>{data.overview}</Text>
                    <Image
                        source={{
                            uri: `https://image.tmdb.org/t/p/w500${data.poster_path}`
                        }}
                        style={{width:350, height:350, marginVertical:15}}
                    />
                    <Button
                        title="자세히보기"
                        style={{
                            borderBottomColor: '#737373',
                            width:"150px",
                            // borderBottomWidth: StyleSheet.hairlineWidth,
                            marginTop:15,
                        }}
                        onPress={()=>navigation.push("HomeDetail",{
                            movieId : data.id,
                            title : data.title,
                        })}

                    />



                </View>
            ))}
        </ScrollView>

    );
};

export default Home;