import React from 'react'
import { View, Text, Button} from 'react-native'

const HomeScreen = ({ navigation}) => {
    const goToDetail = (e) => {
        navigation.navigate("details")
    }

    return (
        <>
            <View>
                <Text>HomeScreen</Text>
            </View>
            <View>
                <Button onPress={goToDetail} title="상세화면"></Button>
            </View>
        </>
    );
};

export default HomeScreen
