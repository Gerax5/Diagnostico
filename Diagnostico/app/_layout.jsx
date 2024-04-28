import { Stack, Slot } from "expo-router"
import React from "react"
import { StyleSheet, ImageBackground,useWindowDimensions } from "react-native"
import images from "./data/images"
import Heading from "./Components/Heading"
import Footer from "./Components/footer"
import { useNavigation } from "expo-router"


/*const RootLayout = () => {
    return <Stack>
        <Stack.Screen name='index' options={{headerShown:false}}/>
        <Stack.Screen name="Components/Main" options={{headerShown:false}}/>
        <Stack.Screen name="Components/Game" options={{headerShown:false}} />
    </Stack>
}*/

const RootLayout = () => {
    const { width: screenWidth, height: screenHeight } = useWindowDimensions();
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
})

export default RootLayout