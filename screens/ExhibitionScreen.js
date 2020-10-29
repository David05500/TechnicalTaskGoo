import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import tailwind from 'tailwind-rn';
import _ from 'lodash';
import PastExhibition from '../components/PastExhibition';
import FutureExhibition from '../components/FutureExhibition';
import LoadingIndicator from '../components/LoadingIndicator';

const ExhibitionScreen = ({route, navigation, extraData, ...props}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState({});
    const [objectsData, setObjetsData] = useState({});

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;
        setData(_.find(extraData, { 'id': route.params.itemId }));
        if(route.params.active){
            setIsLoading(false);
        }else{
            const url = `https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.exhibitions.getObjects&access_token=93f17b32448732710beba88b1abc2e4d&exhibition_id=${route.params.itemId}&page=1&per_page=100`
            fetch(url, {signal: signal})
            .then((res) => res.json())
            .then((objData) => {
                setObjetsData(objData);
                setIsLoading(false);
            })
        }
        // Passing a cleanup function to avoid a memory leak 
        return function cleanup() {
            abortController.abort()
        }
    }, [route.params.itemId])

    if(isLoading){
        return <LoadingIndicator />
    }else{
        return (
            <ScrollView style={tailwind('h-full bg-gray-100 px-8')}>
                <View style={tailwind('pt-12 items-center')}>
                    {route.params.active 
                        ? <FutureExhibition data={data} /> 
                        : <PastExhibition objectsData={objectsData} data={data}/>
                    }
                </View>
            </ScrollView>
        );
    }
}
export default ExhibitionScreen;