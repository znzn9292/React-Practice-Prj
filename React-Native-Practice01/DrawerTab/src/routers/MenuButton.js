import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/core'

export const MenuButton = () => {
    const navigation = useNavigation();
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
const styles = StyleSheet.create({})
