import React from 'react';
import { View, Text, Image, Linking, StyleSheet } from 'react-native';
import _ from 'lodash';
import tailwind from 'tailwind-rn';

const PastExhibition = (props) => {
    const {url, text, date_start, date_end } = props.data;
    return (
        <View style={tailwind('w-full')}>
            <Text style={[styles.text]}>{text}</Text>
            <View style={tailwind('mt-4')}>
                <View style={tailwind('flex flex-row')}>
                    <Text style={tailwind('font-bold mr-4')}>Started:</Text>
                    <Text>{date_start}</Text>
                </View>
                <View style={tailwind('flex flex-row mt-2')}>
                    <Text style={tailwind('font-bold mr-6')}>Ended:</Text>
                    <Text>{date_end}</Text>
                </View>
                <Text style={tailwind('text-blue-600 mt-4 ')}
                    onPress={() => Linking.openURL(`${url}`)}>
                    Find full article here.
                </Text>
            </View>

            <View style={tailwind('w-full h-px mt-4 bg-gray-800')}></View>
            {!_.isEmpty(props.objectsData.objects) ? <Text style={tailwind('text-xl font-bold w-full text-center mt-16 mb-16')}>Exhibition Objects</Text> : null }
            <View>
                {_.map(props.objectsData.objects, obj => {
                    // Making sure I am not using objects that have copyright
                    if(obj.has_no_known_copyright != 1){
                        return(
                            <View key={Math.random(10000)} style={tailwind('pb-4 flex justify-center items-center mb-8')}>
                                <Text style={tailwind('font-bold text-base mb-8 text-gray-800 text-center')}>{obj.title}</Text>
                                {_.map(obj.images, im => {
                                    return (
                                        <Image
                                            key={Math.random(10000)}
                                            style={{ width: 300, height: 200, marginBottom: 10 }}
                                            source={{uri: im["n"] === undefined ? `${im["z"].url}` : im["n"].url}}
                                        />
                                    )
                                })}
                                <View style={tailwind('')}>
                                    {obj.creditline != null ? <Text style={tailwind('italic mx-6')}>{obj.creditline}</Text> : null}
                                    {obj.description != null ? <Text style={tailwind('text-gray-800 mt-4 text-justify mx-6')}>{obj.description}</Text> : null}
                                </View>
                                <Text style={tailwind('text-blue-600 mt-8 w-full text-center')}
                                    onPress={() => Linking.openURL(`${obj.url}`)}>
                                    Find Out More
                                </Text>
                                <View style={tailwind('w-full h-px mt-8 bg-gray-800')}></View>
                            </View>
                        )
                    }
                })}
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    text: {
        textAlign: 'justify',
        letterSpacing: 0.6,
        lineHeight: 19
    }
});
export default PastExhibition;