{
    let preco = 19.90;
    let desconto = 0.4;

    console.log(19.9 * 0.6);
    console.log(preco * (1 - desconto));
    let precoComDesconto = preco * (1 - desconto);
    console.log(precoComDesconto);
}
//codigo limpo abaixo
{
    let preco = 199.99;
    let desconto = 0.4;
    let precoComDesconto = preco * (1 - desconto);
    console.log(precoComDesconto);

    let nome = "teclado"; // String (texto)= let/var que é uma sequencia de simbolos
    let categoria = "perifericos";
    console.log("produto:" + nome + ", categoria:" + categoria + ", Preço:" + preco + ", desconto:" + desconto +
        ", preço com desconto:" + precoComDesconto);
}