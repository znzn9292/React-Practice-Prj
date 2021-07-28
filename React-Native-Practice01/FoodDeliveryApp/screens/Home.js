import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, FlatList, TouchableOpacity, Touchable } from 'react-native'
import { icons, images, SIZES, COLORS, FONTS } from "../constants";
import { initialCurrentLocation, categoryData, restaurantData, } from "../constants/data";
import { back } from '../constants/icons';

const Home = ({ navigation }) => {
    const [categories, setCategories] = useState(categoryData);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [restaurants, setRestaurants] = useState(restaurantData);
    const [currentLocation, setCurrentLocation] = useState(initialCurrentLocation);

    const onSelectCategory = (category) => {
        // filter restautant

        let restaurantList = restaurantData.filter(a =>
            a.categories.includes(category.id))

        setRestaurants(restaurantList)
        setSelectedCategory(category)
    }

    const getCategoryNameById = (id) => {
        let category = categories.filter(a => a.id == id)

        if (category.length > 0) {
            return category[0].name
        }

        return "";
    }

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
        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity
                    style={{
                        padding: SIZES.padding,
                        paddingBottom: SIZES.padding * 2,
                        backgroundColor: (selectedCategory?.id == item.id) ? COLORS.primary : COLORS.white,
                        borderRadius: SIZES.radius,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: SIZES.padding,
                        ...styles.shadow
                    }}
                    onPress={() => onSelectCategory(item)}
                >
                    <View
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 25,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.lightGray

                        }}
                    >
                        <Image
                            source={item.icon}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30
                            }}
                        />
                    </View>

                    <Text style={{
                        marginTop: SIZES.padding,
                        color: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.black,
                        fontSize: SIZES.body5,
                        lineHeight: 22
                    }}>
                        {item.name}
                    </Text>
                </TouchableOpacity>
            )
        }

        return (
            <View style={{
                padding: SIZES.padding * 2
            }}>
                <Text style={{ fontSize: 30 }}> Main </Text>
                <Text style={{ fontSize: 30 }}> Categories </Text>

                <FlatList
                    data={categories}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
                >

                </FlatList>
            </View>
        )
    }

    const renderRestaurantList = () => {
        const renderItem = ({ item }) => (
            <TouchableOpacity
                style={{ marginBottom: SIZES.padding * 2 }}
                onPress={() => navigation.navigate("Restaurant", {
                    item,
                    currentLocation
                })}
            >
                <View
                    style={{
                        marginBottom: SIZES.padding
                    }}
                >
                    <Image
                        source={item.photo}
                        resizeMode='cover'
                        style={{
                            width: "100%",
                            height: 200,
                            borderRadius: SIZES.radius
                        }}
                    />

                    <View
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            height: 50,
                            width: SIZES.width * 0.3,
                            backgroundColor: COLORS.white,
                            borderTopRightRadius: SIZES.radius,
                            borderBottomLeftRadius: SIZES.radius,
                            alignItems: 'center',
                            justifyContent: 'center',
                            ...styles.shadow
                        }}
                    >
                        <Text style={{
                            fontSize: SIZES.h5,
                            lineHeight: 22
                        }}>
                            {item.duration}
                        </Text>
                    </View>
                </View>

                {/* Restaurant Info */}
                <Text style={{ fontSize: SIZES.body2, lineHeight: 30 }}>
                    {item.name}
                </Text>

                <View
                    style={{
                        marginTop: SIZES.padding,
                        flexDirection: 'row'
                    }}
                >
                    <Image
                        source={icons.star}
                        style={{
                            height: 20,
                            width: 20,
                            tintColor: COLORS.primary,
                            marginRight: 10
                        }}
                    />
                    <Text style={{ fontSize: SIZES.body3, lineHeight: 22 }}>{item.rating}</Text>

                    {/* Categories */}
                    <View
                        style={{
                            flexDirection: 'row',
                            marginLeft: 10
                        }}
                    >
                        {
                            item.categories.map((categoryId) => {
                                return (
                                    <View
                                        style={{ flexDirection: 'row' }}
                                        key={categoryId}
                                    >
                                        <Text style={{ fontSize: SIZES.body3, lineHeight: 22 }}>
                                            {getCategoryNameById(categoryId)}
                                        </Text>
                                        <Text style={{ fontSize: SIZES.h3, lineHeight: 22, color: COLORS.darkgray }}>
                                            .
                                        </Text>
                                    </View>
                                )
                            })
                        }

                        {/* Price */}
                        {
                            [1, 2, 3].map((priceRating) => (
                                <Text
                                    key={priceRating}
                                    style={{
                                        fontSize: SIZES.body3,
                                        lineHeight: 22,
                                        color: (priceRating <= item.priceRating) ?
                                            COLORS.black : COLORS.darkgray
                                    }}
                                >
                                    $
                                </Text>
                            ))
                        }
                    </View>

                </View>
            </TouchableOpacity>
        )

        return (
            <FlatList
                data={restaurants}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                contentContainerStyle={{
                    paddingHorizontal: SIZES.padding * 2,
                    paddingBottom: 30

                }}
            />
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderMainCategories()}
            {renderRestaurantList()}
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
