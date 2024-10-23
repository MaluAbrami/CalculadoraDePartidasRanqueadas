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

function exibirFeedback(partidas, saldoVitorias, nivel){
    console.log(`O Herói jogou um total de ${partidas} partidas, ficando com um saldo de vitórias de ${saldoVitorias} e no nível de ${nivel}`);
}

function main(){
    let partidasJogadas = 150;

    let saldoVitorias = jogarPartidas(partidasJogadas);

    let nivel = determinarNivel(saldoVitorias);

    exibirFeedback(partidasJogadas, saldoVitorias, nivel);
}

main();