
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