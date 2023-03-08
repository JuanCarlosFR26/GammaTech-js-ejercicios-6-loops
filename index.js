import { allCountries } from "./countries.js";

// ## 💻 Ejercicios:Día 6

// ### Ejercicios: Nivel 1


const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

const mernStack = ["MongoDB", "Express", "React", "Node"];


// 1. Itera de 0 a 10 usando el bucle for, haga lo mismo usando los bucles while y do while
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

let i = 0;
while(i <= 10) {
    console.log(i);
    i++;
}

let index = 0
do {
    console.log(index);
    index++;
} while(index <= 10);

// 2. Itera 10 to 0 usando el bucle for, haga lo mismo usando los bucles while y do while

for (let i = 10; i >= 0; i--) {
    console.log(i);
}

let i2 = 10;
while(i2 >= 0) {
    console.log(i2);
    i2--;
}

let index2 = 10;
do {
    console.log(index2);
    index2--;
} while(index2 >= 0);

// 3. Itera de 0 a n usando el bucle for
// let n = parseInt(prompt('Introduzca un número del 1 al 20: '));
// for (let i = 0; i <= n; i++) {
//     console.log(i);
// }

// 4. Escribe un bucle que haga el siguiente patrón usando console.log():

//    ```js
//        #
//        ##
//        ###
//        ####
//        #####
//        ######
//        #######
//    ```

let str = '';
for (let i = 1; i <= 7; i++) {
    console.log(str.concat('#'.repeat(i)));
}

// 5. Usa un bucle para imprimir el siguiente patrón:

//    ```sh
//    0 x 0 = 0
//    1 x 1 = 1
//    2 x 2 = 4
//    3 x 3 = 9
//    4 x 4 = 16
//    5 x 5 = 25
//    6 x 6 = 36
//    7 x 7 = 49
//    8 x 8 = 64
//    9 x 9 = 81
//    10 x 10 = 100
//    ```

for (let i = 0; i <= 10; i++) {
    console.log(`${i} * ${i} = ${i * i}`);
}


// 6. Usando un bucle imprime el siguiente patrón:

//    ```sh
//     i    i^2   i^3
//     0    0     0
//     1    1     1
//     2    4     8
//     3    9     27
//     4    16    64
//     5    25    125
//     6    36    216
//     7    49    343
//     8    64    512
//     9    81    729
//     10   100   1000
//    ```

for (let i = 0; i <= 10; i++) {
    console.log(`${i} * ${i ** 2} = ${i ** 3}`);
}

// 7. Usa el bucle for para iterar de 0 a 100 e imprima solo números pares
for (let i = 0; i <= 100; i++) {
    if(i % 2 === 0) {
        console.log(i);
    }
}

// 8. Usa el bucle for para iterar de 0 a 100 e imprima solo números impares
for (let i = 0; i <= 100; i++) {
    if(i % 2 === 1) {
        console.log(i);
    }
}

// 9. Usa el bucle for para iterar de 0 a 100 e imprima los solo números primos
let tope=100;
let n=2;
let primos = "";
let primo = true;
for (let i = 1; i <=tope; i += 2) {
     primo = true;
       for (n=2; n <= parseInt(Math.sqrt(i)); n++) {
                 if (i % n === 0 && i !== n){
                   primo = false;
              break;
          }
     }
     if (primo === true) {
            primos += i + " ";
     }
}
console.log(primos)


// 10. Usa el bucle for para iterar de 0 a 100 e imprima la suma de todos los números.

//     ```sh
//     La suma de todos los números de 0 a 100 es 5050.
//     ```
let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i;
}
console.log(sum);

// 11. Usa el bucle para iterar de 0 a 100 e imprimir la suma de todos los pares y la suma de todos los impares.

//     ```sh
//     La suma de todos los pares de 0 a 100 es 2550. Y la suma de todos los impares de 0 a 100 es 2500.
//     ```
let sumPar = 0;
for (let i = 0; i <= 100; i++) {
    if(i % 2 === 0) {
        sumPar += i;
    }
}
console.log(sumPar);

// 12. Usa el bucle para iterar de 0 a 100 e imprimir la suma de todos los pares y la suma de todos los impares. Imprimir suma de pares y suma de impares como un array

//     ```sh
//       [2550, 2500]
//     ```

let sumImpar = 0;
for (let i = 0; i <= 100; i++) {
    if(i % 2 === 1) {
        sumImpar += i;
    }
}
console.log(sumImpar);
let arrSum = [];
arrSum.push(sumPar);
arrSum.push(sumImpar);
console.log(arrSum);

// 13. Desarrolla un pequeño script que genera una matriz de 5 números aleatorios
let arrRand = [];
for(let i = 0; i < 5; i++) {
    arrRand.push(Math.floor(Math.random() * 100));
}
console.log(arrRand);

