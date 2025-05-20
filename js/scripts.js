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

/**
 * Apenas define a funcao para ser utilizada 
 * @param {*} x 
 * @returns 
 */
function questionTree(x) {
    return x / (x + 1);
}

/**
 * Apenas define a funcao para ser utilizada 
 * @param {*} x 
 * @returns 
 */
function questionFour(x) {
    return 1 - x / 10;
}

/**
 * Escreve o resultado na tela
 * @param {*} referenciaId 
 * @param {*} solucao 
 */
function escreveResultado(referenciaId, solucao){
    let solution = document.getElementById(referenciaId);
    solution.innerHTML = solucao;
}

/**
 * Recebe os  subconjuntos fuzzy A e B
 * Soma a parte numérica e optem o mínimo dos graus de pertinência
 * @param {*} elementosA 
 * @param {*} elementosB 
 * @returns 
 */
function somaElementos(elementosA, elementosB) {
    let somaValores = 0;
    let minGrausAb = 0;

    const elementosASplit = splitElement(elementosA); //Quebra a string e retorna um array "chave; valor" -> [chave, valor]
    const elementosBSplit = splitElement(elementosB); //Quebra a string e retorna um array "chave; valor" -> [chave, valor]

    const valorA = parseFloat(elementosASplit[0]); //Recupera apenas a parte numérica [0]
    const valorB = parseFloat(elementosBSplit[0]); //Recupera apenas a parte numérica [0]

    const grausPertinenciaA = parseFloat(elementosASplit[1]);
    const grausPertinenciaB = parseFloat(elementosBSplit[1]);
    minGrausAb = minAB(grausPertinenciaA, grausPertinenciaB); //Pega o mínimo dos graus de AB
    somaValores = valorA + valorB;

    //console.log(`Soma valores: ${valorA} + ${valorB} = ${somaValores}, Graus de pertinencia: ${grausPertinenciaA}, ${grausPertinenciaB} = ${minGrausAb}`);
    return `${somaValores}; ${minGrausAb}`;
}

/**
 * Obtem o mínimo dos graus de permitência
 * @param {*} grausA 
 * @param {*} grausB 
 * @returns 
 */
function minAB(grausA, grausB){
    if(grausA > grausB)
        return grausB;
    return grausA;
}

/**
 * ******************** Declara os elemetos e chama as funções ********************
 */

let elements = ["v; 0.4", "w; 0.2", "x; 0.5", "y; 0.4", "z; 1"]; //Define o subsconjunto fuzzy
let solutionQI = document.getElementById('solutionI'); //Pega a referencia atraves do ID
solutionQI.innerHTML = somaGrausPertinencia(elements); //Escreve o resultado

elements = ["x; 1", "y; 1", "z; 1"];
let solutionQII = document.getElementById('solutionII');
solutionQII.innerHTML = somaGrausPertinencia(elements);


/**
 * Questao 4: Item III E IIII
 */
let solutionTree = 0;
let solutionFour = 0;
for (let i = 0; i <= 10; i++) {
    solutionTree += questionTree(i);
    solutionFour += questionFour(i);
}

solutionQIII = document.getElementById('solutionIII');
solutionQIII.innerHTML = solutionTree;

solutionQIIII = document.getElementById('solutionIIII');
solutionQIIII.innerHTML = solutionFour;


/**
 * Questão 5: Extensao de Zadeh, soma x + y.
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
