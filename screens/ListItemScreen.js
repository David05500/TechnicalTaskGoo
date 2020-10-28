import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, Button, ScrollView } from 'react-native';
import tailwind from 'tailwind-rn';
import _ from 'lodash';
import PastExhibition from '../components/PastExhibition';

const ListItemScreen = ({route, navigation, extraData, ...props}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);
    const [objectsData, setObjetsData] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        setData(_.find(extraData, { 'id': route.params.itemId }));
        if(route.params.active){
            setIsLoading(false);
        }else{
            const url = `https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.exhibitions.getObjects&access_token=93f17b32448732710beba88b1abc2e4d&exhibition_id=${route.params.itemId}&page=1&per_page=100`
            fetch(url)
            .then((res) => res.json())
            .then((objData) => {
                setObjetsData(objData);
                setIsLoading(false);
            })
        }

    }, [route.params.itemId])

    if(isLoading){
        return (
          <View>
            <Text>
              LOADING
            </Text>
          </View>
        )
    }else{
        return (
            <ScrollView style={tailwind('h-full bg-gray-100 p-8')}>
                <View style={tailwind('pt-12 items-center')}>
                    {route.params.active 
                    ? (
                        <View>
                            <Text>{data.title}</Text>
                            <Text>{data.url}</Text>
                            <Text>{data.text}</Text>
                            <Text>{data.date_start}</Text>
                        </View>  
                    )
                    : <PastExhibition objectsData={objectsData} data={data}/>
                    }
                </View>
            </ScrollView>
        );
    }
}
export default ListItemScreen;