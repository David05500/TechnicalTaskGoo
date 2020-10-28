import React from 'react';
import { View, Text, Button, ScrollView, TouchableOpacity } from 'react-native';
import _ from 'lodash';
import ListItem from '../components/ListItem';
import tailwind from 'tailwind-rn';

const DetailsScreen = ( {route, extraData, updateListItemScreenTitle }) => {
    const isActive = route.params.active;
    return (
        <ScrollView style={tailwind('p-8')}>
            {_.map(extraData, exhi => {
                // Splitting between active and non active exhibitions based on user input
                if (exhi.is_active == 1 && isActive) {
                    return (
                        <ListItem key={exhi.id} data={exhi} updateListItemScreenTitle={updateListItemScreenTitle} extraData={extraData}/>
                    )
                }else if (exhi.is_active == 0 && !isActive){
                    return (
                        <ListItem key={exhi.id} data={exhi} updateListItemScreenTitle={updateListItemScreenTitle} extraData={extraData}/>
                    )
                }
            })}
        </ScrollView>
    );
}
export default DetailsScreen;
