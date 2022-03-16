import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {useRoute} from "@react-navigation/native";
import axios from "axios";

const HomeDetail = () => {
    const route = useRoute();
    const [movie, setMovie] = useState({});
    const [genres, setGenres] = useState([]);

    const getMovieDetail = async () => {
        try {
            const {data, status} = await axios.get(`https://api.themoviedb.org/3/movie/${route.params.movieId}?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US`);

            if ( status === 200 ){
                setMovie(data);
                setGenres(data.genres);
            }

        }catch (err){
            console.log(err.response.data.message);
        }


    }
    useEffect(()=> {
        getMovieDetail();

    },[])

    return (
        <ScrollView>
            <View style={{margin:15}}>
                <Text style={{fontSize:18, fontWeight:"800"}}>{movie.original_title}</Text>
                <View style={{flexDirection:"row", marginVertical:10}}>
                    <Text>장르 : </Text>
                    {movie.genres && movie.genres.map(data =>(
                        <View key={data.id} >
                            <Text>{data.name}, </Text>
                        </View>
                    ))}
                </View>

                <Text>줄거리 : {movie.overview.slice(0, 150)}...</Text>
                <Text style={{marginVertical:10}}>상영시간 : {movie.runtime}분</Text>
                <Text >상영날짜 : {movie.release_date}</Text>
                <View style={{flexDirection:"row", marginVertical:10}}>
                    <Text>지원언어 : </Text>
                    {movie.spoken_languages && movie.spoken_languages.map(data =>(
                        <View key={data.iso_639_1} >
                            <Text>{data.name}, </Text>
                        </View>
                    ))}
                </View>
                <Image
                    style={{width:350, height:350}}
                    source={{
                        uri:`https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    }}
                />

            </View>

        </ScrollView>
    );
};

export default HomeDetail;