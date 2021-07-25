import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createDrawerNavigator, DrawerContentScrollView } from "@react-navigation/drawer"
import { createStackNavigator } from "@react-navigation/stack"
import TabStackScreen from './TabStackScreen';
import ImageListScreen from '../screens/ImageListScreen';
import AboutScreen from '../screens/AboutScreen';


const Drawer = createDrawerNavigator();

const ImageStack = createStackNavigator();
const ImageStackScreen = ({navigation}) => {
    return (
        <ImageStack.Navigator>
            <ImageStack.Screen
                name="imagelist"
                component={ImageListScreen}
                options={{
                    headerLeft: () => <MenuButton/>
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
                    headerLeft: () => <MenuButton/>
                }}
            />
        </AboutStack.Navigator>
    )
}

const CustomDrawer = ({ navigation }) => {
    return <DrawerContentScrollView>

    </DrawerContentScrollView>
}

const DrawerStackScreen = () => {
    return <Drawer.Navigator drawerContent={({navigation}) => <CustomDrawer navigation={navigation} />}>
        <Drawer.Screen name="tabstack" component={TabStackScreen} />
        <Drawer.Screen name="imagestack" component={ImageStackScreen} />
        <Drawer.Screen name="aboutstack" component={AboutStackScreen} />
    </Drawer.Navigator>
}

export default DrawerStackScreen

const styles = StyleSheet.create({})
