import React from 'react';
import { SafeAreaView, View, Text, Button } from 'react-native';
import tailwind from 'tailwind-rn';

const HomeScreen = ({navigation, ...props}) => {
    
    return (
        <SafeAreaView style={tailwind('h-full bg-gray-100')}>
            <View style={tailwind('pt-12 items-center')}>
                <View style={tailwind('bg-blue-200 px-3 py-1 rounded-full')}>
                    <Text style={tailwind('text-blue-800 font-semibold')}>
                        Hello David {props.extraData}
                    </Text>
                    <Button
                        title="Go to Details"
                        onPress={() => navigation.navigate('Details')}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}
export default HomeScreen;