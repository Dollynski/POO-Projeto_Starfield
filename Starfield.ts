import { Arma } from "./Arma";
import { Categoria } from "./categoria";
import { Nave } from "./nave";
import Prompt from 'prompt-sync';

const teclado = Prompt();

const DragonMW: Arma = new Arma(
  'Dragon 221 MW Laser',
  'Energia',
  16,
  1000,
  50,
  1500,
  new Categoria("A")
);


const rezaTHz: Arma = new Arma(
  'RezaTHz',
  'Energia',
  19,
  800, 
  2.5,
  21500,
  new Categoria("A")
);


const ke20Cannon: Arma = new Arma(
  'KE-20 Cannon',
  'Balística',
  22,
  800,
  3.49,
  7225,
  new Categoria("A")
);


const jishaku_fe_railgun: Arma = new Arma(
  'Jishaku FE Railgun',
  'Balistica',
  41,
  1000, 
  2.5,
  9525,
   new Categoria("B")
);

const vanguard_tempest: Arma = new Arma(
  'Vanguard Tempest CE-13',
  'Míssil',
   65,
   4000,
   1.5,
   1500,
   new Categoria("B")
)

const infiltrator_sc: Arma = new Arma (
  'Infiltrator SC-02',
  'Míssil',
  130,
  3750,
  1,
  7525,
   new Categoria("C")
)


 const nave: Nave = new Nave();
nave.nome = teclado('Digite o nome da nave que irá utilizar: ');
nave.reator ; 
nave.combustivel; 
nave.casco;
nave.escudo;
nave.carga;
nave.tripulacao; 
nave.motor; 
nave.massa;

nave.arma = arma; 

let continua = true;

while (continua) {

  console.log('| =========MENU========= |');
  console.log('| Bem vindo ao Starfield |');
  console.log('| 1. Escolha sua nave    |');
  console.log('| 2.   Iniciar jogo      |');
  console.log('| 3.       Sair          |');
  console.log('| ====================== |');

  const opcao: number = +teclado('Escolha uma opção: ');

  switch (opcao) {
    case 0:
      console.table(nave)
      break;
    case 1: 
        console.log('Escolha sua nave');
        console.log('1. Nave de carga');
        console.log('2. Nave de combate');
        console.log('3. Nave de exploração');
        console.log('4. Voltar');

        const opcaoNave: number = +teclado('Escolha uma opção: ');

        switch (opcaoNave) {
            case 1:
                console.log('Você escolheu a nave de carga');
                // Aqui você pode adicionar o código para configurar a nave como uma nave de carga
                break;
            case 2:
                console.log('Você escolheu a nave de combate');
                // Aqui você pode adicionar o código para configurar a nave como uma nave de combate
                break;
            case 3:
                console.log('Você escolheu a nave de exploração');
                // Aqui você pode adicionar o código para configurar a nave como uma nave de exploração
                break;
            case 4:
                console.log('Voltando ao menu principal');
                break;
            default:
                console.log('Opção inválida. Tente novamente.');
                break;
        }

      break;
    case 2: 
        console.log('Iniciar jogo');
        console.log('1. Escolher destino');
        console.log('2. Explorar');
        console.log('3. Combater');
        console.log('4. Voltar');

        const opcaoJogo: number = +teclado('Escolha uma opção: ');

        switch (opcaoJogo) {
            case 1:
                console.log('Você escolheu escolher destino');
                // Aqui você pode adicionar o código para permitir que o usuário escolha um destino
                break;
            case 2:
                console.log('Você escolheu explorar');
                // Aqui você pode adicionar o código para iniciar a exploração
                break;
            case 3:
                console.log('Você escolheu combater');
                // Aqui você pode adicionar o código para iniciar o combate
                break;
            case 4:
                console.log('Voltando ao menu principal');
                break;
            default:
                console.log('Opção inválida. Tente novamente.');
                break;
        }

      break;
    case 3:
      console.log('Você escolheu sair');
      continua = false;
      break;
    default:
      console.log('Opção inválida. Tente novamente.');
      break;
}
}

