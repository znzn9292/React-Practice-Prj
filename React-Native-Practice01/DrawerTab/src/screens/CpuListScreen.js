import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const CpuListScreen = ({ navigation }) => {
    return (
        <View>
            <Text>CpuListScreen</Text>
            <Button title="CPU상세" onPress={() => navigation.push("cpudetails")} />
        </View>
    )
}

export default CpuListScreen

const styles = StyleSheet.create({})
