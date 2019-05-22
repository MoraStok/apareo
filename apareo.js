const fs = require('fs')

/**
 * lee y devuelve el contenido de un archivo como texto en 'utf-8'
 * @param {string} ruta 
 * @return {string} el texto leído
 */
const ruta = './txt.txt';
function leerArchivoComoString(ruta) {
    const data = fs.readFileSync(ruta, 'utf-8');
    console.log(data);
}

/**
 * escribe el texto en el archivo de la ruta. si no existe, y no se indica que se lo cree, debe lanzar un error.
 * @param {string} ruta 
 * @param {string} texto 
 */
function escribirTextoEnArchivo(ruta, texto, shouldCreateIfNotExists) {
    if (shouldCreateIfNotExists){
        fs.writeFileSync(ruta, texto, {flag: 'w'});
        console.log("I'm in");
    }else{
        console.log("I'm not in");
    }
}

/**
 * separa el string ante cada ocurrencia del separador, y agrega al array resultado siempre que pueda
 * transformar al fragmento de string en numero.
 * @param {string} str 
 * @param {string} separador
 * @returns {number[]} array de numeros
 */
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

/**
 * concatena todos los numeros entre sí, intercalando un separador entre número y número.
 * @param {number[]} arr 
 * @param {string} separador 
 * @returns {string} el nuevo string
 */
function transformarArrayDeNumerosAUnSoloString(arr, separador) {
    return arr.join(separador);
}

/**
 * toma dos arrays de números ordenados y en forma eficiente los combina en uno solo, aún ordenado
 * @param {number[]} arrA un array de números ordenados
 * @param {number[]} arrB otro array de números ordenados
 * @returns {number[]} un nuevo array de números ordenados
 */
function combinarDosArrays(arrA, arrB) {
    let myArray = arrA.concat(arrB);
    myArray.sort(function(a,b){
        return a - b;
    });
    return myArray;
}

/**
 * toma un array de muchos arrays de números ordenados y los combina en uno solo, aún ordenado
 * @param {number[][]} arrs el array de arrays de números que quiero combinar
 * @returns {number[]} el nuevo array de números ordenados
 */
function combinarNArrays(arrs) {
    while(arrs.length > 1){
        arrs[1] = combinarDosArrays(arrs[0], arrs[1]);
        arrs.shift();
    }
    return arrs[0];
}

/**
 * devuelve el indice de la posicion con el menor valor de un array.
 * @param {number[]} valores el array de numeros
 * @returns {number} el indice del menor valor
 */
function findMin(valores){
    return Math.min.apply(null, valores);
}
