import React from 'react';
import { SafeAreaView, View, Text, Button } from 'react-native';
import tailwind from 'tailwind-rn';

const HomeScreen = ({navigation, updateHeaderTitle, ...props}) => {
    
    return (
        <SafeAreaView style={tailwind('h-full bg-gray-100')}>
            <View style={tailwind('pt-12 items-center')}>
                <View style={tailwind('px-3 py-1 rounded-full')}>
                    <Text style={tailwind('text-blue-800 font-semibold')}>
                        In this App you can 
                    </Text>
                    <Button
                        title="Find Future Exhibitions"
                        onPress={() => (updateHeaderTitle('Future Exhibitions'), navigation.navigate('Details', {active: true}))}
                    />
                    <Text>OR</Text>
                    <Button
                        title="Explore Past Exhibitions"
                        onPress={() => (updateHeaderTitle('Past Exhibitions'), navigation.navigate('Details', {active: false}))}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}
export default HomeScreen;