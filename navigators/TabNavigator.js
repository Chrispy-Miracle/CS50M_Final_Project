import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { SelectPic } from '../screens/SelectPic';
import { TakePhoto } from '../screens/TakePhoto';


const Tab = createMaterialTopTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
        screenOptions={{
            tabBarStyle: {
                backgroundColor: '#e1f4d3'
            },
            tabBarActiveTintColor: 'teal',
            tabBarIndicatorContainerStyle: {
                borderColor: 'teal'
            }
        }}
    >
      <Tab.Screen name="Select a Picture" component={SelectPic} />
      <Tab.Screen name="Take a Photo" component={TakePhoto} getImage={({params}) => params.image}/>
    </Tab.Navigator>
  );
}