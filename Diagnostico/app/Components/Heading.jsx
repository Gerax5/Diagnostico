import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Button, ImageBackground, StyleSheet, Image, Dimensions, Animated, useWindowDimensions } from "react-native";
import images from '../data/images';


const Heading = () => {
    
    const {width: screenWidth, height: screenHeight} = useWindowDimensions();

    const styles = StyleSheet.create({
        container: {
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
        },
        moon: {
            alignSelf: 'flex-start',
            marginTop: screenWidth <= 700 ? '5%' : '0%',
            marginLeft: '-8%',
            position: 'absolute',
            height: screenWidth <= 700 ? screenHeight * 0.10 : screenHeight * 0.05,
        },
        containterImage: {
            zIndex: 1,
            height: screenHeight * 0.15,
            width: screenWidth * 0.15,
            marginLeft: screenWidth * 0.21,
            marginTop: screenHeight * -0.04
        },
        btnDespegable: {
            zIndex: 1,
            width:"100%",
            height:"100%"
        },
        containerCoin: {
            marginLeft: '55%',
            height: '4%',
            flexDirection: 'row',
            marginTop: '10%'
        },
        textPunteo: {
            zIndex: 2,
            position: 'absolute',
            color: 'white',
            fontWeight: 'bold',
            fontSize: 22,
            marginLeft: "15%",
            marginTop: "0.5%",
        },
        punteo: {
            zIndex: 1,
            position: 'relative',
            height: screenHeight * 0.04,
            backgroundColor: "#123051",
            marginTop: "1%",
            width: '60%',
            borderRadius: 50
        },
        coin: {
            zIndex: 2,
            position: 'relative',
            alignSelf: 'flex-start',
            height: screenHeight * 0.04,
            marginLeft: '-70%'
    
        },
    });

    const rotateValue = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        Animated.loop(
            Animated.timing(rotateValue, {
                toValue: 2,
                duration: 50000,
                useNativeDriver: true
            })
        ).start();
    }, []);

    const rotateAnimation = rotateValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    });

    return (
        <View>
            <Animated.Image source={images.moon} style={[styles.moon, { transform: [{ rotate: rotateAnimation }] }]} resizeMode='contain'/>
            <View style={styles.containerCoin}>
                <View style={styles.punteo}></View>
                <Image source={images.coin} style={styles.coin} resizeMode='contain'></Image>
                <Text style={styles.textPunteo}>00000</Text>
                <View style={styles.containterImage}>
                    <Image source={images.btnDesplega} style={styles.btnDespegable} resizeMode='contain'></Image>
                </View>
            </View>
        </View>
    )
}


export default Heading