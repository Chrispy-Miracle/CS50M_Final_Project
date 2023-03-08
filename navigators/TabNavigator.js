import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { NewPage } from '../screens/NewPage';
import { NewPage2 } from '../screens/NewPage2';


const Tab = createMaterialTopTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="NewPage" component={NewPage} />
      <Tab.Screen name="NewPage2" component={NewPage2} />
    </Tab.Navigator>
  );
}