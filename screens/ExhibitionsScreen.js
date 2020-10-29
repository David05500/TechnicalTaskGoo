import React from 'react';
import { ScrollView } from 'react-native';
import _ from 'lodash';
import ListItem from '../components/ListItem';
import tailwind from 'tailwind-rn';

const ExhibitionsScreen = ( {route, extraData, updateExhibitionScreenTitle }) => {
    const isActiveScreen = route.params.active;
    const sortedArray = isActiveScreen ? _.orderBy(extraData, ['date_start'], ['asc']) : extraData;

    return (
        <ScrollView style={tailwind('h-full bg-gray-100 p-8')}>
            {_.map(sortedArray, exhi => {
                
                // Splitting between active and non active exhibitions based on user input
                if (exhi.is_active == 1 && isActiveScreen) {
                    return (
                        <ListItem key={exhi.id} data={exhi} updateExhibitionScreenTitle={updateExhibitionScreenTitle} extraData={sortedArray}/>
                    )
                }else if (exhi.is_active == 0 && !isActiveScreen){
                    return (
                        <ListItem key={exhi.id} data={exhi} updateExhibitionScreenTitle={updateExhibitionScreenTitle} extraData={sortedArray}/>
                    )
                }
            })}
        </ScrollView>
    );
}
export default ExhibitionsScreen;
