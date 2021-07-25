import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createDrawerNavigator } from "@react-navigation/drawer"
import { createStackNavigator } from "@react-navigation/stack"
import TabStackScreen from './TabStackScreen';
import ImageListScreen from '../screens/ImageListScreen';
import AboutScreen from '../screens/AboutScreen';
import Icon from 'react-native-vector-icons/Ionicons'

const Drawer = createDrawerNavigator();

export const MenuButton = ({ navigation }) => {
    const openMenu = () => {
        navigation.openDrawer();
    };
    return <Icon
                name="ios-menu"
                style={{
                    fontSize: 30,
                    marginLeft: 10,
                    marginTop: 5,
                    paddingLeft: 5,
                    paddingRight: 5,
                }}
                onPress={openMenu}
            />
}

const ImageStack = createStackNavigator();
const ImageStackScreen = ({navigation}) => {
    return (
        <ImageStack.Navigator>
            <ImageStack.Screen
                name="imagelist"
                component={ImageListScreen}
                options={{
                    headerLeft: () => <MenuButton navigation={navigation} />
                }}    
            />
        </ImageStack.Navigator>
    )
}

const AboutStack = createStackNavigator();
const AboutStackScreen = ({navigation}) => {
    return (
        <AboutStack.Navigator>
            <AboutStack.Screen
                name="about"
                component={AboutScreen}
                options={{
                    headerLeft: () => <MenuButton navigation={navigation} />
                }}
            />
        </AboutStack.Navigator>
    )
}

const DrawerStackScreen = () => {
    return <Drawer.Navigator>
        <Drawer.Screen name="tabstack" component={TabStackScreen} />
        <Drawer.Screen name="imagestack" component={ImageStackScreen} />
        <Drawer.Screen name="aboutstack" component={AboutStackScreen} />
    </Drawer.Navigator>
}

export default DrawerStackScreen

const styles = StyleSheet.create({})
