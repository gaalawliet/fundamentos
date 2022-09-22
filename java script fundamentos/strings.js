const escola = "cod3r";
console.log(escola.charAt(4)); //charAt retorna ate o caracter selecionado na string; esse caracter começa
//sendo contado do 0.
console.log(escola.charAt(6));
console.log(escola.charCodeAt(3)); //retorna o codigo/valor da tabela unicode
console.log(escola.indexOf("3")); //retorna a posição do primeiro valor encontrado.
console.log(escola.substring(1)); // retorna o valor sem o numero de caracteres selecionados na substring
console.log(escola.substring(0, 3)); // retorna o valor ate o caratacter selecionado
console.log("escola ".concat(escola).concat("!"))
console.log("escola " + escola + "!")
console.log(escola.replace(3, "e")); // replace para troca o caracter selecionado.
console.log("Ana, Maria, Pedro".split(",")); //split é usado para separar os caracteres selecionados retornando um array