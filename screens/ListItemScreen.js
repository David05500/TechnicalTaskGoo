import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, Button } from 'react-native';
import tailwind from 'tailwind-rn';
import _ from 'lodash';

const ListItemScreen = ({route, navigation, ...props}) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const url = `https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.exhibitions.getInfo&access_token=53d89981cf43501a2ae08a619b1de685&exhibition_id=${route.params.itemId}`;
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            setData(data);
            setIsLoading(false);
        })
    }, [route.params.itemId])


    return (
        <SafeAreaView style={tailwind('h-full bg-gray-100')}>
            <View style={tailwind('pt-12 items-center')}>
                <Text>Hello</Text>
            </View>
        </SafeAreaView>
    );
}
export default ListItemScreen;