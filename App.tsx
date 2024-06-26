import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PersonHomeScreen from './components/PersonHomeScreen';
import VehicleHomeScreen from './components/VehicleHomeScreen';
import DashboardScreen from './components/DashboardScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Person" component={PersonHomeScreen} />
        <Tab.Screen name="Vehicle" component={VehicleHomeScreen} />
        <Tab.Screen name="Dashboard" component={DashboardScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
