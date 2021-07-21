import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import DetailScreen from '../screens/DetailScreen';

const TabBottomStack = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const AboutStack = createStackNavigator();

const HomeStackScreen = () => {
    return <HomeStack.Navigator>
            <HomeStack.Screen name="home" component={HomeScreen} />
            <HomeStack.Screen name="details" component={DetailScreen} />
        </HomeStack.Navigator>
}

const AboutStackScreen = () => {
    return <AboutStack.Navigator>
            <AboutStack.Screen name="about" component={AboutScreen} />
        </AboutStack.Navigator>
}

const TabStackScreen = () => {
    return <TabBottomStack.Navigator>
            <TabBottomStack.Screen name="home" component={HomeStackScreen} />
        <TabBottomStack.Screen name="about" component={AboutStackScreen} />
        </TabBottomStack.Navigator>
}

export default TabStackScreen
