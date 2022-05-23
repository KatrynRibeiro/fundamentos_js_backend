// Também conhecido como operador condicional (if - else).

const idadeMinima = 18; 
const idadeCliente = 16;

// forma 1
if (idadeCliente >= idadeMinima) {
    console.log("cerveja")
} else{
    console.log("suco")
}

// forma 2. Colocar as opções em ordem de true ou false. Só colocar se tiver 1 condição, senão fica grande.
                        // condição       // true  : // false 
console.log (idadeCliente >= idadeMinima ? "cerveja" : "suco")