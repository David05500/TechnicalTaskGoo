import React from 'react';
import { View, Text, Image } from 'react-native';
import _ from 'lodash';
import tailwind from 'tailwind-rn';

const PastExhibition = (props) => {
    const {url, title, text, date_start, date_end, is_active, id} = props.data;
    console.log(props.objectsData.objects);
    return (
        <View>
            <Text>title: {title}</Text>
            <Text>date_start: {date_start}</Text>
            <Text>date_start: {text}</Text>
            <Text>date_start: {id}</Text>

            <View>
                {_.map(props.objectsData.objects, obj => {
                    return(
                        <View style={tailwind('py-8 flex justify-center items-center border border-gray-200 mb-8')}>
                            <Text style={tailwind('font-bold')}>{obj.title}</Text>
                            
                            {_.map(obj.images, im => {
                                return (
                                    <Image
                                        key={Math.random(10000)}
                                        style={{ width: 300, height: 200, marginBottom: 10 }}
                                        source={{uri: im["n"] === undefined ? `${im["z"].url}` : im["n"].url}}
                                    />
                                )
                            })}

                            <Text>{obj.description}</Text>

                   
                        </View>
                    )
                })}
            </View>
        </View>
    )
};
export default PastExhibition;