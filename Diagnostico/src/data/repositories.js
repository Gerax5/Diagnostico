export default [
    {
        "tipo": "a + b x c =",
        "variableCount": 3,
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
        "tipo": "a x b - c =",
        "variableCount": 3,
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
        "condicion": "a * b < c",
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
        "tipo": "a + c x b / c =",
        "variableCount": 3,
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
        "tipo": "a + b + a x c - d  =",
        "variableCount": 4,
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
    }
]