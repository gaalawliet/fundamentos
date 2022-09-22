let a = 7;
let b = 94;

let temp = a; // temp = let/var temporaria
a = b;
b = temp;
console.log(a);
console.log(b);

// outra forma de troca o valor de variaveis é [a, b] = [b, a]
//trocar o valor de let a por let b ex; a=94 e b=7