const prod1 = {};
prod1.nome = "celular";
prod1.preco = 4998.90;
prod1["desconto legal"] = 0.40; // evitar atributos com espaço
console.log(prod1);

const prod2 = {
    nome: "camisa polo",
    preco: 79.90
}
'{"nome": "camisa polo", "preco": 79.90}' // exemplo de json
console.log(prod2);