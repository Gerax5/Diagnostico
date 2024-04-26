import React, { useState, useEffect } from 'react';
import repositories from "../data/repositories";
import { View, Text, Button } from "react-native";

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
    let condicionReemplazada = null
    if(condicion)
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
                /*if(operacion.variableCount == 3){
                    condicionCumplida = evaluarCondicion(operacion.condicion, a, b, c);
                }else if(operacion.variableCount == 6){
                    condicionCumplida = evaluarCondicion(operacion.condicion, a, b, c,d,e,f);
                }
                else if(operacion.variableCount == 5){
                    condicionCumplida = evaluarCondicion(operacion.condicion, a, b, c,d,e);
                }
                else{
                    console.log("ENTROOO AQUIIII ",d)
                    condicionCumplida = evaluarCondicion(operacion.condicion, a, b, c, d);
                }*/
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
                        return eval(opcionCalculada);
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
                    .replace(/c/g,c)+" ?"
            }
            else if(operacion.variableCount == 5){
                preg = operacion.tipo
                .replace(/a/g,a)
                .replace(/b/g,b)
                .replace(/c/g,c)
                .replace(/d/g,d)
                .replace(/e/g,e)+" ?"
            }else{
                preg = operacion.tipo
                .replace(/a/g,a)
                .replace(/b/g,b)
                .replace(/c/g,c)
                .replace(/d/g,d)+" ?"
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
                .replace(" f "," "+f+" ")
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
