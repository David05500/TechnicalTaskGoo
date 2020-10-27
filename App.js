import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets, CardStyleInterpolators } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: "horizontal",
          ...TransitionPresets.SlideFromRightIOS,
          // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          // transitionSpecs: {
          //   open: config,
          //   close: config
          // }
        }}
        headerMode='float'
      >
          <Stack.Screen name="Home" options={{ title: 'Overview' }}>
            {props => <HomeScreen {...props} extraData='Proppy' />}
          </Stack.Screen>
          <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
);

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
