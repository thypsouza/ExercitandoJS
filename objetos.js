//definir objeto
let caneta = {
    cor: "azul",
    modelo: "bic",
    escrever: function(){
        console.log('escrevendo');
    }
}

//acessando atributos
console.log(caneta.cor);
//outra forma
console.log( caneta["cor"] );

function criarCaneta(cor , modelo){
    return {
        cor, 
        modelo ,
         escrever: function(){
            console.log("escrevendo");
         }
    }
}

function caneta(cor , modelo){
    this.cor = cor;
    this.modelo = modelo;
    this.escrever = function(){
        console.log("escrevendo");
    }
}

let canetaBic = criarCaneta("azul", "bic");