// 14. Desarrolla un pequeño script que genera una matriz de 5 números aleatorios. Los números debe ser únicos
let arrRand2 = [];
for(let i = 0; i < 5; i++) {
    if(!arrRand2.includes(arrRand2[i])) {
        arrRand2.push(Math.floor(Math.random() * 100));
    }
}
console.log(arrRand2);

// 15. Desarrolla un pequeño script que genera un id aleatorio de seis caracteres:

//     ```sh
//     5j2khz
//     ```
let strRand = '';
let pattern = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789';
for (let i = 0; i <= 6; i++) {
    strRand += pattern.charAt(Math.floor(Math.random() * pattern.length));
}
console.log(strRand);


// ### Ejercicios: Nivel 2

// 1. Desarrolla un pequeño script que genera un id con cualquier número de caracteres aleatorios:

//    ```sh
//      fe3jo1gl124g
//    ```

//    ```sh
//      xkqci4utda1lmbelpkm03rba
//    ```

let strRand2 = '';
let pattern2 = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789';
let limit = Math.floor(Math.random() * 100);
for (let i = 0; i <= limit; i++) {
    strRand2 += pattern2.charAt(Math.floor(Math.random() * pattern2.length));
}
console.log(strRand2);

// 2. Escribe un script que genere un número hexadecimal aleatorio.

//    ```sh
//    '#ee33df'
//    ```
let hexRand = '';
let patternHex = 'abcdef0123456789';
let limitHex = Math.floor(Math.random() * 6);
for (let i = 0; i <= limitHex; i++) {
    hexRand += patternHex.charAt(Math.floor(Math.random() * patternHex.length));
}
console.log('#' + hexRand);

// 3. Escribe un script que genere un número de color rgb aleatorio.

//    ```sh
//    rgb(240,180,80)
//    ```
let colorRGB = [];
for(let i = 0; i < 3; i++) {
    colorRGB.push(Math.floor(Math.random() * 255));
}
console.log(`rgb(${colorRGB[0]},${colorRGB[1]},${colorRGB[2]})`);


// 4. Usando el array countries anterior, crea un array como el siguiente.

//    ```sh
//    ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
//    ```
let countriesUpper = [];
for ( const country of countries) {
    countriesUpper.push(country.toUpperCase());
}
console.log(countriesUpper);

// 5. Usando el array countries anterior, crea un array para saber la longitud de cada país.

//    ```sh
//    [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
//    ```
for(const country of countries) {
    console.log(`${country}: ${country.length}`);
}

// 6. Utiliza el array countries para crear la siguiente array de arrays

//    ```sh
//      [
//      ['Albania', 'ALB', 7],
//      ['Bolivia', 'BOL', 7],
//      ['Canada', 'CAN', 6],
//      ['Denmark', 'DEN', 7],
//      ['Ethiopia', 'ETH', 8],
//      ['Finland', 'FIN', 7],
//      ['Germany', 'GER', 7],
//      ['Hungary', 'HUN', 7],
//      ['Ireland', 'IRE', 7],
//      ['Iceland', 'ICE', 7],
//      ['Japan', 'JAP', 5],
//      ['Kenya', 'KEN', 5]
//    ]
//    ```
let countryArr = [];
for(const country of countries) {
    countryArr.push(`[${country}, ${(country[0] + country[1] + country[2]).toUpperCase()}, ${country.length}]`);
}
console.log(countryArr);

// 7. En el array countries anterior, verifica si hay un país que contenga la palabra 'land'. Si hay países que contienen 'land', imprimelo cono array. Si no hay ningún país que contenga la palabra'land', imprima 'Todos estos países no tienen la palabra land'.

//    ```sh
//    ['Finland','Ireland', 'Iceland']
//    ```
let arrLand = [];
for(const country of countries) {
    if(country.includes('land')) {
        arrLand.push(country)
    } else if(arrLand === []) {
        console.log('Todos estos países no tienen la palabra land')
    }

}
console.log(arrLand);

// 8. En el array countries anterior, verifica si hay un país que termina con una subcadena (substring) 'ia'. Si hay países que terminan con 'ia', imprimelo como un array. Si no hay ningún país que contenga la palabra 'ia', imprime 'Estos países no terminan con ia'.

//    ```sh
//    ['Albania', 'Bolivia','Ethiopia']
//    ```
let arrIa = [];
for (const country of countries) {
    if(country.endsWith('ia')) {
        arrIa.push(country);
    } else if(arrIa === []) {
        console.log('Estos países no terminan con ia')
    }
}
console.log(arrIa);

// 9. Usando el array countries anterior, encuentre el país que contiene la mayor cantidad de caracteres.

