import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createDrawerNavigator } from "@react-navigation/drawer"
import { createStackNavigator } from "@react-navigation/stack"
import TabStackScreen from './TabStackScreen';
import ImageListScreen from '../screens/ImageListScreen';
import AboutScreen from '../screens/AboutScreen';


const ImageStack = createStackNavigator();
const ImageStackScreen = () => {
    return (
        <ImageStack.Navigator>
            <ImageStack.Screen name="imagelist" component={ImageListScreen} />
        </ImageStack.Navigator>
    )
}

const AboutStack = createStackNavigator();
const AboutStackScreen = () => {
    return (
        <AboutStack.Navigator>
            <AboutStack.Screen name="about" component={AboutScreen} />
        </AboutStack.Navigator>
    )
}

const Drower = createDrawerNavigator();
const DrawerStackScreen = () => {
    return <Drower.Navigator>
        <Drower.Screen name="tabstack" component={TabStackScreen} />
        <Drower.Screen name="imagestack" component={ImageStackScreen} />
        <Drower.Screen name="aboutstack" component={AboutStackScreen} />
    </Drower.Navigator>
}

export default DrawerStackScreen

const styles = StyleSheet.create({})
