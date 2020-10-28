import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import _ from 'lodash';
import tailwind from 'tailwind-rn';
import { useNavigation } from '@react-navigation/native';

const ListItem = ({ updateListItemScreenTitle, ...props}) => {
    const {url, title, text, date_start, date_end, is_active, id} = props.data;
    const navigation = useNavigation(); 
    const truncate = (str, value) => {
        return str.length > 10 ? str.substring(0, `${value}`) + "..." : str;
    };

    return (
        <TouchableOpacity style={tailwind('mb-8')}
            onPress={() => 
                (updateListItemScreenTitle(title),
                navigation.navigate(
                'ListItemScreen', 
                {
                    itemId: id,
                    active: is_active === '0' ? false : true,
                    otherParam: 'anything you want here',
                })
            )}
        >
            <Text>{title}</Text>
            <Text style={tailwind('flex')}><Text style={tailwind('font-bold')}>Description:</Text> {truncate(text, 150)}</Text>
            <Text style={tailwind('flex')}><Text style={tailwind('font-bold')}>Start Date:</Text> {date_start}</Text>
            {is_active === '0' ? <Text style={tailwind('flex')}><Text style={tailwind('font-bold')}>End Date:</Text> {date_end}</Text> : null}
            {/* <Text style={tailwind('flex')}><Text style={tailwind('font-bold')}>Active:</Text> {is_active}</Text> */}
        </TouchableOpacity>
    )
}
export default ListItem;