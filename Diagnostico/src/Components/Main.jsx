import React, { useState, useEffect } from 'react';
import { View, Text, Button, ImageBackground, StyleSheet, Image, Dimensions, TouchableHighlight, useWindowDimensions } from "react-native";
import LottieView from 'lottie-react-native';
import theme from '../themes'
import Heading from './Heading';
import images from '../data/images';
import ButtonGame from './ButtonGame';
import Footer from './footer';

let heigh = 0
/**
 * 
 * @returns 
 */

/**const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width);
    const [screenHeight, setScreenHeight] = useState(Dimensions.get('window').height);

    useEffect(() => {
        const updateDimensions = () => {
            setScreenWidth(Dimensions.get('window').width);
            setScreenHeight(Dimensions.get('window').height);
        };

        Dimensions.addEventListener('change', updateDimensions);

        return () => {
            Dimensions.removeEventListener('change', updateDimensions);
        };
    }, []); */

const Main = () => {

    const { width: screenWidth, height: screenHeight } = useWindowDimensions();


    const styles = StyleSheet.create({
        image : {
            flex: 1,
            width: '100%',
            height: '100%',
            resizeMode: 'cover',
            overflow:'hidden',
        },
        textButton: {
            color: theme.colors.textSecondary,
            textAlign:'center',
            fontSize:25,
            fontWeight:'bold'
        },
        shadowBox: {
            backgroundColor:"#204D8D",
            alignItems:'center',
            paddingBottom:5,
            width:"100%",
            height:"97%",
            borderRadius:25
        },
        contenedorGeneral: {
            height:"100%",
            width:"100%"
        },
        button: {
            alignItems: 'center',
            backgroundColor: '#DDDDDD',
            padding: 10,
            marginTop:"40%"
        },
        containerTituloMision: {
            marginTop:'1%',
            width:'90%'
        },
        tituloMision: {
            color: theme.colors.textPrimary,
            fontSize: 27,
            textAlign:'center',
            fontWeight:'bold'
        },
        bodyText: {
            color: theme.colors.textPrimary,
            fontSize: 28,
            textAlign:'center',
        },
        cotainerText: {
            width:'80%',
            marginTop: '5%',
            justifyContent:'center',
            alignContent:'center'
        },
        text: {
            color: theme.colors.textPrimary,
            fontSize: theme.fontSize.title,
            fontWeight: 'bold',
            marginTop:screenHeight * 0.02
        },
        pregunta: {
            position:'absolute',
            flex:1,
            zIndex:1,
            //backgroundColor:"#204D8D",
            backgroundColor:"#123051",
            height:screenHeight * 0.5,
            width:'90%',
            marginLeft:screenWidth * 0.05,
            marginTop: screenHeight <= 750 ? screenHeight * 0.15: screenHeight * 0.15,
            alignItems:'center',
            borderRadius: 25
        },
        animar:{
            position: 'relative',
            zIndex: 2,
            width: '100%',
            height: '100%',
            marginTop:screenHeight <= 750 ? screenHeight * -0.1: screenHeight*-0.12,
            marginLeft:"-2%"
        },
        btn: {
            zIndex:3,
            marginTop: screenHeight * -0.42,
            marginLeft: screenWidth * 0.25
        },
        containerChanin:{
            position:'absolute',
            zIndex: 1,
            height: screenHeight * 0.30,
            width:screenWidth * 0.3,
            bottom:0,
            //marginLeft: screenWidth * 0.03,
            marginBottom: screenHeight * 0.1
        },
        chanin: {
            zIndex: 6,
            position: 'relative',
            height: "100%",
            width: "100%",
        },
    });
//
    return (
        <ImageBackground source={images.fondo} style={styles.image}>
            <Heading></Heading>
            
            <View style={styles.contenedorGeneral}>
                <LottieView source={images.DAnimada} autoPlay loop style={styles.animar}></LottieView>
                <View style={styles.pregunta}>
                    <View style={styles.shadowBox}>
                        <Text style={styles.text}>¡Desafíate!</Text>
                        <Image source={images.purpleLine}></Image>
                        <View style={styles.cotainerText}>
                            <Text style={styles.bodyText}>
                                Supera estos desafíos y empieza a completar la misión de:
                            </Text>
                            
                        </View>
                        <View style={styles.containerTituloMision}>
                            <Text style={styles.tituloMision}>
                                Jerarquia de operaciones
                            </Text>
                        </View>    
                    </View>
                    
                </View>
                <View style={styles.btn}>
                    <ButtonGame backgroundColor={"#FFFF"} shadowColor={"#8D8D8D"} height={screenHeight * 0.06} width={screenWidth * 0.5}>
                        <Text style={styles.textButton}>!Acepto el reto!</Text>
                    </ButtonGame>
                </View>
            </View>
            <Footer screenHeight={screenHeight} screenWidth={screenWidth}></Footer>
            <View style={styles.containerChanin}>
                <Image source={images.chanin} style={styles.chanin} resizeMode="contain"></Image>
            </View>
            
            
        </ImageBackground>
        
    )
}

/**
 * 
 */



export default Main;
