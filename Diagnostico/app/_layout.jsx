import { Stack, Slot } from "expo-router"
import React,{useEffect,useRef, useState} from "react"
import { StyleSheet, ImageBackground,useWindowDimensions, Animated, View } from "react-native"
import images from "./data/images"
import Heading from "./Components/Heading"
import Footer from "./Components/footer"
import { useNavigation } from "expo-router"
import CircleAnimation from "./Components/CircleAnimation"


/*const RootLayout = () => {
    return <Stack>
        <Stack.Screen name='index' options={{headerShown:false}}/>
        <Stack.Screen name="Components/Main" options={{headerShown:false}}/>
        <Stack.Screen name="Components/Game" options={{headerShown:false}} />
    </Stack>
}*/

const RootLayout = () => {
    const { width: screenWidth, height: screenHeight } = useWindowDimensions();
    const [animationComplete, setAnimationComplete] = useState(false);

    const handleAnimationComplete = () => {
        setAnimationComplete(true);
    };

    /**
     * Invariant Violation: [35,"RCTView",151,{"backgroundColor":-16234382,"position":"absolute","width":0,"height":0,"borderRadius":"<<NaN>>","collapsable":false}] is not usable as a native method argument
     */

    return (
        <ImageBackground source={images.fondo} style={styles.image}>
            <Heading></Heading>
            <Slot />
            
            <Footer screenHeight={screenHeight} screenWidth={screenWidth}></Footer>
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