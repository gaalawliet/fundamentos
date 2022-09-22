//par nome/valor
const saudacao = "Opa" //contexto léxico 1
function exec() {
    const saudacao = "fala" // contexto léxico 2
    return saudacao
}
//objetos são grupos aninhados de apres nome/valor
const cliente = {
    nome: "pedro",
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: "rua muito legal",
        numero: 123
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)