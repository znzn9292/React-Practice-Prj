import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, FlatList, TouchableOpacity, Touchable } from 'react-native'
import { icons, images, SIZES, COLORS, FONTS } from "../constants";
import { initialCurrentLocation, categoryData, restaurantData, } from "../constants/data";

const Home = () => {
    const [categories, setCategories] = useState(categoryData);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [restaurants, setRestaurants] = useState(restaurantData);
    const [currentLocation, setCurrentLocation] = useState(initialCurrentLocation);

    const renderHeader = () => {
        return (
            <View style={{
                flexDirection: 'row',
                height: 50
            }}>
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingLeft: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={icons.nearby}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>

                <View style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <View
                        style={{
                            width: '70%',
                            height: '100%',
                            backgroundColor: COLORS.lightGray3,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: SIZES.radius
                        }}
                    >
                        <Text style={{ fontSize: SIZES.h3, lineHeight: 22, fontWeight: 'bold' }}>{currentLocation.streetName}</Text>
                    </View>
                </View>

                <TouchableOpacity style={{
                    width: 50,
                    paddingRight: SIZES.padding * 2,
                    justifyContent: 'center'
                }}>

                    <Image
                        source={icons.basket}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    const renderMainCategories = () => {
        return (
            <View style={{
                padding: SIZES.padding * 2
            }}>
                <Text style={{ fontSize: 100 }}> Main </Text>
                <Text h1> Categories </Text>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderMainCategories()}
        </SafeAreaView >
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1
    }
})
