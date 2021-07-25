import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createStackNavigator } from "@react-navigation/stack"
import CpuListScreen from "../screens/CpuListScreen";
import CpuDetailsScreen from "../screens/CpuDetailsScreen";
import BoardListScreen from "../screens/BoardListScreen";
import MemoryListScreen from "../screens/MemoryListScreen";
import { MenuButton } from './MenuButton';

const BottomTab = createBottomTabNavigator();

const CpuStack = createStackNavigator();
const CpuStackScreen = () => {
    return (
        <CpuStack.Navigator>
            <CpuStack.Screen
                name="cpulist"
                component={CpuListScreen}
                options={{
                    title: "메인화면",
                    headerLeft: () => <MenuButton/>
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
            <BoardStack.Screen
                name="boardlist"
                component={BoardListScreen}
                options={{
                    title: "메인화면",
                    headerLeft: () => <MenuButton/>
                }} />
        </BoardStack.Navigator>
    )
}

const MemoryStack = createStackNavigator();
const MemoryStackcreen = () => {
    return (
        <MemoryStack.Navigator>
            <MemoryStack.Screen
                name="memorylist"
                component={MemoryListScreen}
                options={{
                    headerLeft: () => <MenuButton/>
                }} />
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
