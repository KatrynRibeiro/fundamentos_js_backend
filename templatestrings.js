const nome = "Katryn";
const sobrenome = "Ribeiro";
const idade = 2022 - 1996;
const cidade = "Valença";
const nomeCompletoErrado = "Meu nome é: " +nome+ " " +sobrenome; // Não é recomendado.

console.log(nomeCompletoErrado);

// na template string, vamos escrever a nossa string normal. Mas ao invés de ficarmos colocando todos esses '+', colocamos o símbolo de '$' e {}. 

// Modo correto. Trocamos as aspas do começo pelo acento grave (da crase (`))

const apresentacao = `Meu nome é ${nome}, minha idade é ${idade} e nasci na cidade de ${cidade}`;
console.log (apresentacao);

// Também aceita quebra de linha.