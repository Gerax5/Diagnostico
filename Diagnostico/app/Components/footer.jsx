import React from "react";
import { View,StyleSheet,Image, Text, Alert } from "react-native";
import images from "../data/images";
import ButtonGame from "./ButtonGame";


const Footer = ({ screenHeight, screenWidth }) => {
    const styles = StyleSheet.create({
        pregunta: {
            backgroundColor: 'red',
            position: 'absolute',
            zIndex: 2,
            height: screenHeight * 0.13,
            width: "100%",
            bottom: 0,
            marginLeft: 0,
            alignSelf:'flex-start',
            alignItems: 'center',
            left:0
        },
        circleBottom1: {
            position:'absolute',
            backgroundColor: '#0084C4',
            borderRadius: 500, // Un valor grande para asegurarse de que el borde sea redondo
            height: '100%',
            width: '200%',
            zIndex: 6,
        },
        circleBottom2: {
            position: 'absolute',
            backgroundColor: '#38A8CD',
            borderRadius:  500,
            height: '90%',
            width: '100%',
            marginTop:"2%",
            zIndex: 2,
        },
        circleBottom3:{
            position: 'absolute',
            backgroundColor: '#084872',
            borderRadius:  500,
            height: '90%',
            marginTop:"1%",
            width: '100%',
            zIndex: 2,
            alignItems:'center'
        },
        logo:{
            width:"80%",
            height:"100%"
        },
        prubea: {
            marginTop:screenHeight*0.01,
            height:screenHeight * 0.09,
            width: screenWidth * 0.4,
            marginLeft: screenWidth * 0.01,
            justifyContent:'center',
            alignContent:'center',
            flexDirection:'row'
        },
        buttons:{
            marginHorizontal: screenWidth * 0.01
        },
        purpleC1:{
            zIndex: 1,
            height:screenHeight*0.3, 
            width:screenWidth*1, 
            marginTop:screenHeight* -0.12
        },
        purpleC2:{
            zIndex:2,
            height:screenHeight*0.3, 
            width:screenWidth*1, 
            alignSelf:'flex-end', 
            marginTop:screenHeight*-0.25
        },
        purpleC3:{
            zIndex:3,
            height:screenHeight*0.3, 
            width:screenWidth*1, 
            alignSelf:'flex-end', 
            marginTop:screenHeight*-0.25
        }
    });

    //

    return (
        <View style={styles.pregunta}>
            
            <View style={styles.circleBottom1}>
                <View style={styles.circleBottom2}>
                    <Text>HOLA</Text>
                    <View style={styles.circleBottom3}>
                        <View style={styles.prubea}>
                            <ButtonGame backgroundColor={"#9bdafa"} shadowColor={"#54a0c4"} height={screenHeight * 0.07} width={screenHeight * 0.07} _style={styles.buttons}>
                            </ButtonGame>
                            <ButtonGame backgroundColor={"#9bdafa"} shadowColor={"#54a0c4"} height={screenHeight * 0.07} width={screenHeight * 0.07} _style={styles.buttons}></ButtonGame>
                            <Image source={images.logoOscuro} style={styles.logo} resizeMode="contain"></Image>
                            <ButtonGame backgroundColor={"#9bdafa"} shadowColor={"#54a0c4"} height={screenHeight * 0.07} width={screenHeight * 0.07} _style={styles.buttons}></ButtonGame>
                            <ButtonGame backgroundColor={"#9bdafa"} shadowColor={"#54a0c4"} height={screenHeight * 0.07} width={screenHeight * 0.07} _style={styles.buttons}></ButtonGame>
                        </View>
                    </View>
                </View>
            </View>
            
            
            <Image source={images.circulo1} style={styles.purpleC1} resizeMode="contain"></Image>
            <Image source={images.circulo2} style={styles.purpleC2} resizeMode="contain"></Image>
            <Image source={images.circulo3} style={styles.purpleC3} resizeMode="contain"></Image>
        </View>
    );
}



export default Footer;
