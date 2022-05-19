// conversão implícita. Permite que converta um tipo de dado em outro. Pode trazer bug's pro código. 
const numero = 456; 
const numeroString = "456";

console.log(numero == numeroString); 
// As comparações sempre vem em V ou F. Se eu usar 3 '=' ela vai dar false, porque eu estou perguntando se o mesmo conteúdo e tipo (e tipo não é, porque a 2º é um texto). Mas se eu usar somente 2 '=', ela retorna como true, porque o javascript converte automaticamente e diz que é o mesmo conteúdo. 

console.log(numero + numeroString); // Aqui, o bug do Javascript é que ele converte o número em uma string, e o sinal de '+' acaba sendo usado como concatenação. 

// conversão explicita 
    // Number (); converte em número. Tem que se assegurar que não tenha letras ou caracters.
    // String(); Converte em string;
console.log(numero + Number(numeroString)); 
