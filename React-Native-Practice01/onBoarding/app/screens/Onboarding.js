import React, { useRef, useState, useEffect } from 'react'
import { FlatList, ImageBackground, SafeAreaView, StatusBar, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import { COLORS, SIZES } from "../constants/index";
import AntDesingIcons from "react-native-vector-icons/AntDesign";
import data from '../data/onboarding'

const Onboarding = () => {

    const flatListRef = useRef();
    const [currentPage, setCurrentPage] = useState(0);
    const [viewableItems, setViewableItems] = useState([]);

    const handleViewableItemsChanged = useRef(({ viewableItems }) => {
        setViewableItems(viewableItems)
    })

    useEffect(() => {
        if (!viewableItems[0] || currentPage === viewableItems[0].index)
            return;

        setCurrentPage(viewableItems[0].index)

    }, [viewableItems])

    const handleNext = () => {
        if (currentPage == data.length - 1)
            return;

        flatListRef.current.scrollToIndex({
            animated: true,
            index: currentPage + 1
        })
    }

    const handleBack = () => {
        if (currentPage == 0)
            return;

        flatListRef.current.scrollToIndex({
            animated: true,
            index: currentPage - 1
        })
    }

    const handleSkipToEnd = () => {
        flatListRef.current.scrollToIndex({
            animated: true,
            index: data.length - 1
        })
    }

    const renderTopSection = () => {
        return (
            <SafeAreaView>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal: SIZES.base * 2
                }}>

                    {/* Back button */}
                    <TouchableOpacity
                        onPress={handleBack}
                        style={{
                            padding: SIZES.base
                        }}>
                        {/* Back icon  */}
                        {/* Hide back button on 1st screen */}
                        <AntDesingIcons name="left" style={{
                            fontSize: 25,
                            color: COLORS.black,
                            opacity: currentPage == 0 ? 0 : 1

                        }} />
                    </TouchableOpacity>

                    {/* Skip button */}
                    {/* Hide Skip button on Last screen */}
                    <TouchableOpacity onPress={handleSkipToEnd}>
                        <Text style={{
                            fontSize: 18,
                            color: COLORS.black,
                            opacity: currentPage == data.length - 1 ? 0 : 1
                        }}>Skip</Text>
                    </TouchableOpacity>

                </View>
            </SafeAreaView>
        )
    }

    const renderBottomSection = () => {
        return (
            <SafeAreaView>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingHorizontal: SIZES.base * 2,
                    paddingVertical: SIZES.base * 2
                }}>
                    {/* Pagination */}
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        {
                            [...Array(data.length)].map((_, index) => (
                                <View
                                    key={index}
                                    style={{
                                        width: 10,
                                        height: 10,
                                        borderRadius: 5,
                                        backgroundColor: index == currentPage ? COLORS.primary : COLORS.primary + '20',
                                        marginRight: 8
                                    }} />
                            ))
                        }
                    </View>


                    {/* Next or GetStarted button */}
                    {/* Show or Hide Next button & GetStarted button by screen */}
                    {
                        currentPage != data.length - 1 ? (
                            <TouchableOpacity
                                onPress={handleNext}
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: 60,
                                    height: 60,
                                    borderRadius: 30,
                                    backgroundColor: COLORS.primary
                                }}
                                activeOpacity={0.8}
                            >
                                <AntDesingIcons
                                    name="right"
                                    style={{
                                        fontSize: 18,
                                        color: COLORS.whtite,
                                        opacity: 0.3
                                    }}
                                />
                                <AntDesingIcons
                                    name="right"
                                    style={{
                                        fontSize: 25,
                                        color: COLORS.whtite,
                                        marginLeft: -15
                                    }}
                                />

                            </TouchableOpacity>
                        ) : (
                            // Get Stared Button
                            <TouchableOpacity style={{
                                paddingHorizontal: SIZES.base * 2,
                                height: 60,
                                borderRadius: 30,
                                backgroundColor: COLORS.primary,
                                justifyContent: 'center',
                                flexDirection: 'row',
                                alignItems: 'center'

                            }}>
                                <Text style={{
                                    color: COLORS.whtite,
                                    fontSize: 18,
                                    marginLeft: SIZES.base

                                }}>Get Started</Text>
                                <AntDesingIcons
                                    name="right"
                                    style={{
                                        fontSize: 18,
                                        color: COLORS.whtite,
                                        opacity: 0.3,
                                        marginLeft: SIZES.base
                                    }}
                                />
                                <AntDesingIcons
                                    name="right"
                                    style={{
                                        fontSize: 25,
                                        color: COLORS.whtite,
                                        marginLeft: -15
                                    }}
                                />

                            </TouchableOpacity>
                        )
                    }

                </View>
            </SafeAreaView>
        )
    }

    const renderFlatListItem = ({ item }) => {
        return (
            <View style={{
                width: SIZES.width,
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <View style={{
                    alignItems: 'center',
                    marginVertical: SIZES.base * 2
                }}>
                    <ImageBackground
                        source={item.img}
                        style={{ width: 335, height: 335, resizeMode: 'contains' }}
                    />
                </View>

                <View style={{ paddingHorizontal: SIZES.base * 4, marginVertical: SIZES.base * 4 }}>
                    <Text style={{ fontSize: 30, textAlign: 'center', fontWeight: 'bold' }}>
                        {item.title}
                    </Text>
                    <Text style={{
                        fontSize: 18,
                        opacity: 0.4,
                        textAlign: 'center',
                        marginTop: 15,
                        lineHeight: 28
                    }}>
                        {item.description}
                    </Text>
                </View>
            </View>


        )
    }

    return (
        <View style={{
            flex: 1,
            backgroundColor: COLORS.background,
            justifyContent: 'center'
        }}>
            {/* <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} /> */}

            {/* TOP SECTION - Back & Skip button */}
            {renderTopSection()}

            {/* FALTLIST with pages */}
            <FlatList
                data={data}
                pagingEnabled
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item._id}
                renderItem={renderFlatListItem}

                ref={flatListRef}
                onViewableItemsChanged={handleViewableItemsChanged.current}
                viewabilityConfig={{ viewAreaCoveragePercentThreshold: 100 }}
            />

            {/* BTTOM SECTION - pagination & next or GetStarted button */}
            {renderBottomSection()}
        </View>
    )

}

export default Onboarding

const styles = StyleSheet.create({})
