
/**
 * Recebe um array com elementos, no formato "v; 0.4" 
 * retorna o somatório dos graus de pertinencia
* @param {string[]} elements - Array de strings no formato "nome; valor"
* @returns {number} Soma dos graus de pertinência extraídos
*/
function somaGrausPertinencia(elements) {
    let somaGraus = 0;
    elements.forEach(element => {
        const elementSplit = splitElement(element);
        somaGraus += parseFloat(elementSplit[1]);
    });
    return somaGraus;
}

/**
 * Divide uma string no formato "chave; valor" em duas partes,
 * separando a chave (ex: variável) do valor (ex: grau de pertinência).
 *
 * @param {string} element - String no formato "chave; valor"
 * @returns {string[]} Um array com duas posições: [chave, valor]
 */
function splitElement(element) {
    return element.split(';');
}

function questionTree(x) {
    return x / (x + 1);
}

function questionFour(x) {
    return 1 - x / 10;
}

function somaElementos(elementosA, elementosB) {
    let somaValores = 0;
    let minGrausAb = 0;

    const elementosASplit = splitElement(elementosA);
    const elementosBSplit = splitElement(elementosB);

    const valorA = parseFloat(elementosASplit[0]);
    const valorB = parseFloat(elementosBSplit[0]);

    const grausPertinenciaA = parseFloat(elementosASplit[1]);
    const grausPertinenciaB = parseFloat(elementosBSplit[1]);
    minGrausAb = minAB(grausPertinenciaA, grausPertinenciaB); //Pega o mínimo dos graus de AB
    somaValores = valorA + valorB;

    //console.log(`Soma valores: ${valorA} + ${valorB} = ${somaValores}, Graus de pertinencia: ${grausPertinenciaA}, ${grausPertinenciaB} = ${minGrausAb}`);
    return `${somaValores}; ${minGrausAb}`;
}

function minAB(grausA, grausB){
    if(grausA > grausB)
        return grausB;
    return grausA;
}

/**
 * Declara os elemetos e chama as funções
 */

let elementsI = ["v; 0.4", "w; 0.2", "x; 0.5", "y; 0.4", "z; 1"];
let solutionI = document.getElementById('solutionI');
solutionI.innerHTML = somaGrausPertinencia(elementsI);

let elementsII = ["x; 1", "y; 1", "z; 1"];
let solutionII = document.getElementById('solutionII');
solutionII.innerHTML = somaGrausPertinencia(elementsII);

/**
 * 
 */
let solutionTree = 0;
let solutionFour = 0;
for (let i = 0; i <= 10; i++) {
    solutionTree += questionTree(i);
    solutionFour += questionFour(i);
}

solutionIII = document.getElementById('solutionIII');
solutionIII.innerHTML = solutionTree;

solutionIIII = document.getElementById('solutionIIII');
solutionIIII.innerHTML = solutionFour;


/**
 * Questão 5
 */
const elementosA = ["-1; 0.5", "0; 1", "1; 0.5", "2; 0.3"];
const elementosB = ["2; 0.5", "3; 1", "4; 0.5", "5; 0.3"];
let somaElementosAB = [];
for (let i = 0; i < elementosA.length; i++) {
    for (let j = 0; j < elementosB.length; j++) {
        somaElementosAB.push(somaElementos(elementosA[i], elementosB[j]));
    }
}

let solutionQ5 = document.getElementById('solutionQ5');
solutionQ5.innerHTML = somaElementosAB;