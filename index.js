class Heroi{
    constructor(nome,idade,tipo){
        this.nome=nome;
        this.idade=idade;
        this.tipo=tipo;
    }
    DeterminarAtaque(){
let Ataque;
if(this.tipo === "Mago"){
    Ataque = "usou magia " 
}
else if(this.tipo === "guerreiro"){
    Ataque = "usou espada "
}
else if(this.tipo === "monge"){
    Ataque = "usou artes marciais "
}
else if(this.tipo === "ninja"){
    Ataque = "usou shuriken "
}
else {
    Ataque = "Ataque desconhecido "
} return Ataque
}}
let Aventureiro = new Heroi("Glauber" , 18 , "ninja")
console.log("o tipo " + Aventureiro.tipo + " atacou usando " + Aventureiro.DeterminarAtaque())