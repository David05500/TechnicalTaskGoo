import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets, CardStyleInterpolators } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ExhibitionsScreen from './screens/ExhibitionsScreen';
import ExhibitionScreen from './screens/ExhibitionScreen';
import _ from 'lodash';
import LoadingIndicator from './components/LoadingIndicator';
const Stack = createStackNavigator();

const App = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [exhibitionsScreenTitle, setExhibitionsScreenTitle] = useState('');
  const [exhibitionScreenTitle, setExhibitionScreenTitle] = useState('');

  useEffect(() => {
    const url = 'https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.exhibitions.getList&access_token=93f17b32448732710beba88b1abc2e4d&page=1&per_page=100';
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
      setData(data.exhibitions);
      setIsLoading(false);
    })
  }, [])

  const updateExhibitionsScreenTitle = (name) => {
    setExhibitionsScreenTitle(name);
  };

  const updateExhibitionScreenTitle = (name) => {
    setExhibitionScreenTitle(name);
  };

  if(isLoading){
    return <LoadingIndicator />
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
            <Stack.Screen  name="Cooperhewitt Exhibitions Guide" options={{headerShown: false}}>
              {props => <HomeScreen  {...props} updateExhibitionsScreenTitle={updateExhibitionsScreenTitle}/>}
            </Stack.Screen>
            <Stack.Screen name="Exhibitions" options={{ title: exhibitionsScreenTitle, headerTitleAlign: 'center' }} >
              {props => <ExhibitionsScreen {...props} extraData={data} updateExhibitionScreenTitle={updateExhibitionScreenTitle}/>}
            </Stack.Screen>
            <Stack.Screen name="Exhibition" options={{ title: exhibitionScreenTitle, headerTitleAlign: 'center' }}>
              {props => <ExhibitionScreen {...props} extraData={data} />}
            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
    );
  }
};
export default App;
