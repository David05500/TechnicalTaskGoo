import React from 'react';
import { View, Text, Linking, StyleSheet } from 'react-native';
import _ from 'lodash';
import tailwind from 'tailwind-rn';

const FutureExhibition = (props) => {
    const {url, text, date_start} = props.data;
    return (
        <View style={tailwind('w-full')}>
            <Text style={[styles.text]}>{text}</Text>
            <View style={tailwind('flex flex-row mb-1')}>
                <Text style={tailwind('font-bold mr-4')}>Start Date:</Text> 
                <Text>{date_start}</Text>
            </View>
            <View style={tailwind('w-full h-px mt-4 bg-gray-800')}></View>

            <Text style={tailwind('text-blue-600 mb-8 mt-4 w-full text-center')}
                onPress={() => Linking.openURL(`${url}`)}
            >See full article</Text>
        </View>
    )
};
// Due to the limitation of tailwind for react-native I had to use StyleSheets in some components
const styles = StyleSheet.create({
    text: {
        textAlign: 'justify',
        letterSpacing: 0.6,
        lineHeight: 19
    }
});
export default FutureExhibition;