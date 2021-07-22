import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createStackNavigator } from "@react-navigation/stack"
import CpuListScreen from "../screens/CpuListScreen";
import CpuDetailsScreen from "../screens/CpuDetailsScreen";
import BoardListScreen from "../screens/BoardListScreen";
import MemoryListScreen from "../screens/MemoryListScreen";
import Icon from 'react-native-vector-icons/Ionicons'

const BottomTab = createBottomTabNavigator();

const MenuButton = ({ navigation }) => {
    const openMenu = () => {
        navigation.openDrawer();
    };

    return <TouchableOpacity>
        <Icon
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
    </TouchableOpacity>
}

const CpuStack = createStackNavigator();
const CpuStackScreen = () => {
    return (
        <CpuStack.Navigator>
            <CpuStack.Screen
                name="cpulist"
                component={CpuListScreen}
                options={{
                    title: "메인화면",
                    headerLeft: () => <Button title="햄버거" />
                }}
            />
            <CpuStack.Screen name="cpudetails" component={CpuDetailsScreen} option={{}} />
        </CpuStack.Navigator>
    )
}

const BoardStack = createStackNavigator();
const BoardStackScreen = () => {
    return (
        <BoardStack.Navigator>
            <BoardStack.Screen name="boardlist" component={BoardListScreen} option={{}} />
        </BoardStack.Navigator>
    )
}

const MemoryStack = createStackNavigator();
const MemoryStackcreen = () => {
    return (
        <MemoryStack.Navigator>
            <MemoryStack.Screen name="memorylist" component={MemoryListScreen} option={{}} />
        </MemoryStack.Navigator>
    )
}

const TabStackScreen = ({ navigation }) => {
    return <BottomTab.Navigator>
        <BottomTab.Screen name="cpustack" component={CpuStackScreen} />
        <BottomTab.Screen name="boardstack" component={BoardStackScreen} />
        <BottomTab.Screen name="memorystack" component={MemoryStackcreen} />
    </BottomTab.Navigator>
}

export default TabStackScreen

const styles = StyleSheet.create({})
