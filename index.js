function determinarSaldoVitorias(vitorias, derrotas){
    let saldoVitorias = vitorias - derrotas;
    return saldoVitorias;
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

function exibirFeedback(saldoVitorias, nivel){
    console.log(`O Herói tem um saldo de vitórias de ${saldoVitorias} e está no nível de ${nivel}`);
}