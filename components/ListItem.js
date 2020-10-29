import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import _ from 'lodash';
import tailwind from 'tailwind-rn';
import { useNavigation } from '@react-navigation/native';

const ListItem = ({ updateExhibitionScreenTitle, ...props}) => {
    const {url, title, text, date_start, date_end, is_active, id} = props.data;
    const navigation = useNavigation(); 
    const truncate = (str, value) => str.length > 10 ? str.substring(0, `${value}`) + "..." : str;

    return (
        <TouchableOpacity style={tailwind('mb-8 bg-gray-200 border border-gray-300 text-gray-800 rounded p-3')}
            onPress={() => 
                (updateExhibitionScreenTitle(title),
                navigation.navigate(
                    'Exhibition', 
                    {
                        itemId: id,
                        active: is_active === '0' ? false : true,
                        otherParam: 'anything you want here',
                    }
                )
            )}
        >
            <Text style={tailwind('text-xl mt-2 text-gray-800')}>{title}</Text>
            <View style={tailwind('w-full h-px mt-4 bg-gray-800')}></View>
            <Text style={tailwind('flex my-4 text-left leading-5 text-gray-800')}>{truncate(text, 200)}</Text>
            <View style={tailwind('flex flex-row mb-1')}>
                {is_active === '0' ? <Text style={tailwind('font-bold mr-4 text-gray-800')}>Started:</Text> : <Text style={tailwind('font-bold mr-4')}>Start Date:</Text> }
                <Text>{date_start}</Text>
            </View>
            {is_active === '0' 
            ? 
                <View style={tailwind('flex flex-row')}>
                    <Text style={tailwind('font-bold mr-6 text-gray-800')}>Ended:</Text> 
                    <Text>{date_end}</Text>
                </View> 
            : null}
        </TouchableOpacity>
    )
}
export default ListItem;