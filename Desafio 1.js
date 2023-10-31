/*Objetivo
Crie uma variável para armazenar o nome e a quantidade de experiência(XP) de um herói,
depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:
Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
se XP for entre 2.001 e 5.000 = Prata
se XP for entre 5.001 e 7.000 = Ouro
se XP for entre 7.001 e 8.000 = Platina 
se XP for entre 8.001 e 9.000 = Ascendente
se XP for entre 9.001 e 10.000 = Imortal
Se XP for maior ou igual a 10.001 = Radiante
## Saída
Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nivel de **{nivel do heroi}**"
*/

let nomeDoHeroi = "Clebinho espadachim das estrelas";
let quantidadeDeXP = 6519;
let listaDeRanks = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"]
let rankDoHeroi = "";

if(quantidadeDeXP <= 1000){
    rankDoHeroi = listaDeRanks[0];
}else if(quantidadeDeXP > 1000 && quantidadeDeXP <= 2000){
    rankDoHeroi = listaDeRanks[1];
}else if(quantidadeDeXP > 2000 && quantidadeDeXP <= 5000){
    rankDoHeroi = listaDeRanks[2];
}else if(quantidadeDeXP > 5000 && quantidadeDeXP <= 7000){
    rankDoHeroi = listaDeRanks[3];
}else if(quantidadeDeXP > 7000 && quantidadeDeXP <= 8000){
    rankDoHeroi = listaDeRanks[4];
}else if(quantidadeDeXP > 8000 && quantidadeDeXP <= 9000){
    rankDoHeroi = listaDeRanks[5];
}else if(quantidadeDeXP > 9000 && quantidadeDeXP <= 10000){
    rankDoHeroi = listaDeRanks[6];
}else{
    rankDoHeroi = listaDeRanks[7];
}

console.log("O Herói de nome " + nomeDoHeroi + " está no nível " + rankDoHeroi);

/*Solução: testei a estrutura switch primeiro mas não deu certo devido ao fato do switch aceitar apenas valores pré-definidos em seus cases e não condições,
além das variáveis pra guardar o nome do heroi e a xp decidi criar uma lista com os ranks disponíveis no momento pra não deixar os valores a serem adicionados
na variavel rankDoHeroi "flutuando" ali no código, também decidi criar uma variável pra guardar o rank atual do herói caso seja necessário essa informação
pra outros lugares no codigo ( tipo o jogo pode ter uma loja onde o estoque é definido pelo rank do heroi...) e por ultimo mostrei a mensagem no console.log =)
*/