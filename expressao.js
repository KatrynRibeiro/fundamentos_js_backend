const soma = function (num1, num2) {return num1 + num2}
console.log(soma (1,1))

// Na expressão de função, não temos o nome da função. Criamos uma variável e atribuímos uma função a ela. Precisa ser uma const, pra que não possa mudar a variável ao longo do código (quem tem nome é só a const).

// Na expressão, não posso executar uma função antes de listar (porque pra usar uma const, preciso declarar ela primeiro). 
// Na função tradicional, podemos fazer isso (porque o Javascript lê todas as funções e variáveis do código primeiro, antes de executar (Hoisting)). 

console.log(apresentar ());
function apresentar (){
    return "olá";
}