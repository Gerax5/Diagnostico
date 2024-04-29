import React, { useState, useEffect } from 'react';
import { View, Text, Button, ImageBackground, StyleSheet, Image, Dimensions, TouchableHighlight, useWindowDimensions } from "react-native";
import LottieView from 'lottie-react-native';
import theme from '../themes'
import images from '../data/images';
import ButtonGame from './ButtonGame';
import repositories from '../data/repositories'
import Box from './Box';
import {router, useNavigation} from 'expo-router'

const generarNumeroAleatorio = (min, max) => {
    if (min === max) {
        return min;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const seleccionarElementoAleatorio = (lista) => {
    return lista[Math.floor(Math.random() * lista.length)];
}


const evaluarCondicion = (condiciones, variables) => {
    for (let condicion of condiciones) {

        let condicionReemplazada = condicion;
        for (let variable in variables) {
            condicionReemplazada = condicionReemplazada.replace(new RegExp(variable, 'g'), variables[variable]);
        }
        let resultado = new Function(`return ${condicionReemplazada};`)();

        
        if (!resultado) {
            return false;
        }
    }
    
    return true
};

const realizarOperacion = (operacion) => {
    let a, b, c, d,e,f;
    let condicionCumplida = false;

    while (!condicionCumplida) {
        a = generarNumeroAleatorio(operacion.a.min, operacion.a.max);
        b = generarNumeroAleatorio(operacion.b.min, operacion.b.max);
        c = generarNumeroAleatorio(operacion.c.min, operacion.c.max);
        let variables = {
            'a':a,
            'b':b,
            'c':c
        }
        if(operacion.variableCount == 4){
            d = generarNumeroAleatorio(operacion.d.min, operacion.d.max);
            variables = {
                'a':a,
                'b':b,
                'c':c,
                'd':d
            }
            console.log("Se acaba de crear la DDDDDD",d)
        }else if(operacion.variableCount == 6){
            d = generarNumeroAleatorio(operacion.d.min, operacion.d.max);
            e = generarNumeroAleatorio(operacion.e.min, operacion.e.max);
            f = generarNumeroAleatorio(operacion.f.min, operacion.f.max);
            variables = {
                'a':a,
                'b':b,
                'c':c,
                'd':d,
                'e':e,
                'f':f
            }
        }else if(operacion.variableCount == 5){
            d = generarNumeroAleatorio(operacion.d.min, operacion.d.max);
            e = generarNumeroAleatorio(operacion.e.min, operacion.e.max);
            variables = {
                'a':a,
                'b':b,
                'c':c,
                'd':d,
                'e':e
            }
        }
        console.log("AQUIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII")
        if (operacion.condicion) {
            try {
                condicionCumplida = evaluarCondicion(operacion.condicion,variables)
            } catch (error) {
                console.error("Error evaluando la condición:", error);
                return {
                    pregunta: operacion.tipo,
                    opciones: [],
                    respuestaCorrecta: "Error en la condición"
                };
            }
        } else {
            condicionCumplida = true;
        }
    }

    const resultadoFuncion = operacion.funcion

    if (resultadoFuncion) {
        let resultado = ""
        if(operacion.variableCount == 3){
            resultado = resultadoFuncion(a, b, c);
        }else if(operacion.variableCount == 6){
            resultado = resultadoFuncion(a, b, c,d,e,f);
        }
        else if(operacion.variableCount == 5){
            resultado = resultadoFuncion(a, b, c,d,e);
        }
        else{
            resultado = resultadoFuncion(a,b,c,d);
        }
        

        console.log(opciones)
        
        const opciones = operacion.opciones.map(opcion => {
            console.log("Opción antes del reemplazo:", opcion); 
            let opcionCalculada = ""
            if(operacion.variableCount == 3){
                opcionCalculada = opcion
                .replace(/a/g, a.toString())
                .replace(/b/g, b.toString())
                .replace(/c/g, c.toString());
            }else if(operacion.variableCount == 6){
                opcionCalculada = opcion
                .replace(/a/g, a.toString())
                .replace(/b/g, b.toString())
                .replace(/c/g, c.toString())
                .replace(/d/g, d.toString())
                .replace(/e/g, e.toString())
                .replace(/f/g, f.toString());
            }
            else if(operacion.variableCount == 5){
                opcionCalculada = opcion
                .replace(/a/g, a.toString())
                .replace(/b/g, b.toString())
                .replace(/c/g, c.toString())
                .replace(/d/g, d.toString())
                .replace(/e/g, e.toString());
            }
            else{
                opcionCalculada = opcion
                .replace(/a/g, a.toString())
                .replace(/b/g, b.toString())
                .replace(/c/g, c.toString())
                .replace(/d/g, d.toString());
            }
            
        
            console.log("Opción después del reemplazo:", opcionCalculada);
        
            try {
                console.log("Esto se va a caluclar",opcionCalculada)
                if(opcionCalculada.length>1){
                    if(operacion.evaluar){
                        return opcionCalculada
                    }else{
                        return Number(eval(opcionCalculada).toFixed(2));
                    }
                }else{
                    return opcionCalculada;
                }
            } catch (error) {
                console.error("Error evaluando la opción:", error);
                return null;
            }
        }).filter(opcion => opcion !== null);

        opciones.sort(() => Math.random() - 0.5);

        //const preg = operacion.tipo.replace
        console.log("PRegutaaaa",operacion.tipo)
        let preg = null
        if(operacion.tipo){
            if(operacion.variableCount == 3){
                preg = operacion.tipo
                    .replace(/a/g,a)
                    .replace(/b/g,b)
                    .replace(/c/g,c)+" ? "
            }
            else if(operacion.variableCount == 5){
                preg = operacion.tipo
                .replace(/a/g,a)
                .replace(/b/g,b)
                .replace(/c/g,c)
                .replace(/d/g,d)
                .replace(/e/g,e)+" ? "
            }else{
                preg = operacion.tipo
                .replace(/a/g,a)
                .replace(/b/g,b)
                .replace(/c/g,c)
                .replace(/d/g,d)+" ? "
            }
        }else{
            
            let A = seleccionarElementoAleatorio(operacion.A)
            let B = ""
            if(operacion.B){
                B = seleccionarElementoAleatorio(operacion.B)
            }
            

            preg = operacion.Pregunta
                .replace(" a "," "+a+" ")
                .replace(" b "," "+b+" ")
                .replace(/A/g,A)
                .replace("B",B)
                .replace(" c "," "+c+" ")
                .replace(" d "," "+d+" ")
                .replace(" e "," "+e+" ")
                .replace(" f "," "+f+" ");
            
        }
        

        if(!operacion.isNumeric){
            console.log("ENTRO a es numerico")
            if(operacion.evaluar){
                
            }else{
                preg = preg.split("=")
                res = preg[1]
                .replace(/a/g, a.toString())
                .replace(/b/g, b.toString())
                .replace(/c/g, c.toString())
                .replace("?","");
                console.log("ESTO SE VA A EVALUAR: "+res)
                res = eval(res)
                preg = preg[0]+" = "+res
            }
            
        }
        
        console.log("PR",preg)

        return {
            pregunta: preg,
            opciones,
            respuestaCorrecta: resultado,
            text: operacion.Pregunta ? (operacion.Pregunta < 100 ? operacion.Pregunta : null) : null
        };
    } else {
        return {
            pregunta: operacion.tipo,
            opciones: [],
            respuestaCorrecta: "Operación no soportada"
        };
    }
};



const Game = () => {
    const navigation = useNavigation();
    //Varibales que cambian
    const { width: screenWidth, height: screenHeight } = useWindowDimensions();
    const [indicePregunta, setIndicePregunta] = useState(0);
    const [resultado, setResultado] = useState(null);
    const [imagenesVisibles, setImagenesVisibles] = useState([false, false, false, false]);
    const [preguntaActual, setPreguntaActual] = useState(realizarOperacion(repositories[indicePregunta]));
    const [buttonColors, setButtonColors] = useState(["#6AB1B5", "#6AB1B5", "#6AB1B5", "#6AB1B5"]); 
    const [shadowButtonColors, setShadowButtonColors] = useState(["#448B8C","#448B8C","#448B8C","#448B8C"]);
    const [visibleStars, setVisibleStars] = useState([false,false,false,false]);
    const [nivel, setNivel] = useState(1);
    const [progress, setProgressBar] = useState(5);
    const [pressed, setPressed] = useState(false);
    //Buenas - Malas
    const [respuestas, setRespuestas] = useState([0,0]);

    console.log("pregunta: ",preguntaActual)

    useEffect(() => {
        setButtonColors(prevColors => {
            const newColors = [...prevColors];
            return newColors;
        });
    }, [resultado]);

    const verificarRespuesta = (respuesta, index) => {
        if(!pressed){
            setPressed(true)
            if (respuesta === preguntaActual.respuestaCorrecta) {
                setRespuestas([respuestas[0] + 1, respuestas[1]]);
                setButtonColors(prevColors => {
                    const newColors = [...prevColors];
                    newColors[index] = "#6FBA3B";
                    return newColors;
                });
                setShadowButtonColors(prevColors => {
                    const newColors = [...prevColors];
                    newColors[index] = "#4F9C2F";
                    return newColors;
                });
                setVisibleStars(prevVisible=>{
                    const newVisible = [...prevVisible];
                    newVisible[index] = true;
                    return newVisible;
                })
                setResultado('¡Correcto!');
            } else {
                setRespuestas([respuestas[0], respuestas[1] + 1]);
                setButtonColors(prevColors => {
                    const newColors = [...prevColors];
                    newColors[index] = "#E6333C";
                    return newColors;
                });
                setShadowButtonColors(prevColors => {
                    const newColors = [...prevColors];
                    newColors[index] = "#B52C41";
                    return newColors;
                });
                let indexpr = preguntaActual.opciones.indexOf(preguntaActual.respuestaCorrecta);
                setImagenesVisibles(prevVisible =>{
                    const newVisible = [...prevVisible];
                    newVisible[indexpr] = true;
                    return newVisible;
                })
                setResultado('Incorrecto');
            }
        }
        
    };

    const handleFinishGame = () => {
        // Navegar a la pantalla /components/games y pasar parámetros
        navigation.navigate("Components/Results", { buenas: resultado[0], malas: resultado[1] });
    };

    const siguientePregunta = () => {
        console.log("siguiente preguntaa")
        if (indicePregunta < repositories.length - 1) {
            const nuevoIndice = indicePregunta + 1;
            console.log("Nuevo indice",nuevoIndice)
            setIndicePregunta(nuevoIndice);
            const nuevaPregunta = realizarOperacion(repositories[nuevoIndice]);
            console.log("nueva pregunta",nuevaPregunta)
            setPreguntaActual(nuevaPregunta);
            console.log("pregunta actual:", preguntaActual)
            setButtonColors(["#6AB1B5", "#6AB1B5", "#6AB1B5", "#6AB1B5"])
            setShadowButtonColors(["#448B8C","#448B8C","#448B8C","#448B8C"])
            setImagenesVisibles([false,false,false,false])
            setVisibleStars([false, false, false, false])
            setNivel(nivel+1)
            setProgressBar(progress+5)
            setPressed(false)
            setResultado(null)
        } else {
            console.log("Fin de las preguntas");
            console.log("Beunas: "+respuestas[0]+"   Malas: "+respuestas[1])
            setResultado(null);
            handleFinishGame()
        }
    };

    /**
     * Styles en esta posicion por un cambio de pantalla pero si no ocurriera un cambio de pantalla se podria sacar y poner abajo tracionalmente
     */
    styles = StyleSheet.create({
        header:{
            alignItems:'center',
            marginTop: screenHeight * 0.04
        },
        textHeader:{
            textAlign:'center',
            color: theme.colors.textPrimary,
            fontSize: theme.fontSize.body,
            fontWeight: 'bold'
        },
        txtNivel:{
            textAlign:'left',
            color: theme.colors.textPrimary,
            fontSize: 15,
            fontWeight: 'bold'
        },
        progressBar:{
            height:"90%",
            width:progress+"%",
            borderRadius:25,
            marginTop: screenHeight * 0.006
        },
        preguntaPrincipal:{
            color:theme.colors.textSecondary,
            fontSize: theme.fontSize.title,
            textAlign:"center",
            fontWeight:'bold',
            width:"100%",
            
        },
        textRespuesta:{
            textAlign:'center',
            color:theme.colors.textPrimary,
            fontWeight:'bold'
        },
        btnRes:{
            marginHorizontal: screenWidth * 0.02
        },
        imagCheck:{
            height: screenHeight * 0.1,
            width: screenWidth * 0.1,
            alignSelf:'flex-end',
            marginTop: screenHeight * -0.14,
            marginLeft: screenWidth * 0.01
        },
        container:{
            height: screenHeight * 0.13,
            width: screenWidth * 0.45
        },
        siguientetxt:{
            color:theme.colors.textSecondary,
            fontSize: 20,
            fontWeight:'bold',
            textAlign:'center'
        },
        botonSiguiente:{
            alignContent:'center',
            width:"100%",
            justifyContent:'center',
            marginLeft: screenWidth * 0.25
        },
        txtPregunta:{
            textAlign:'center',
            color:"#8D8D8D",
            fontSize:10
        },
        estrellitas:{
            zIndex: 2,
            width: '100%',
            height: '100%',
            marginTop: screenHeight * -0.13
        }
    })

            const PlaceholderImage = ({size}) => (
                <Image source={images.question} style={{ width: size, height: size }} resizeMode='contain' /> // Establece el ancho y alto según tus necesidades
              );
        
            const ExpressionComponent = ({ expression }) => {
                if(expression.length < 100){
                    const parts = expression.split(' ? ');

                    const getFontSize = (text) => {
                        const baseFontSize = 50;
                        return Math.max(baseFontSize - text.length * 5, 12); 
                    };
                
                    const totalParts = parts.length;
                    let totalTextLength = 0;

                    return (
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent:'center', flexWrap:'wrap', marginTop: preguntaActual.text ? screenHeight * 0.03: 0 }}>
                        {parts.map((part, index) => {
                        const subParts = part.split(' ');
                            const partLength = subParts.join(' ').length;
                            totalTextLength += partLength;

                            return (
                                <React.Fragment key={index}>
                                    {subParts.map((subPart, subIndex) => {
                                        const fontSize = getFontSize(subPart);
                                        return (
                                            <Text key={subIndex} style={[{fontWeight:'bold',textAlign:"center",},{fontSize: fontSize}]}>{subPart}</Text>
                                        );
                                    })}
                                    {index < totalParts - 1 && <PlaceholderImage size={getFontSize('?')} />}
                                </React.Fragment>
                            );
                        })}
                    </View>
                    );
                }else{
                    return (
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent:'center', flexWrap:'wrap', marginTop: preguntaActual.text ? screenHeight * 0.03: 0 }}>
                            <Text style={{fontWeight:'bold',textAlign:"center", fontSize:14}}>{expression}</Text>
                        </View>
                    )
                }
            };
              


    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <View style={styles.header}>
                <Text style={styles.textHeader}>Desafíate</Text>
                <Image source={images.purpleLine}></Image>
            </View>
            <View>
                <Text style={styles.txtNivel}>Nivel {nivel}/20</Text>
                <Box backgroundColor={"#FFF"} shadowColor={"#8D8D8D"} height={screenHeight * 0.04} width={screenWidth * 0.9}>
                    <Image source={images.progress} resizeMode='cover' style={styles.progressBar}></Image>
                </Box>
            </View>
            <View>
                <Box backgroundColor={"#FFF"} shadowColor={"#8D8D8D"} height={screenHeight * 0.2} width={screenWidth * 0.9}>
                    {preguntaActual.text && <View style={{alignItems:'center', marginTop: screenHeight * -0.03}}>
                        <Text>{preguntaActual.text}</Text>
                    </View>
                    }
                    <ExpressionComponent expression={preguntaActual.pregunta} />
                </Box>
                <View>
            <View style={{ flexDirection: 'row', justifyContent:'center', alignItems:'center' }}>
                {preguntaActual.opciones.slice(0, 2).map((opcion, index) => (
                    <View style={styles.container}>
                        <ButtonGame
                        key={index}
                        backgroundColor={buttonColors[index]} 
                        shadowColor={shadowButtonColors[index]} 
                        onPress={() => verificarRespuesta(opcion, index)}
                        height={screenHeight * 0.1}
                        width={screenWidth * 0.4}
                        _style={styles.btnRes}>
                        <Text style={[styles.textRespuesta, { fontSize: opcion.length < 6 ? 40 : 28 }]}>{opcion.toString()}</Text>
                        </ButtonGame>
                        {imagenesVisibles[index] && <Image source={images.check} style={styles.imagCheck} resizeMode='contain'></Image>}
                        {visibleStars[index] && <LottieView source={images.estrellitas} autoPlay loop={true} style={styles.estrellitas}></LottieView>}
                        
                    </View>
                    
                ))}
            </View>
            <View style={{ flexDirection: 'row', justifyContent:'center', alignItems:'center'}}>
                {preguntaActual.opciones.slice(2, 4).map((opcion, index) => (
                    <View style={styles.container}>
                        <ButtonGame
                            key={index+2}
                            backgroundColor={buttonColors[index+2]} 
                            shadowColor={shadowButtonColors[index+2]} 
                            onPress={() => verificarRespuesta(opcion, index+2)}
                            height={screenHeight * 0.1}
                            width={screenWidth * 0.4}
                            _style={styles.btnRes}
                            disabled={pressed}>
                                <Text style={[styles.textRespuesta, { fontSize: opcion.length < 6 ? 40 : 28 }]}>{opcion.toString()}</Text>
                        </ButtonGame>
                        {imagenesVisibles[index+2] && <Image source={images.check} style={styles.imagCheck} resizeMode='contain'></Image>}
                        {visibleStars[index+2] && <LottieView source={images.estrellitas} autoPlay loop={true} style={styles.estrellitas}></LottieView>}
                    </View>
                ))}
            </View>
            </View>
                {resultado && (
                <View style={styles.botonSiguiente}>
                    <ButtonGame
                    backgroundColor={"#FFF"}
                    shadowColor={"#8D8D8D"}
                    height={screenHeight * 0.05}
                    width={screenWidth * 0.4}
                    onPress={siguientePregunta}
                    disabled={pressed}
                    >
                        <Text style={styles.siguientetxt}>Siguiente</Text>
                    </ButtonGame>
                </View>
            )} 
            </View>
            
        </View>
    );
}

export default Game;