/* parte quu fizemos em aula

const nave: Nave = new Nave();
nave.nome = teclado('Digite o nome da nave que irá utilizar: ');
nave.reator ; 
nave.combustivel; 
nave.casco;
nave.escudo;
nave.carga;
nave.tripulacao; 
nave.motor; 
nave.massa;

nave.arma = arma; 

let continua = true;

while (continua) {

console.log('| ======MENU====== |');
console.log('| Bem vindo ao Starfield |');
console.log('| 1. Escolha sua nave |');
console.log('| 2. Iniciar jogo |');
console.log('| 3. Sair |');
console.log('| ================ |');


const opcao: number = +teclado('Escolha uma opção: ');

switch (opcao) {
    case 0:
      console.table(nave)
      break;
    case 1: 
        console.log('Escolha sua nave');
        console.log('1. Nave de carga');
        console.log('2. Nave de combate');
        console.log('3. Nave de exploração');
        console.log('4. Voltar');
      break;
    case 2: 
        console.log('Iniciar jogo');
        console.log('1. Escolher destino');
        console.log('2. Explorar');
        console.log('3. Combater');
        console.log('4. Voltar');
  
      break;
    case 3:

  
      break;
    case 4:
  
      break;
  */





      /* auxilio dos casos
      Claro, posso ajudar com isso. No entanto, para fornecer uma solução precisa, preciso de mais detalhes sobre o que exatamente deve acontecer quando o usuário escolhe uma nave de carga, combate ou exploração. Por exemplo, isso afeta as propriedades da nave? Se sim, quais propriedades são afetadas e como?

De qualquer forma, aqui está um exemplo genérico de como você pode alterar as propriedades da nave com base na escolha do usuário:

switch (opcaoNave) {
    case 1:
        console.log('Você escolheu a nave de carga');
        nave.carga = 1000; // Aumenta a capacidade de carga
        nave.escudo = 500; // Reduz o escudo
        break;
    case 2:
        console.log('Você escolheu a nave de combate');
        nave.carga = 500; // Reduz a capacidade de carga
        nave.escudo = 1000; // Aumenta o escudo
        break;
    case 3:
        console.log('Você escolheu a nave de exploração');
        nave.carga = 750; // Capacidade de carga média
        nave.escudo = 750; // Escudo médio
        break;
    case 4:
        console.log('Voltando ao menu principal');
        break;
    default:
        console.log('Opção inválida. Tente novamente.');
        break;

Neste exemplo, estou assumindo que uma nave de carga tem uma maior capacidade de carga, mas um escudo mais fraco, enquanto uma nave de combate tem um escudo mais forte, mas uma menor capacidade de carga. Uma nave de exploração tem capacidades médias para ambos. Você pode ajustar isso de acordo com as regras do seu jogo.
      */

      /* auxilio p/ sistema de combate
Implementar um sistema de combate pode variar muito dependendo das especificidades do seu jogo. No entanto, fornecerei um exemplo básico de como você pode implementar um sistema de combate baseado em turnos.

Neste exemplo, vou supor que tanto a nave do jogador quanto a nave inimiga tenham saúde e poder de ataque. O jogador e o inimigo se revezarão atacando um ao outro até que a saúde de uma das naves chegue a 0.

Aqui está uma implementação básica em TypeScript:

class Nave {
    saude: number;
    poderAtaque: number;

    constructor(saude: number, poderAtaque: number) {
        this.saude = saude;
        this.poderAtaque = poderAtaque;
    }

    atacar(alvo: Nave) {
        alvo.saude -= this.poderAtaque;
    }

    estaDestruida() {
        return this.saude <= 0;
    }
}

function combate(jogador: Nave, inimigo: Nave) {
    let turno = 0; // Jogador começa

    while (!jogador.estaDestruida() && !inimigo.estaDestruida()) {
        if (turno % 2 === 0) {
            jogador.atacar(inimigo);
            console.log(`Jogador ataca! Saúde do inimigo agora é ${inimigo.saude}`);
        } else {
            inimigo.atacar(jogador);
            console.log(`Inimigo ataca! Saúde do jogador agora é ${jogador.saude}`);
        }

        turno++;
    }

    if (jogador.estaDestruida()) {
        console.log('Jogador foi destruído. Fim de jogo.');
    } else {
        console.log('Inimigo foi destruído. Você venceu!');
    }
}

// Uso
const jogador = new Nave(100, 20);
const inimigo = new Nave(80, 25);

combate(jogador, inimigo);

Este é um sistema de combate muito básico. Em um jogo real, você pode querer adicionar mais complexidade. Por exemplo, você poderia adicionar diferentes tipos de ataques, movimentos de defesa, habilidades especiais, etc. Você também poderia adicionar um sistema para o jogador atualizar sua nave, o que afetaria o combate.
*/
