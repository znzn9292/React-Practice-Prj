import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer"
import { createStackNavigator } from "@react-navigation/stack"
import TabStackScreen from './TabStackScreen';
import ImageListScreen from '../screens/ImageListScreen';
import AboutScreen from '../screens/AboutScreen';
import { MenuButton } from './MenuButton';
import Icon from 'react-native-vector-icons/Ionicons'


const Drawer = createDrawerNavigator();

const ImageStack = createStackNavigator();
const ImageStackScreen = () => {
    return (
        <ImageStack.Navigator>
            <ImageStack.Screen
                name="imagelist"
                component={ImageListScreen}
                options={{
                    headerLeft: () => <MenuButton />
                }}
            />
        </ImageStack.Navigator>
    )
}

const AboutStack = createStackNavigator();
const AboutStackScreen = () => {
    return (
        <AboutStack.Navigator>
            <AboutStack.Screen
                name="about"
                component={AboutScreen}
                options={{
                    headerLeft: () => <MenuButton />
                }}
            />
        </AboutStack.Navigator>
    )
}

const CustomDrawer = ({ navigation }) => {
    const goToStack = (screenName, params) => {
        navigation.navigate(screenName, params)
    };


    return <DrawerContentScrollView>
        <DrawerItem
            icon={() => <Icon name="ios-home" size={24} />}
            label="CPU"
            onPress={() =>
                goToStack("tabstack", {
                    screen: "cpustack",
                    params: {
                        screen: "cpulist",
                    }
                })}
            style={{
                borderBottomWidth: 1,
                borderRadius: 0,
                borderColor: "#ccc"
            }}
        />
        <DrawerItem label="보드" onPress={() => goToStack("boardstack", {
            screen: "boardstack",
            params: {
                screen: "boardlist"
            }
        })} />
        <DrawerItem label="메모리" onPress={() => goToStack("memorystack", {
            screen: "memorystack",
            params: {
                screen: "memorylist"
            }
        })} />
        <DrawerItem label="에누리" onPress={() => goToStack("tabstack", {
            screen: "storestack",
            params: {
                screen: "storetab",
                params: {
                    screen: "starea"
                }
            }
        })} />
        <DrawerItem label="다나와" onPress={() => goToStack("tabstack", {
            screen: "storestack",
            params: {
                screen: "storetab",
                params: {
                    screen: "stareb"
                }
            }
        })} />
        <DrawerItem label="사진 리스트" onPress={() => goToStack("imagestack")} />
        <DrawerItem label="이 앱에 대하여" onPress={() => goToStack("aboutstack")} />
    </DrawerContentScrollView>
}

const DrawerStackScreen = () => {
    return <Drawer.Navigator
        drawerContent={({ navigation }) => (
            <CustomDrawer navigation={navigation} />
        )}
    >
        <Drawer.Screen name="tabstack" component={TabStackScreen} />
        <Drawer.Screen name="imagestack" component={ImageStackScreen} />
        <Drawer.Screen name="aboutstack" component={AboutStackScreen} />
    </Drawer.Navigator >
}

export default DrawerStackScreen

const styles = StyleSheet.create({})
