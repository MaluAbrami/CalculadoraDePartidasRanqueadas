# Calculadora De Partidas Ranqueadas
Este é um desafio de projeto proposto pela Dio durante a realização do BootCamp da GFT

# Sobre o Projeto
Esse projeto foi feito para cumprir com o solicitado durante o BootCamp da GFT na Dio. Porém, realizei algumas complementações próprias que achei legal de acrescentar para utilizar vários conhecimentos adquiridos até agora com o BootCamp e alguns outros conhecimentos aprendidos externamente.

# Solicitado pela Dio no Desafio
## 2️⃣ Calculadora de partidas Rankeadas
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"

# Lógica que utilizei no meu código
No geral eu segui tudo o que pedia nas exigências do desafio. Criei uma função para cada ação necessária, como uma função para calcular o saldo de vitorias(função na qual mais apliquei um toque pessoal), outra função para determinar o nível do herói(na qual utilizei um ```if-else``` encadeado) e mais outra função para exibir a mensagem de feedback para o usuário. Além disso, criei uma função main() que utilizei para chamar todas as funções em um mesmo lugar.
Para dar um toque pessoal no desafio eu utilizei o método Math.random() para simular um dado de 6 lados, assim como fiz no meu último desafio de projeto. Basicamente funciona assim, utilizamos o número de partidas jogadas pelo usuário(que no meu código atribui como 150 partidas), então para determinar se a partida foi uma vitória ou se foi uma derrota é sorteado um número entre 1 a 6, determinei que se caso esse número for maior ou igual a "2" a partida foi uma vitória, caso contrário, ou seja, se o número sorteado cair como "1", então a partida será uma derrota, tudo isso coloquei dentro de um ```for``` que irá se repetir até o número de partidas jogadas pelo usuário. Adicionei essa lógica para tentar deixar mais dinâmico a atribuição de um nível para o herói.

#
[Site da Dio](https://www.dio.me/)
#####
[Meu Linkedin](https://www.linkedin.com/in/maria-luiza-abrami-617bab330/?trk=opento_sprofile_details)
#####
[Meu Perfil na Dio](https://www.dio.me/users/marialuizaabrami)