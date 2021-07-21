import React from 'react'
import { createDrawerNavigator } from "@react-navigation/drawer"
import { createStackNavigator} from "@react-navigation/stack"
import HomeScreen from '../screens/HomeScreen';
import ImageListScreen from '../screens/ImageListScreen';
import AboutScreen from '../screens/AboutScreen';

const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();
const ImageStack = createStackNavigator();
const AboutStack = createStackNavigator();

// const TabBottomStack = createBottomTabNavigator();

const HomeStackRouter = () => {
    // return <HomeStack.Navigator>
    //     <HomeStack.screen name="home" component={HomeStack} />
    // </HomeStack.Navigator>
}

const DrawerNavigator = () => {
    return <Drawer.Navigator>
        {/* <Drawer.Screen name="homestack" component={HomeStackRouter} />
        <Drawer.Screen name="imagelist" component={ImageListScreen} />
        <Drawer.Screen name="about" component={AboutScreen} /> */}
        <Drawer.Screen name="homestack" component={HomeScreen} />
        <Drawer.Screen name="imagelist" component={ImageListScreen} />
        <Drawer.Screen name="about" component={AboutScreen} />
    </Drawer.Navigator>
}

export default DrawerNavigator;