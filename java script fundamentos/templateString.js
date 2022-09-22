const nome = "rebeca";
const concatenacao = "olá " + nome + "!"
const template = `
olá ${nome}! 
` // vai sempre interpretar o que esta dentro de ${name}
console.log(concatenacao, template);
//expressões...
console.log(`1+1 = ${ 1 + 1 }`);
const up = texto => texto.toUpperCase() // => toUpperCase para dexar o texto em maisculo
console.log(`ei... ${up("cuidado")}!`); // essa expressão chama a função