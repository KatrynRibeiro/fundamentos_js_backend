//Função tradicional
function apresentar (nome) {
    return `Meu nome é ${nome}`
}
//Função Arrow (const nome da const = parâmetro => return)
const apresentarArrow = nome => `Meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

// Se a função Arrow tiver +1 linha, vai precisar usar chaves e return obrigatório. 

const somaNumerosPequenos = (num1, num2) => {
    if (num1 || num2 > 10){
        return "Somente números de 1 a 9"
    } else {
        return num1+num2;
    }
}
// Hoisting: Arrow function se comporta como expressão.