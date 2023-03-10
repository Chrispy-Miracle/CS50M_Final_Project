import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from 'react-native-vector-icons';

import { IconHeader } from '../components/IconHeader';
import { Home } from '../screens/Home';
import { TabNavigator } from '../navigators/TabNavigator';

const Stack = createStackNavigator()

export const StackNavigator = () => {
    
    return (
        <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerTintColor: '#e1f4d3',
                headerStyle: {
                    backgroundColor: 'teal',
                }
            }}
        >
            <Stack.Screen
                name="Home"
                component={Home} 
                options={{
                    headerTitle: () => (<IconHeader iconName='home' text='Home' color='#e1f4d3' />)
                }}
                initialParams={{ image: ''}}
            />
            <Stack.Screen
                name="Choose a Picture"
                component={TabNavigator} 
                options={{
                    headerTitle: () => (<IconHeader iconName='camera' text='Take or Choose Pic' color='#e1f4d3' />)
                }}
            />
        </Stack.Navigator>
    )
}