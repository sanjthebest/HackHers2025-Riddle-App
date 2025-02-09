import 'react-native-gesture-handler'; 
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack'; 
//import { enableScreens } from 'react-native-screens'; 


import { enableScreens } from 'react-native-screens'; 

import Home from './Home';  
import Map from './Map';    
import Level from './Level'; 


enableScreens();

const Stack = createStackNavigator(); 

function App() {
  return (
    <NavigationContainer> {}
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="Level" component={Level} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
