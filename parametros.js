// PARÂMETROS DA FUNÇÃO: Serve para a função receber as informações para rodar corretamente. Parâmetros tem ordem.

    // Você pode colocar um valor como parâmetro padrão. Caso esqueça de completar alguns dos parâmetros, ele substitue o valor esquecido. O valor adicionado se torna o 1º parâmetro automaticamente. 
    // Os prâmetros podem ter o mesmo nome dos parâmetros (ex: num1 e num2) porque ela executa a função e deixa os nomes livre novamente.
    // Boas práticas = Poucos argumentos. 

            // parâmetros que vão ser recebidos (arg 1, arg 2)
function soma (num1, num2) {
    return  num1 + num2;
}

    // parâmetros recebidos
console.log (soma(2,2));
console.log (soma(8,4));
console.log (soma(2,2));
console.log (soma(502,2));

function nomeIdade (nome, idade){
    return `Meu nome é ${nome} e minha idade é ${idade}`
};

console.log(nomeIdade("Katryn",25));

                        //parâmetro padrão (1)
function multiplica (numero1 = 1, numero2 = 1) {
    return numero1*numero2;
}

console.log(multiplica (soma(7,4), soma (8,6)));

// vai indicar só o 9, que foi o único parâmetro indicado. 
console.log(multiplica(9));

function cumprimentaPessoa(pessoa){
    console.log(`oi, ${pessoa}!`)
   }
   
cumprimentaPessoa('Helena');
//////////////////////////////////

function cumprimentar(){
    return 'Oi gente!'
   }
   
function cumprimentaPessoa(nomePessoa) {
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
   }
   
cumprimentaPessoa('Paula') // “Oi gente! Meu nome é Paula”