const usuarioLogado = true; // O v e f sempre é em letra minuscula (no javascript)
const contaPaga = false;

// truthy (ou 1) e falsy (ou 0 ou strings vazias ("")) são palavras/numeros com significados equivalentes. 

console.log(0 == false);
console.log("" == false);

//undefined = variável sem valor atribuído. 
// null = representa vazio, não significa nada. O retorno vem 'object'. 

let numero = 3 ;
let texto = "Alura";
let minhaVar;
let varNull = null;

console.log(typeof numero); // typeof = Qual é o tipo de variável que está sendo usada.   
console.log(typeof texto);
console.log(typeof minhaVar); 
console.log(typeof varNull);