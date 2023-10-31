/* Objetivo

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de rankeadas deve ser feito através
do calculo (vitorias - derrotas)
Se vitórias for menor que 10  = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100 = Lendário
Se vitórias for maior ou igual a 101 = imortal

##Saída
Ao final deve se exibir uma mensagem:
"O Herói tem o saldo de **{saldoDeVitorias}** está no rank **{rankDoJogador}**" */

let heroName = "Sebastião o Atirador de Chinelos";
let victoryAmount = 75;
let defeatAmount = 8;
let rankList = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário","Imortal"];
let victoryBalance = calculateVictoryBalance(victoryAmount, defeatAmount);
let heroRank = getHeroRank(victoryBalance);

function calculateVictoryBalance(victory, defeat){
    let result = victory - defeat;
    return result;
}

function getHeroRank(victoryBalance){
    let heroRank = "";
    if(victoryBalance <= 10){
        heroRank = rankList[0];
    }else if(victoryBalance > 10 && victoryBalance <= 20){
        heroRank = rankList[1];
    }else if(victoryBalance > 20 && victoryBalance <= 50){
        heroRank = rankList[2];
    }else if(victoryBalance > 50 && victoryBalance <= 80){
        heroRank = rankList[3];
    }else if(victoryBalance > 80 && victoryBalance <= 90){
        heroRank = rankList[4];
    }else if(victoryBalance > 90 && victoryBalance <= 100){
        heroRank = rankList[5];
    }else{
        heroRank = rankList[6];
    }

    return heroRank;
}

console.log(`O Herói tem saldo de ${victoryBalance} está no rank ${heroRank}`);

/* Solução, foi criada uma função para calcular o saldo de vitórias que o player tem, e para que cada função tenhar apenas uma responsabilidade 
criei uma outra função para pegar o rank adequado para o player baseado no saldo de vitórias que ele tem.
uma outra maneira de reescrever a segunda função poderia ser:

function getHeroRank(victoryBalance){

    if(victoryBalance <= 10){
        return rankList[0];
    }else if(victoryBalance > 10 && victoryBalance <= 20){
        return rankList[1];
    }else if(victoryBalance > 20 && victoryBalance <= 50){
        return rankList[2];
    }else if(victoryBalance > 50 && victoryBalance <= 80){
        return rankList[3];
    }else if(victoryBalance > 80 && victoryBalance <= 90){
        return rankList[4];
    }else if(victoryBalance > 90 && victoryBalance <= 100){
        return rankList[5];
    }else{
        return rankList[6];
    }
}
*/
