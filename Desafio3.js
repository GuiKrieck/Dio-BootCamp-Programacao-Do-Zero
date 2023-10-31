/*
##Objetivo
Crie uma classe generica que represente um herói de uma aventura e que possua as 
seguintes propriedades:
-nome, -idade, -tipo(guerreiro,mago,monge,ninja)
além disso deve ter um método chamado atacar que deve atender os seguintes requisitos:
exibir a mensagem:"o {tipo} atacou usando {ataque}"
aonde o {tipo} deve ser concatenado com o tipo que está na propriedade da classe
e no {ataque} deve serguir uma descrição diferente conforme o tipo, seguindo a table abaixo:

se mago -> no ataque exibir( usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir(usou shuriken)

##Saída
ao final deve exibir uma mensagem:
"o {tipo} atacou suando {ataque}" */

class heroClass{
    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type
    }

    deffineAttackType(heroType){
        switch(heroType){
            case "mago":
                return "magia"
            case "guerreiro":
                return "espada"
            case "monge":
                return "artes marciais"
            case "ninja":
                return "shuriken"
            default:
                return "classe ainda não inserida"
        }
    }

    attack(){
        let attackType = this.deffineAttackType(this.type)
        console.log(`o ${this.type} atacou usando ${attackType}`)
    }
}

let newHeroMago = new heroClass("Cleber", 34, "mago")
let newHeroGuerreiro = new heroClass("Pedro", 55, "guerreiro")
let newHeroMonge = new heroClass("Inocencio", 18, "monge")
let newHeroNinja = new heroClass("José", 86, "ninja")

newHeroMago.attack()
newHeroGuerreiro.attack()
newHeroMonge.attack()
newHeroNinja.attack()

/*Solução:
foi criado uma classe chamada newHero para servir como forma para os objetos, e o metodo attack primeiro chama o metodo deffineAttackType para definir
qual o tipo de ataque a ser usado através de uma estrutura switch case, e depois usa o console.log para dar a saida desejada.*/