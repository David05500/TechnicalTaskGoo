import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import tailwind from 'tailwind-rn';

const HomeScreen = ({navigation, updateExhibitionsScreenTitle, ...props}) => {
    
    return (
        <View style={tailwind(' bg-gray-200  pb-16 pt-32 h-full flex flex-col items-center justify-between')}>
            <Text style={tailwind('w-3/4 text-center text-2xl text-gray-900')}>
                Welcome to Cooperhewitt Exhibitions Guide
            </Text>
            <View style={tailwind('flex flex-col pb-16  justify-center items-center w-full px-8 ')}>
                <Text style={tailwind('text-gray-600 font-semibold text-lg mb-8')}>In this App you can</Text>
                <TouchableOpacity
                    style={tailwind('border border-gray-300 p-4 rounded bg-gray-800 w-full text-center')}
                    onPress={() => (updateExhibitionsScreenTitle('Future Exhibitions'), navigation.navigate('Exhibitions', {active: true}))}
                ><Text style={tailwind('w-full text-center text-gray-100 text-lg')}>Find Future Exhibitions</Text></TouchableOpacity>
                <Text style={tailwind('text-gray-600 font-semibold  my-8')}>OR</Text>
                <TouchableOpacity
                    style={tailwind('border border-gray-300 p-4 rounded bg-gray-800 w-full text-center')}
                    onPress={() => (updateExhibitionsScreenTitle('Past Exhibitions'), navigation.navigate('Exhibitions', {active: false}))}
                ><Text style={tailwind('w-full text-center text-gray-100 text-lg')}>Explore Past Exhibitions</Text></TouchableOpacity>
            </View>
            <Text style={tailwind('w-3/4 text-center text-xs text-gray-600')}>
                Developed by David Sarvasidze as part of the interview process for Goo Apps
            </Text>
        </View>
    );
}
export default HomeScreen;