//    ```sh
//    Ethiopia
//    ```
let wordLen = '';
for(const country of countries) {
    if(country.length > wordLen.length) {
        wordLen = country;
    }
}
console.log(wordLen);

// 10. Usando el array countries anterior, encuentre el país que contiene sólo 5 caracteres.

//    ```sh
//    ['Japan', 'Kenya']
//    ```
let arrFive = [];
for(const country of countries) {
    if(country.length === 5) {
        arrFive.push(country);
    }
}
console.log(arrFive);

// 11. Encuentra la palabra más larga en el array webTechs
let webLen = '';
for(const web of webTechs) {
    if(web.length > webLen.length) {
        webLen = web;
    }
}
console.log(webLen);


// 12. Utiliza el array de webTechs para crear la el siguiente array de arrays:

//    ```sh
//    [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
//    ```
let arrWeb = [];
for(const web of webTechs) {
    arrWeb.push(`[${web}, ${web.length}]`);
}
console.log(arrWeb)

// 13. Una aplicación creada con MongoDB, Express, React y Node se denomina MERN stack app. Crea el acrónimo MERN usando el array mernStack
let mern = '';
for(const word of mernStack) {
    mern += (word[0]);
}
console.log(mern);

// 14. Iterar a través del array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] usando el bucle for o el bucle for of e imprime los elementos.
let arrTech = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];
for(const tech of arrTech) {
    console.log(`${tech}`);
}

// 15. Este es un array de frutas, ['banana', 'orange', 'mango', 'lemon'] invierte el orden usando un bucle sin usar el método reverse().
let fruits = ['banana', 'orange', 'mango', 'lemon'];
let fruitsReverse = [];
for(const fruit of fruits) {
    fruitsReverse.unshift(fruit);
}
console.log(fruits);
console.log(fruitsReverse);

// 16. Imprime todos los elementos del array como se muestra a continuación:

//    ```js
//    const fullStack = [
//      ["HTML", "CSS", "JS", "React"],
//      ["Node", "Express", "MongoDB"],
//    ];
//    ```

//    ```sh
//      HTML
//      CSS
//      JS
//      REACT
//      NODE
//      EXPRESS
//      MONGODB
//    ```
let arrTech2 = [[],[]];
for(const tech of arrTech) {
    if(arrTech2[0].length < 4) {
        arrTech2[0].push(tech);
    } else {
        arrTech2[1].push(tech);
    }
}
console.log(`[${arrTech2[0]}]\n[${arrTech2[1]}]`);

// ### Ejercicios: Nivel 3

// 1. Copia el array countries (Evita mutaciones)
let anotherCountries = [].concat(countries);
console.log(anotherCountries);

// 2. Los arrays son mutables. Crea una copia del array que no modifique el original. Ordena la copia del array y guárdala en una variable sortedCountries
let sortedCountries = anotherCountries.sort();
console.log(sortedCountries);

// 3. Ordena el array webTechs y el array mernStack
let anotherWebs = [].concat(webTechs);
let sortedWebs = anotherWebs.sort();
console.log(webTechs);
console.log(sortedWebs);

let anotherMern = [].concat(mernStack);
let sortedMern = anotherMern.sort()
console.log(mernStack);
console.log(sortedMern);

// 4. Extrae todos los países que contengan la palabra 'land' del [array countries](/arrays/countries.js) e imprimela como un array
let arrLand2 = [];
for(const country of allCountries){
    if(country.includes('land')) {
        arrLand2.push(country);
    }
}
console.log(arrLand2);
// 5. Encuentra el país que contiene la mayor cantidad de caracteres en el [array countries](/arrays/countries.js)
let myCountry = '';
for(const country of allCountries) {
    if(country.length > myCountry.length) {
        myCountry = country;
    }
}
console.log(myCountry);
// 6. Extrae todos los países que contienen la palabra 'land' del [array countries](/arrays/countries.js) e imprimela como un array
// Repetido

// 7. Extrae todos los países que contengan solo cuatro caracters del [array countries](/arrays/countries.js) e impremela como un array
let countryFour = [];
for(const country of allCountries) {
    if(country.length === 4) {
        countryFour.push(country);
    }
}
console.log(countryFour);

// 8. Extrae todos los paíse que contengan dos o más palabras del [array countries](/arrays/countries.js) e imprimela como un array
let countryTwo = [];
for(const country of allCountries) {
    for(const word of country) {
        let arrWords = word.split(' ');
        if(arrWords.length > 1) {
            countryTwo.push(country);
        }
    }
}
console.log(countryTwo);

// 9. Invertir el [array countries](/arrays/countries.js) y poner en mayúscula cada país y almacenalo en un array
let mayusCountries = [];
for(const country of allCountries) {
    mayusCountries.push(country.toUpperCase());
}
console.log(mayusCountries);