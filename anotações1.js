// O javascript é uma linguagem tipada dinâmica (ou seja, não preciso declarar o tipo da variável (string, número ou booleano)).

// Também é uma linguagem multiparadgma, ou seja, conseguimos resolver um problema de várias formas diferentes.

// E26 ou ES2015 é a versão do Javascript que saiu em 2015. Versão mais famosa. 

// Ele também é uma linguagem interpretada, ou seja, escrevemos o código e ele é executado (terá um navegador que irá executar(interpretador)). Não precisa passar por um compilador, mas é mais lenta. 
        // Já a linguagem compilada (outro tipo) o nosso código vai passar primeiro por um programa chamado compilador, que vai transformar o nosso código em linguagem de máquina (que o computador entende). 

// O NodeJS é um ambiente de execução do Javascript server-side (interpretador back-end).

// Console.log 
        //Uma ferramenta que tem tanto no Node quanto nos navegadores. Usamos eles pra colocar frases "pra fora" da nossa aplicação. A parte 'log', quer dizer que estamos colocando um registro dentro desse console(registra no terminal o que passamos entre os parênteses). 

// Tratamento de erro 
        // Usado para exigir mensagens de erro ao usuário. 
        // Utilizamos o console.error para descrever algum erro que a nossa aplicação encontrou             Ex: Se o usuário colocar um tipo de dado, pode dar algum erro. 
        // É sempre bom dar saída desses erros (para saber em qual parte que foi detectada).

let minhaVar = true;

console.log(256);
console.log("Katryn Ribeiro");
console.log(minhaVar);

console.error("deu erro!");

// Os ' = = ' faz a comparação e conversão implícita (antes de fazer a comparação).
// Os ' ===' faz a comparação dos valores, sem converter antes. (Compara o valor e o tipo de dado). As boas práticas pedem pra gente usar essa, em detrimento dos '==' e quando for fazer a conversão, ser de forma explícita (Number () e String ()).

const numero = 5;
const texto = "5"; 

console.log(numero === texto); // false

console.log (typeof numero);
console.log (typeof texto);
// typeof: descubro o tipo de dado que está sendo usado na variável. 

// Outros comparadores: 
        // ||: Operador “ou”, retorna true caso uma condição seja válida;
        // &&: Operador “e”, retorna true somente se todas as condições forem válidas;
