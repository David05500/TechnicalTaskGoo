import React from 'react';
import { View, Text, Linking, StyleSheet, TouchableOpacity } from 'react-native';
import _ from 'lodash';
import tailwind from 'tailwind-rn';

const FutureExhibition = (props) => {
    const {url, text, date_start} = props.data;
    return (
        <View style={tailwind('w-full')}>
            <Text style={[styles.text]}>{text}</Text>
            <View style={tailwind('flex flex-row mb-1 mt-2')}>
                <Text style={tailwind('font-bold mr-4')}>Start Date:</Text> 
                <Text> {date_start}</Text>
            </View>
            <TouchableOpacity
                onPress={() => Linking.openURL(`${url}`)}
                style={tailwind('border border-gray-300 p-3 mt-4 mb-6 rounded-md bg-gray-800')}
            >
                <Text style={tailwind('w-full text-center text-gray-100 text-xs')}>Find full article here.</Text>
            </TouchableOpacity>
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