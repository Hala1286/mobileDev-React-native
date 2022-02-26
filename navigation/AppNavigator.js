import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from '../screens/mainScreen';
import ContactInputScreen from '../screens/contactInput';
const Stack = createStackNavigator();

function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerTintColor: "white",
                    headerStyle: { backgroundColor: "pink" },
                    headerTitleStyle: {
                        fontWeight: "bold",
                    },
                }}
            >
                <Stack.Screen
                    name="MainScreen"
                    component={MainScreen}
                    options={{
                        title: 'Midterm',
                    }}
                />

                <Stack.Screen
                    name="ContactInputScreen"
                    component={ContactInputScreen}
                    options={{
                        title: 'Add Contact',
                    }}
                />
                
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;