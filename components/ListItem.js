import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import _ from 'lodash';
import tailwind from 'tailwind-rn';
import { useNavigation } from '@react-navigation/native';

const ListItem = ({ ...props}) => {
    const {url, title, text, date_start, date_end, is_active, id} = props.data
    const navigation = useNavigation(); 
    const truncate = (str, value) => {
        return str.length > 10 ? str.substring(0, `${value}`) + "..." : str;
    };

    return (
        <TouchableOpacity style={tailwind('mb-8')}
            onPress={() => navigation.navigate(
                'ListItemScreen', 
                {
                    itemId: id,
                    otherParam: 'anything you want here',
                }
            )}
            // onPress={() => {
            //     navigation.navigate('ListItemScreen', {
            //         itemId: id,
            //         otherParam: 'anything you want here',
            //     });
            // }}
        >
            <Text>{title}</Text>
            <Text style={tailwind('flex')}><Text style={tailwind('font-bold')}>Description:</Text> {truncate(text, 150)}</Text>
            <Text style={tailwind('flex')}><Text style={tailwind('font-bold')}>Start Date:</Text> {date_start}</Text>
        </TouchableOpacity>
    )
}
export default ListItem;