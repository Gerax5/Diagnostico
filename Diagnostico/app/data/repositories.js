export default [
    {
        "Pregunta": null,
        "tipo": "a + b x c =",
        "variableCount": 3,
        "isNumeric":true,
        "a" : {
            "min":1,
            "max":10
        },
        "b": {
            "min":2,
            "max":10
        },
        "c":{
            "min":2,
            "max":10
        },
        "condicion": null,
        "opciones": [
            `(a + b) * c`,
            "a + b + c",
            "a * b + c",
            "a + (b * c)"
        ],
        "respuestaCorrecta": "a + (b * c)",
        "funcion": (a,b,c) => a + (b * c) 
        
    },
    {
        "Pregunta": null,
        "tipo": "a x b - c =",
        "variableCount": 3,
        "isNumeric":true,
        "a": {
            "min": 1,
            "max": 10
        },
        "b": {
            "min": 2,
            "max": 10
        },
        "c": {
            "min": 2,
            "max": 10
        },
        "condicion": ["a * b < c"],
        "opciones": [
            "a * b - c",
            "a * (b - c)",
            "a * b + c",
            "a + b - c"
        ],
        "respuestaCorrecta": "a * b - c",
        "funcion": (a,b,c) => a *b-c
    },
    {
        "Pregunta": null,
        "tipo": "a + c x b / c =",
        "variableCount": 3,
        "isNumeric":true,
        "a": {
            "min": 1,
            "max": 10
        },
        "b": {
            "min": 2,
            "max": 10
        },
        "c": {
            "min": 2,
            "max": 10
        },
        "condicion": null,
        "opciones": [
            "a + c * b / c",
            "(a + c * b) / c",
            "a + (c * b) * c",
            "a * (c * b) / c"
        ],
        "respuestaCorrecta": "a + c * b / c",
        "funcion": (a,b,c) => a + c * b / c
    },
    {
        "Pregunta": null,
        "tipo": "a + b + a x c - d  =",
        "variableCount": 4,
        "isNumeric":true,
        "a": {
            "min": 1,
            "max": 10
        },
        "b": {
            "min": 2,
            "max": 10
        },
        "c": {
            "min": 2,
            "max": 10
        },
        "d":{
            "min":1,
            "max":10
        },
        "condicion": null,
        "opciones": [
            "a + b + a * c - d",
            "a + (b + a) * c - d ",
            "a + b + a * (c - d)",
            "(a + b + a) * c - d"
        ],
        "respuestaCorrecta": "a + b + a * c - d",
        "funcion": (a,b,c,d) => a + b + a * c - d
    },
    {
        "Pregunta": "Selecciona el número que falta en la operación",
        "tipo": "a + ? x c = a + b * c",
        "variableCount": 3,
        "isNumeric":false,
        "a": {
            "min": 4,
            "max": 20
        },
        "b": {
            "min": 3,
            "max": 15
        },
        "c": {
            "min": 5,
            "max": 21
        },
        "condicion": null,
        "opciones": [
            "a",
            "b+1",
            "b-1",
            "b"
        ],
        "respuestaCorrecta": "b",
        "funcion": (a,b,c) => b
    },
    {
        "Pregunta": "Selecciona el signo que hace falta en la operación",
        "tipo": "a + c x b ? c = a + c * b / c",
        "variableCount": 3,
        "isNumeric":false,
        "a": {
            "min": 5,
            "max": 21
        },
        "b": {
            "min": 2,
            "max": 26
        },
        "c": {
            "min": 3,
            "max": 16
        },
        "condicion": null,
        "opciones": [
            "/",
            "+",
            "-",
            "*"
        ],
        "respuestaCorrecta": "/",
        "funcion": (a,b,c) => "/"
    },
    {
        "Pregunta": "Selecciona el signo que hace falta en la operación",
        "tipo": "a x d + c x b ? c = a * d + c * b / c",
        "variableCount": 4,
        "isNumeric":false,
        "a": {
            "min": 1,
            "max": 16
        },
        "b": {
            "min": 2,
            "max": 16
        },
        "c": {
            "min": 2,
            "max": 16
        },
        "d": {
            "min": 1,
            "max":10
        },
        "condicion": null,
        "opciones": [
            "/",
            "+",
            "-",
            "*"
        ],
        "respuestaCorrecta": "/",
        "funcion": (a,b,c) => "/"
    },
    {
        "Pregunta": null,
        "tipo": "a + b x c - d =",
        "variableCount": 4,
        "isNumeric":true,
        "a": {
            "min": 1,
            "max": 21
        },
        "b": {
            "min": 3,
            "max": 51
        },
        "c": {
            "min": 4,
            "max": 31
        },
        "d": {
            "min": 1,
            "max": 21
        },
        "condicion": ["d < b"],
        "opciones": [
            "a + b * c - d ",
            "(a + b) * c - d ",
            "a + b * (c - d) ",
            "(a + b) * (c - d)"
        ],
        "respuestaCorrecta": "a + b * c - d ",
        "funcion": (a,b,c,d) => a + b * c - d 
    },
    {
        "Pregunta": "Selecciona el signo que hace falta:",
        "tipo": "a +   b x c ? b = a + b * c / b",
        "variableCount": 3,
        "isNumeric":false,
        "a": {
            "min": 2,
            "max": 15
        },
        "b": {
            "min": 2,
            "max": 10
        },
        "c": {
            "min": 3,
            "max": 15
        },
        "condicion": null,
        "opciones": [
            "/",
            "x",
            "+",
            "-"
        ],
        "respuestaCorrecta": "/",
        "funcion": (a,b,c) => "/"
    },
    {
        //REVISAR ESTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa
        "Pregunta": "Selecciona la operación que debe realizarse primero para llegar a la respuesta correcta.",
        "tipo": "a x b + c - d",
        "variableCount": 4,
        "isNumeric":false,
        "evaluar":true,
        "a": {
            "min": 2,
            "max": 10
        },
        "b": {
            "min": 2,
            "max": 10
        },
        "c": {
            "min": 2,
            "max": 10
        },
        "d": {
            "min":2,
            "max":10
        },
        "condicion": null,
        "opciones": [
            "a x b",
            "b + c",
            "c - d",
            "a + c"
        ],
        "respuestaCorrecta": "a x b",
        "funcion": (a,b,c) => `${a} x ${b}`
    },
    {
        "Pregunta": "En una galaxia lejana se observaron distintos cuerpos celestes. Se pudieron distinguir a  A y b grupos de c B. ¿Qué expresión representa mejor la cantidad de astros observados?",
        "tipo": null,
        "variableCount": 3,
        "isNumeric":false,
        "evaluar":true,
        "A": ["planetas","asteroides","cometas"],
        "B": ["satélites","meteoritos","estrellas"],
        "a": {
            "min": 2,
            "max": 10
        },
        "b": {
            "min": 2,
            "max": 10
        },
        "c": {
            "min": 3,
            "max": 10
        },
        "condicion": null,
        "opciones": [
            "a + b x c",
            "a + b + c",
            "a x b + c",
            "b x c - a"
        ],
        "respuestaCorrecta": "a + b x c",
        "funcion": (a,b,c) => `${a} + ${b} x ${c}`
    },
    {
        "Pregunta": "Durante un recorrido espacial un grupo de A recorrieron a m hacia la parte más externa de la estación y b m hacia el espacio. Luego dieron c vueltas a la estación espacial cuya circunferencia mide d m. Para finalizar exploraron el espacio caminando e x f m en f viajes de la misma longitud. ¿Qué expresión representa mejor la distancia total que recorrieron?",
        "tipo": null,
        "variableCount": 6,
        "isNumeric":false,
        "evaluar":true,
        "A": ["planetas","científicos","exploradores espaciales"],
        "a": {
            "min": 2,
            "max": 200
        },
        "b": {
            "min": 2,
            "max": 100
        },
        "c": {
            "min": 3,
            "max": 10
        },
        "d": {
            "min":10,
            "max":50
        },
        "e": {
            "min":10,
            "max":50
        },
        "f": {
            "min":2,
            "max":10
        },
        "condicion": null,
        "opciones": [
            "a + b x c",
            "a + b + c",
            "a x b + c",
            "b x c - a"
        ],
        "respuestaCorrecta": "a + b + c x d + e x f",
        "funcion": (a,b,c,d,e,f) => `${a} + ${b} + ${c} x ${d} + ${e} x ${f}`
    },
    {
        "Pregunta": null,
        "tipo": "a + b + a x c - d  =",
        "variableCount": 4,
        "isNumeric":true,
        "a": {
            "min": 1,
            "max": 10
        },
        "b": {
            "min": 2,
            "max": 41
        },
        "c": {
            "min": 2,
            "max": 15
        },
        "d": {
            "min":1,
            "max":10
        },
        "condicion": ["d < c"],
        "opciones": [
            "a + b + a * c - d ",
            "(a + b) + a * c - d  ",
            "a + b + a * (c - d)",
            "a + (b + a) * c - d  "
        ],
        "respuestaCorrecta": "a + b + a * c - d",
        "funcion": (a,b,c,d) => a + b + a * c - d
    },
    {
        "Pregunta": null,
        "tipo": "a x b - c + e x d / e =",
        "variableCount": 5,
        "isNumeric":true,
        "a": {
            "min": 1,
            "max": 15
        },
        "b": {
            "min": 2,
            "max": 10
        },
        "c": {
            "min": 2,
            "max": 10
        },
        "d": {
            "min":1,
            "max":16
        },
        "e":{
            "min": 1,
            "max": 11
        },
        "condicion": ["c < a"],
        "opciones": [
            "a * b - c + e * d / e",
            "a * (b - c) + e * d / e",
            "a * b - (c + e * d / e)",
            "a * b + c + e * d / e"
        ],
        "respuestaCorrecta": "a * b - c + e * d / e",
        "funcion": (a,b,c,d,e) => a * b - c + e * d / e
    },
    {
        "Pregunta": null,
        "tipo": "a x d + c x b / c  - a + b =",
        "variableCount": 4,
        "isNumeric":true,
        "a": {
            "min": 1,
            "max": 16
        },
        "b": {
            "min": 2,
            "max": 16
        },
        "c": {
            "min": 2,
            "max": 16
        },
        "d": {
            "min":1,
            "max":16
        },
        "condicion": null,
        "opciones": [
            "a * d + c * b / c  - a + b",
            "a * (d + c * b) / c  - a + b ",
            "a * d + c * b / (c  - a) + b ",
            "a + d + c * b / c  - a + b "
        ],
        "respuestaCorrecta": "a * d + c * b / c  - a + b",
        "funcion": (a,b,c,d) => a * d + c * b / c  - a + b
    },
    {
        "Pregunta": null,
        "tipo": "a + b x c =",
        "variableCount": 3,
        "isNumeric":true,
        "a": {
            "min": 5,
            "max": 20
        },
        "b": {
            "min": 6,
            "max": 25
        },
        "c": {
            "min": 2,
            "max": 20
        },
        "condicion": null,
        "opciones": [
            "a + b * c",
            "(a + b) * c",
            "a + b + c",
            "a * b + c"
        ],
        "respuestaCorrecta": "a + b * c",
        "funcion": (a,b,c) => a + b * c
    },
    {
        "Pregunta": "Un A realizó a viajes de prueba en un año, de ellos solo b fueron exitosos. El año siguiente realizó c viajes cada mes y todos fueron considerados como exitosos. El último año viajó e veces y solo f de esos viajes fueron considerados como no exitosos. ¿Qué expresión representa mejor la cantidad de viajes exitosos realizados por el A?",
        "tipo": null,
        "variableCount": 6,
        "isNumeric":false,
        "evaluar":true,
        "A": ["satélite","cohete","dispositivo espacial","transbordador"],
        "a": {
            "min": 2,
            "max": 30
        },
        "b": {
            "min": 2,
            "max": 25
        },
        "c": {
            "min": 3,
            "max": 10
        },
        "d": {
            "min":12,
            "max":12
        },
        "e": {
            "min":10,
            "max":20
        },
        "f": {
            "min":2,
            "max":10
        },
        "condicion": ["a > b","f < e"],
        "opciones": [
            "a - b + c x d + e - f",
            "a - b + c + e - f",
            "a - b +  d + e - f",
            "a - b + c x d +  f"
        ],
        "respuestaCorrecta": "a - b + c x d + e - f",
        "funcion": (a,b,c,d,e,f) => `${a} - ${b} + ${c} x ${d} + ${e} - ${f}`
    },
    {
        "Pregunta": null,
        "tipo": "a x b - c =",
        "variableCount": 3,
        "isNumeric":true,
        "a": {
            "min": 5,
            "max": 20
        },
        "b": {
            "min": 10,
            "max": 25
        },
        "c": {
            "min": 4,
            "max": 15
        },
        "condicion": ["c < b"],
        "opciones": [
            "a * b - c",
            "a * (b - c)",
            "a + b - c",
            "a + b + c "
        ],
        "respuestaCorrecta": "a * b - c",
        "funcion": (a,b,c) => a * b - c
    },
    {
        "Pregunta": "Selecciona el número que falta en la operación",
        "tipo": "a + ___ x c = a + b * c",
        "variableCount": 3,
        "isNumeric":false,
        "a": {
            "min": 4,
            "max": 20
        },
        "b": {
            "min": 3,
            "max": 15
        },
        "c": {
            "min": 5,
            "max": 21
        },
        "condicion": null,
        "opciones": [
            "b",
            "a",
            "b-1",
            "b+1"
        ],
        "respuestaCorrecta": "b",
        "funcion": (a,b,c) => b
    },
    {
        "Pregunta": "Selecciona el número que falta en la operación",
        "tipo": "a ?  c x b / c = a + c * b / c",
        "variableCount": 3,
        "isNumeric":false,
        "a": {
            "min": 4,
            "max": 16
        },
        "b": {
            "min": 3,
            "max": 21
        },
        "c": {
            "min": 4,
            "max": 13
        },
        "condicion": null,
        "opciones": [
            "+",
            "x",
            "/",
            "-"
        ],
        "respuestaCorrecta": "+",
        "funcion": (a,b,c) => "+"
    }

]