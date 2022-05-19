// A variável 'var' consegue ser usada mesmo sem ter sido declarada antes. Não é mais utilizada, por ser mais propensa a bugs 

var altura1 = 5;
var comprimento1 = 7;

var area1 = altura1 * comprimento1;
console.log (area1);
var area1;

/////////// A variável 'let' só consegue ser usada depois que ela for declarada. Se a variável precisar ser reatribuida lá na frente (ex: resultado matemático) uso ela. 
let forma2 = 'retângulo2';
let altura2 = 5;
let comprimento2 = 7;
let area2;

if (forma2 === 'retângulo2') {
    area2 = altura2 * comprimento2;
} else {
    area2 = (altura2 * comprimento2)/2
}

console.log (area2);

// Sempre que criamos uma variável 'const', ela já precisa ser atribuida um valor. Então se eu precisar alterar o valor daquela variável lá na frente (como atribuir um resultado matemático nela), não posso usar const. Todos os outros casos, sempre usar const. 

// Forma errada abaixo. 

// const forma = 'quadrada'
// const altura = 5;
// const comprimento = 7; 
// const area ;

// if (forma === 'quadrado'){
//     area = altura * comprimento;
// } else {
//     area = (altura * comprimento)/2
// }

// console.log(area);

// FORMA CORRETA 

const forma = 'quadrado'
const altura = 5;
const comprimento = 7; 
let area ;

if (forma === 'quadrado'){
    area = altura * comprimento;
} else {
    area = (altura * comprimento)/2
}

console.log(area);