let num1 = 1
const num2 = 3
var msg = "Olá amigos! Este é o número:"

console.log(msg + num1)
console.log(msg , num1)
console.log(`${msg} mundo!`)
console.log(num1 + num2)
console.log(typeof num1)
console.log(typeof msg)
//métodos são funcionalidades prontas da lingugagem e que podem receber parâmetros

function Somar () {
    n1 = 2
    n2 = 5
    console.log("O resultado é:", n1 + n2)
//função é algo que eu crio, mas tudo no JS é função
}

Somar() // aqui ela é executada
Somar()


function SomarComParametros (n1, n2) {
    let resultado = "O resultado é: " + (n1 + n2)
    console.log(resultado)
}

SomarComParametros(16, 30)
SomarComParametros(70 ,54)


const Teste = (n) => {
    let result = n % 2

    if (result == 1) {
        return "Número ímpar"
    }

    return "Número par"
}

console.log (Teste(2))
console.log (Teste(7))
Teste(5) //essa linha não vai executar porque não tem console