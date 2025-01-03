import { Pressable, Text, Image, View, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { Horizontal } from './horizontal';
import {API_URL} from '../../../config'


export interface RestaurantsProps {
    id: string;
    name: string;
    image: string;
}

export function Restaurants() {

    const [restaurants, setRestaurants] = useState<RestaurantsProps[]>([])

    useEffect(() => {
        async function getRestaurants() {
            const response = await fetch(`${API_URL}/restaurants`)
            console.log(response)
            const data = await response.json()
            setRestaurants(data);
        }

        getRestaurants();
    }, [])


    return (
        <FlatList
        data={restaurants}
        renderItem={({ item }) =>
            <Horizontal restaurant ={item}/>}
        horizontal={true}
        contentContainerStyle={{gap: 14, paddingLeft: 16, paddingRight: 16 }}
        showsHorizontalScrollIndicator= {false}
    />
    );
}