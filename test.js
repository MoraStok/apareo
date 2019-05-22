const fs = require('fs');
const ruta = './txt.txt';
var str = "123 | 456 | 789 | 1bc | 10";
var arr = [123, 456, 789, 10];
var separador = ",";
var array1 = [1, 5, 10];
var array2 = [2, 3, 8, 11];
var arrs =  [ [1,3,4],[9,1,0] ];
let lerr = combinarNArrays(arrs);
console.log(lerr);



function leerArchivoComoString(ruta) {
    const data = fs.readFileSync(ruta, 'utf-8');
    console.log(data);
}

function escribirTextoEnArchivo(ruta, texto, shouldCreateIfNotExists) {
    if (shouldCreateIfNotExists){
        fs.writeFileSync(ruta, texto, {flag: 'w'});
        console.log("si");
    }else{
        console.log("no");
    }
}

function transformarStringEnArrayDeNumeros(str, separador) {
    let resultado = [];
    let s = str.split(separador);
    for(let l of s){
        if(!isNaN(l)){
            resultado.push(parseInt(l));
        }
    }
    return resultado;
}

function transformarArrayDeNumerosAUnSoloString(arr, separador) {
    return arr.join(separador);
}

function combinarDosArrays(arrA, arrB) {
    let myArray = arrA.concat(arrB);
    myArray.sort(function(a,b){
        return a - b;
    });
    return myArray;
}

function combinarNArrays(arrs) {
    while(arrs.length > 1){
        arrs[1] = combinarDosArrays(arrs[0], arrs[1]);
        arrs.shift();
    }
    return arrs[0];
}

function findMin(valores){
    return Math.min.apply(null, valores);
}