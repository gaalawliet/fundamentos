const a = { name: "teste" };
const b = a
b.name = "opa";
console.log(a);
let c = 3;
let d = c;
d++;
console.log(c);
console.log(d);


let valor // não inicializada
console.log(valor);
valor = null // ausencia de valor
console.log(valor);
// console.log(valor.toString()) // erro!
const produto = {};
console.log(produto.preco);
console.log(produto);
produto.preco = 3.50
console.log(produto);
produto.preco = undefined //evitar atribuir undefined
console.log(!!produto.preco);
//delete produto.preco;
console.log(produto);
produto.preco = null // sem preço
console.log(!!produto.preco);
console.log(produto);