let x = "";
console.log (x)
x = "oi";

// DECLARAÇÃO DE FUNÇÃO (1º FORMA, CLÁSSICA)
// Fica mais fácil de dar manutenção do código.
//Dentro ds parênteses, eu coloco a informação que ela vai receber. Embaixo, eu coloco como vão ser os comandos. 
    // 1º: Declaro a função e o que ela faz 
    // 2º: Indico o que eu quero que essa função retorne (return). Tem que ser a última linha da função. O que estiver depois, não é executado. 
    // 3º (externo): Executa


// declaração // nome // parâmetro
function imprimeTexto(texto) {
console.log (texto)
}

function soma (){
    return 2 + 2;

} 

imprimeTexto("oi!");
imprimeTexto("outro texto");
console.log (soma ());
imprimeTexto (soma());



