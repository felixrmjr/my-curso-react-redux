const produto = {
    nome: 'Caneta Bic Preta',
    preco: 1.90,
    desconto: 0.05
}

function clone(objeto){
    // '{ ...objeto }' OPERADOR SPREED que serve para clonar um objeto 
    // para utilizar precisa do plugin do babel 'transform-object-rest-spread'
    // configurado no webpack.config.js
    return { ...objeto }
}

const novoProduto = clone(produto)
novoProduto.nome = 'Caneta Bic Azul'

console.log(produto)
console.log(novoProduto)