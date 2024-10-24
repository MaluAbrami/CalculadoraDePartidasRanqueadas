/*
Esta função serve para "simular" partidas, utilizei uma simulação de um dado de 6 lados para determinar se a partida foi uma vitória ou 
se foi uma derrota, deixando mais dinâmico. Dessa forma, apenas passo a quantidade de partidas que o jogador jogou e com o Math.random()
eu gero um número aleatório entre 1 a 6, a partida é considerada uma vitória sempre que o número sorteado no dado for igual ou maior 
que "2", caso contrário, ou seja, se o número sorteado for "1", então a partida é considerada uma derrota. No final, retorna o saldo de
vitórias, fazendo a quantidade de vitórias menos a quantidade de derrotas.
*/
function jogarPartidas(partidas){
    let dado;
    let vitorias = 0;
    let derrotas = 0;

    for(let i = 0; i < partidas; i++){
        dado = Math.floor(Math.random() * 6) + 1;

        if(dado >= 2){
            vitorias++;
        }
        else{
            derrotas++;
        }
    }

    return vitorias - derrotas;
}

/*
Esta função serve para determinar qual o nível do herói de acordo com o seu saldo de vítorias, utilizei um if-else encadeado para 
determinar o nível dependendo do saldo de vítorias, de acordo com os valores passados na tabela do desafio.
*/
function determinarNivel(saldoVitorias){
    let nivel;

    if(saldoVitorias < 10)
        nivel = "Ferro";
    else if(saldoVitorias <= 20)
        nivel = "Bronze";
    else if(saldoVitorias <= 50)
        nivel = "Prata";
    else if(saldoVitorias <= 80)
        nivel = "Ouro";
    else if(saldoVitorias <= 90)
        nivel = "Diamante";
    else if(saldoVitorias <= 100)
        nivel = "Lendário";
    else
        nivel = "Imortal";

    return nivel;
}

//Esta função serve para exibir a mensagem de feedback para o usuário
function exibirFeedback(partidas, saldoVitorias, nivel){
    console.log(`O Herói jogou um total de ${partidas} partidas, ficando com um saldo de vitórias de ${saldoVitorias} e no nível de ${nivel}`);
}

//Esta é a função main(), utilizei para poder realizar as chamadas de todas as funções no mesmo lugar
function main(){
    let partidasJogadas = 150;

    let saldoVitorias = jogarPartidas(partidasJogadas);

    let nivel = determinarNivel(saldoVitorias);

    exibirFeedback(partidasJogadas, saldoVitorias, nivel);
}

//Aqui é a chamada para a função main(), que servirá para chamar todas as outras
main();