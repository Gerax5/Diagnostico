import React, { useState, useEffect } from 'react';
import repositories from "../data/repositories";
import { View, Text, Button } from "react-native";

const generarNumeroAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};


const evaluarCondicion = (condicion, a, b, c, d=null) => {
    let condicionReemplazada = null
    if(d==null){
        condicionReemplazada = condicion
        .replace(/a/g, a)
        .replace(/b/g, b)
        .replace(/c/g, c);
    }else{
        console.log("SI SE CAMBIOOO la D")
        condicionReemplazada = condicion
        .replace(/a/g, a)
        .replace(/b/g, b)
        .replace(/c/g, c)
        .replace(/d/g, d)
    }
    

    return new Function(`return ${condicionReemplazada};`)();
};

const realizarOperacion = (operacion) => {
    let a, b, c, d;
    let condicionCumplida = false;

    while (!condicionCumplida) {
        a = generarNumeroAleatorio(operacion.a.min, operacion.a.max);
        b = generarNumeroAleatorio(operacion.b.min, operacion.b.max);
        c = generarNumeroAleatorio(operacion.c.min, operacion.c.max);
        if(operacion.variableCount == 4){
            d = generarNumeroAleatorio(operacion.d.min, operacion.d.max);
            console.log("Se acaba de crear la DDDDDD",d)
        }
        console.log("AQUIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII")
        if (operacion.condicion) {
            try {
                if(operacion.variableCount == 3){
                    condicionCumplida = evaluarCondicion(operacion.condicion, a, b, c);
                }else{
                    console.log("ENTROOO AQUIIII ",d)
                    condicionCumplida = evaluarCondicion(operacion.condicion, a, b, c, d);
                }
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
        const resultado = resultadoFuncion(a, b, c);

        console.log(opciones)
        
        const opciones = operacion.opciones.map(opcion => {
            console.log("Opción antes del reemplazo:", opcion); 
            let opcionCalculada = ""
            if(operacion.variableCount == 3){
                opcionCalculada = opcion
                .replace(/a/g, a.toString())
                .replace(/b/g, b.toString())
                .replace(/c/g, c.toString());
            }else{
                opcionCalculada = opcion
                .replace(/a/g, a.toString())
                .replace(/b/g, b.toString())
                .replace(/c/g, c.toString())
                .replace(/d/g, d.toString());
            }
            
        
            console.log("Opción después del reemplazo:", opcionCalculada);
        
            try {
                console.log("Esto se va a caluclar",opcionCalculada)
                return eval(opcionCalculada);
            } catch (error) {
                console.error("Error evaluando la opción:", error);
                return null;
            }
        }).filter(opcion => opcion !== null);

        opciones.sort(() => Math.random() - 0.5);

        //const preg = operacion.tipo.replace
        console.log("PRegutaaaa",operacion.tipo)
        let preg = null
        if(operacion.variableCount){
            preg = operacion.tipo
                .replace(/a/g,a)
                .replace(/b/g,b)
                .replace(/c/g,c)+" ?"
        }else{
            preg = operacion.tipo
            .replace(/a/g,a)
            .replace(/b/g,b)
            .replace(/c/g,c)
            .replace(/d/g,d)+" ?"
        }
        
        console.log("PR",preg)

        return {
            pregunta: preg,
            opciones,
            respuestaCorrecta: resultado
        };
    } else {
        return {
            pregunta: operacion.tipo,
            opciones: [],
            respuestaCorrecta: "Operación no soportada"
        };
    }
};



const Main = () => {
    const [indicePregunta, setIndicePregunta] = useState(0);
    const [resultado, setResultado] = useState(null);
    const [preguntaActual, setPreguntaActual] = useState(realizarOperacion(repositories[indicePregunta]));

    console.log("pregunta: ",preguntaActual)

    const verificarRespuesta = (respuesta) => {
        if (respuesta === preguntaActual.respuestaCorrecta) {
            setResultado('¡Correcto!');
        } else {
            setResultado('Incorrecto');
        }
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
            setResultado(null)
        } else {
            console.log("Fin de las preguntas");
            setResultado(null);
        }
    };

    /*useEffect(() => {
        console.log("useEffect ejecutado");
        setPreguntaActual(realizarOperacion(repositories[indicePregunta]));
    }, [indicePregunta]);*/

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>{preguntaActual.pregunta}</Text>

            {preguntaActual.opciones.map((opcion, index) => (
                <Button 
                    key={index} 
                    title={opcion.toString()} 
                    onPress={() => verificarRespuesta(opcion)}
                />
            ))}

            {resultado && (
                <>
                    <Text>{resultado}</Text>
                    <Button title="Siguiente" onPress={siguientePregunta} />
                </>
            )}
        </View>
    );
}

export default Main;
