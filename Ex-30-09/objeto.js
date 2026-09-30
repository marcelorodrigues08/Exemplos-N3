const carro = { 
    marca: "Toyota", 
    modelo:"Corola", 
    ano:"2016", 
    cor:"Púrpura", 
    velocidade: 0 ,
    acelerar: function () {
        this.velocidade += 10;
    },
    desacelerar: function () {
         if (this.velocidade > 0)
        this.velocidade -= 5
    },
    buzinar: function () {
        console.log("Estou buzinando...BIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII")
    },

}

console.table(carro); // usamos table ao inves de log por que fica mais bonito pois fica em uma tabela e nao em uma linha.


carro.modelo = "Yaris"; //isso modifica o modelo do carro

console.table(carro)
console.log(`O ano do carro é: ${carro.ano}`) // aqui a gente deixe uma linha especificando abaixo o ano do carro.

carro.buzinar(); // chamando a função de buzinar 

carro.acelerar();
carro.acelerar(); //só aumenta se você chamar novamente +10//
console.table(carro);

carro.desacelerar();
carro.desacelerar();
carro.desacelerar();
carro.desacelerar();
carro.desacelerar();
console.table(carro);