import { Stack, Slot } from "expo-router"
import React,{useEffect,useRef, useState} from "react"
import { StyleSheet, ImageBackground,useWindowDimensions, Animated, View } from "react-native"
import images from "./data/images"
import Heading from "./Components/Heading"
import Footer from "./Components/footer"


const RootLayout = () => {
    const { width: screenWidth, height: screenHeight } = useWindowDimensions();

    return (
        <ImageBackground source={images.fondo} style={styles.image}>
            <Heading></Heading>
            <Footer screenHeight={screenHeight} screenWidth={screenWidth}></Footer>
            <Slot style={{position:'absolute', zIndex:2}} />
        </ImageBackground>
    )
}

styles = StyleSheet.create({
    image : {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        overflow:'hidden',
        
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    circle: {
        backgroundColor: '#084872',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -50 }, { translateY: -50 }],
    },
    innerCircle: {
        backgroundColor: '#38A8CD',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default RootLayout