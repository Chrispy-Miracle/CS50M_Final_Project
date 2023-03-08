import { createStackNavigator } from '@react-navigation/stack';

import { IconHeader } from '../components/IconHeader';
import { Home } from '../screens/Home';
import { TabNavigator } from '../navigators/TabNavigator';

const Stack = createStackNavigator()

export const StackNavigator = () => {
    
    return (
        <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerTintColor: "orange",
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
            />
            <Stack.Screen
                name="TabNavigator"
                component={TabNavigator} 
                // options={{
                //     headerTitle: () => (<IconHeader iconName='home' text='NewPage' color='#e1f4d3' />)
                // }}
            />
        </Stack.Navigator>
    )
}