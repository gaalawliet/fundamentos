const raio = 5.6;
const area = Math.PI * Math.pow(raio, 2);
/* O método Math.pow() é usado para aumentar 
 *a potência de um número, isto é,
 *o valor do número elevado a algum expoente. Uma vez que o Math.pow() é um méto
 *do estático de Math e, portanto, é sempre usado como Math.pow() e não como um 
 *método de um objeto criado da classe Math.*/
console.log(area.toFixed(2));
console.log(typeof Math);