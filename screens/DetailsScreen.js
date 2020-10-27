import React from 'react';
import { View, Text, Button, ScrollView, TouchableOpacity } from 'react-native';
import _ from 'lodash';
import ListItem from '../components/ListItem';
import tailwind from 'tailwind-rn';

const DetailsScreen = ( {navigation, extraData }) => {
    return (
        <ScrollView style={tailwind('p-8')}>
            {_.map(extraData, exhi => {
                if (exhi.is_active != 0) return (
                    <ListItem key={exhi.id} data={exhi} />
                )
            })}
        </ScrollView>
    );
}
export default DetailsScreen;
