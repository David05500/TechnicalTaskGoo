import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets, CardStyleInterpolators } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import ListItemScreen from './screens/ListItemScreen';
import { View, Text } from 'react-native';
import _ from 'lodash';

const Stack = createStackNavigator();

const App = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [screenTitle, setScreenTitle] = useState('');
  const [listItemScreenTitle, setListItemScreenTitle] = useState('');
  const url = 'https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.exhibitions.getList&access_token=93f17b32448732710beba88b1abc2e4d&page=1&per_page=100';

  useEffect(() => {
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const sortedArray = _.orderBy(data.exhibitions, ['date_start' ], ['desc']);
      setData(sortedArray);
      setIsLoading(false);
    })
  }, [])

  const updateHeaderTitle = (name) => {
    setScreenTitle(name);
  };

  const updateListItemScreenTitle = (name) => {
    setListItemScreenTitle(name);
  };

  if(isLoading){
    return (
      <View>
        <Text>
          LOADING
        </Text>
      </View>
    )
  }else{
    return (
      <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              gestureEnabled: true,
              gestureDirection: "horizontal",
              ...TransitionPresets.SlideFromRightIOS
            }}
            headerMode='float'
          > 
            <Stack.Screen name="Cooperhewitt Exhibitions" >
              {props => <HomeScreen  {...props} updateHeaderTitle={updateHeaderTitle}/>}
            </Stack.Screen>
            <Stack.Screen name="Details" options={{ title: screenTitle }}>
              {props => <DetailsScreen {...props} extraData={data} updateListItemScreenTitle={updateListItemScreenTitle}/>}
            </Stack.Screen>
            <Stack.Screen name="ListItemScreen" options={{ title: listItemScreenTitle }}>
              {props => <ListItemScreen {...props} extraData={data} />}
            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
    );
  }
}

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 50,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};
export default App;
