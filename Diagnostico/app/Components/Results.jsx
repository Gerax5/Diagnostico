import React, {useState, useEffect} from "react"
import { View, Text, StyleSheet, useWindowDimensions, Image } from "react-native"
import Box from "./Box";
import theme from "../themes";
import images from "../data/images";
import { useLocalSearchParams } from "expo-router";
import LottieView from "lottie-react-native";
import ButtonGame from "./ButtonGame";

const Results = ({route}) =>{
    const params = useLocalSearchParams();
    const {buenas, malas} = params;
    const { width: screenWidth, height: screenHeight } = useWindowDimensions();

    const IncrementingNumber = ({styles}) => {
        const [number, setNumber] = useState(0);
        const targetNumber = buenas*10; 
        const increment = 1; 
        const intervalDuration = 100;
      
        useEffect(() => {
          const interval = setInterval(() => {
            if (number < targetNumber) {
              setNumber(prevNumber => prevNumber + increment);
            } else {
              clearInterval(interval);
            }
          }, intervalDuration);
      
          return () => clearInterval(interval);
        }, [number, targetNumber]);
      
        return (
          <View style={{ alignItems: 'center', ...styles }}>
            <Text style={{ fontSize: 40, color:theme.colors.textSecondary, fontWeight:'bold' }}>{number}</Text>
          </View>
        );
      };

    styles = StyleSheet.create({
        principalContainer: {
            width:"100%",
            alignItems:'center',
            justifyContent:'center'
        },
        boxResult:{
            marginLeft: screenWidth * 0.05,
            marginTop: screenHeight * 0.1
        },
        txtTitle:{
            color:theme.colors.textPrimary,
            fontSize:theme.fontSize.title,
            textAlign:'center',
            textShadowColor:'black',
            marginTop:screenHeight* 0
        },
        contenedor:{
            zIndex: 1,
            height: screenHeight * 0.2,
            width: screenWidth * 0.2,
            marginHorizontal: screenWidth*0.02,
            marginTop: screenHeight * -0.11

        },
        estrellas:{
            zIndex: 2,
            height: screenHeight * 0.15,
            width: screenWidth * 0.15,
            marginTop: screenHeight * 0.01,
            marginLeft: screenWidth * 0.04
        },
        txtNumber:{
            zIndex: 3,
            color: theme.colors.textSecondary,
            fontSize:40,
            marginLeft: screenWidth * 0.065,
            marginTop: screenHeight * -0.14,
            fontWeight:'bold'
        },
        txtPregunta:{
            zIndex: 3,
            fontSize: 10,
            fontWeight: 'bold',
            color: theme.colors.textSecondary,
            marginLeft: screenWidth * 0.06,
            marginTop: screenWidth * -0.02
            
        },
        contenedorFichas:{
            height: screenHeight * 0.4,
            width: screenWidth * 0.4,
            marginTop: screenHeight * -0.15
        },
        textFichas:{
            color:theme.colors.textPrimary,
            fontSize:11,
            marginTop: screenHeight * 0.04
        },
        coin:{
            height:screenHeight*0.25,
            width: screenWidth*0.25,
            marginTop: screenWidth * -0.65,
            marginLeft: screenWidth * -0.4
        },
        textCoin:{
            marginTop: screenHeight * -0.16,
            marginLeft: screenWidth * 0.05

        },
        animar:{
            position: 'relative',
            zIndex: 2,
            width: screenWidth * 0.8,
            height: screenHeight * 0.8,
            marginTop: screenHeight * -0.80,
            marginLeft: screenWidth * -0.05
        },
        btnSiguiente:{
            marginLeft: screenWidth * 0.25,
            marginTop:screenHeight*0.07
        },
        txtNuevaMision:{
            textAlign:'center',
            color: theme.colors.textSecondary,
            fontWeight: 'bold',
            fontSize: 18
        }
    })

    return (
        <View styles ={styles.principalContainer}>
            <Box
            shadowColor={"#123051"}
            backgroundColor={"#204D8D"}
            height={screenHeight * 0.6}
            width={screenWidth * 0.9}
            _style={styles.boxResult}
            >
                <Text style={styles.txtTitle}>¡Buen Trabajo!</Text>
                <View style={{flexDirection:'row',justifyContent:'center'}}>
                    <View>
                        <Image source={images.estrellaAmarilla} style={styles.estrellas} resizeMode="contain"></Image>
                        <Image source={images.contenedor} style={styles.contenedor} resizeMode="contain"></Image>
                        <Text style={styles.txtNumber}>20</Text>
                        <Text style={styles.txtPregunta}>Preguntas</Text>
                    </View>
                    <View>
                        <Image source={images.estrellaVerde} style={styles.estrellas} resizeMode="contain"></Image>
                        <Image source={images.contenedor} style={styles.contenedor} resizeMode="contain"></Image>
                        <Text style={[styles.txtNumber, {marginLeft: buenas < 10 ? screenWidth * 0.09 : screenWidth * 0.06}]}>{buenas}</Text>
                        <Text style={styles.txtPregunta}>Correctas</Text>
                    </View>
                    <View>
                        <Image source={images.estrellaRoja} style={styles.estrellas} resizeMode="contain"></Image>
                        <Image source={images.contenedor} style={styles.contenedor} resizeMode="contain"></Image>
                        <Text style={[styles.txtNumber,{marginLeft: malas < 10 ? screenWidth * 0.09 : screenWidth * 0.06}]}>{malas}</Text>
                        <Text style={styles.txtPregunta}>Incorrectas</Text>
                    </View>
                </View>
                <View style={{alignItems:'center'}}>
                    <Text style={styles.textFichas}>Monedas Obtenidas</Text>
                    <Image source={images.conteoMoneda} style={styles.contenedorFichas} resizeMode="contain"></Image>
                    <Image source={images.coin} resizeMode="contain" style={styles.coin}></Image>
                    <IncrementingNumber styles={styles.textCoin}/>
                </View>
                <ButtonGame
                height={screenHeight * 0.05}
                width={screenWidth * 0.4}
                backgroundColor={"#FFF"}
                shadowColor={"#8D8D8D"}
                _style={styles.btnSiguiente}
                >
                    <Text style={styles.txtNuevaMision}>Iniciar Mision #2</Text>
                </ButtonGame>
            </Box>
            <LottieView source={images.DAnimada} autoPlay loop style={styles.animar}></LottieView>
        </View>
    )
}

export default Results