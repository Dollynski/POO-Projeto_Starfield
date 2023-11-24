import { Nave } from "./nave";
import { Arma } from './arma';
import Prompt from 'prompt-sync';
import { Escudo } from "./escudo";

const teclado = Prompt();

const dragonMW: Arma = new Arma(
  'Dragon 221 MW Laser',
  'Energia',
  16,
  1000,
  50,
);


const rezaTHz: Arma = new Arma(
  'RezaTHz',
  'Energia',
  19,
  800,
  2.5,
);


const ke20Cannon: Arma = new Arma(
  'KE-20 Cannon',
  'Balística',
  22,
  800,
  3.49,
);


const jishaku_fe_railgun: Arma = new Arma(
  'Jishaku FE Railgun',
  'Balistica',
  41,
  1000,
  2.5,
);

const vanguard_tempest: Arma = new Arma(
  'Vanguard Tempest CE-13',
  'Míssil',
  65,
  4000,
  1.5,
)

const infiltrator_sc: Arma = new Arma(
  'Infiltrator SC-02',
  'Míssil',
  130,
  3750,
  1,
)

const escudoA: Escudo = new Escudo(
  100,
  100
);

const escudoB: Escudo = new Escudo(
  50,
  50
);

const escudoC: Escudo = new Escudo(
  25,
  25
);

const nave: Nave = new Nave(
  "",
  infiltrator_sc,
  100,
  escudoC
);


let continua = true;


while (continua) {

  console.log('| ========= MENU ========= |');
  console.log('|  Bem vindo ao Starfield  |');
  console.log('|  1.  Construa sua Nave   |');
  console.log('|  2.    Iniciar jogo      |');
  console.log('|  3.       Sair           |');
  console.log('| ======================== |');

  const opcao: number = +teclado('Escolha uma opção: ');

  switch (opcao) {
    case 0:
      console.table(nave)
      break;
    case 1:
      const nomeNave: string = teclado('Digite o nome da nave: ');
      nave.setNome(nomeNave);
      console.log(`Nome: ${nave.nome}`);

      //------------------------------------------------------
      console.log('-'.repeat(30));
      console.log('Escolha a sua arma');
      console.log('1. Dragon 221 MW Laser');
      console.log('2. RezaTHz');
      console.log('3. KE-20 Cannon');
      console.log('4. Jishaku FE Railgun');
      console.log('5. Vanguard Tempest CE-13');
      console.log('6. Infiltrator SC-02');
      console.log('7. Voltar');

      const opcaoArma: number = parseInt(teclado('Digite a opção desejada: '));

      switch (opcaoArma) {
        case 1:
          const nomeArma: Arma = dragonMW;
          nave.setArma(nomeArma);
          console.log(`Arma escolhida: ${nave.arma.nome}`);

          break;
        case 2:
          const nomeArma2: Arma = rezaTHz;
          nave.setArma(nomeArma2);
          console.log(`Arma escolhida: ${nave.arma.nome}`);

          break;
        case 3:
          const nomeArma3: Arma = ke20Cannon;
          nave.setArma(nomeArma3);
          console.log(`Arma escolhida: ${nave.arma.nome}`);

          break;
        case 4:
          const nomeArma4: Arma = jishaku_fe_railgun;
          nave.setArma(nomeArma4);
          console.log(`Arma escolhida: ${nave.arma.nome}`);

          break;
        case 5:
          const nomeArma5: Arma = vanguard_tempest;
          nave.setArma(nomeArma5);
          console.log(`Arma escolhida: ${nave.arma.nome}`);

          break;
        case 6:
          const nomeArma6: Arma = infiltrator_sc;
          nave.setArma(nomeArma6);
          console.log(`Arma escolhida: ${nave.arma.nome}`);

          break;
        case 7:
          console.log('Voltando');
          break;
        default:
          console.log('Opção inválida. Tente novamente.');
          break;
      }
            //------------------------------------------------------
      console.log('-'.repeat(30));
      console.log('Escolha um escudo');
      console.log('1. Escudo A');
      console.log('2. Escudo B');
      console.log('3. Escudo C');

      const opcaoEscudo: number = parseInt(teclado('Digite a opção desejada: '));

      switch (opcaoEscudo) {
        case 1: 
          const nomeEscudo: Escudo = escudoA;
          nave.setEscudo(nomeEscudo);
          console.log(`Escudo escolhido: ${nave.escudo.nome}`);
          break;

        case 2:
          const nomeEscudo2: Escudo = escudoB;
          nave.setEscudo(nomeEscudo2);
          console.log(`Escudo escolhido: ${nave.escudo.nome}`);
          break;

        case 3:
          const nomeEscudo3: Escudo = escudoC;
          nave.setEscudo(nomeEscudo3);
          console.log(`Escudo escolhido: ${nave.escudo.nome}`);
          break;

        default:
          console.log('Opção inválida. Tente novamente.');
          break; 

        //------------------------------------------------------
      console.log('Voltando ao menu principal');
      break;
    default:
      console.log('Opção inválida. Tente novamente.');
      break;

    case 2:
      console.log('| ======= INICIAR JOGO ====== |');
      console.log('|     1.     Combater         |');
      console.log('|     2.      Voltar          |');
      console.log('| =========================== |');
      break;

      const opcaoJogo: number = +teclado('Escolha uma opção: ');

      switch (opcaoJogo) {
        case 1:
          console.log('Você escolheu combater');
          // Aqui você pode adicionar o código para permitir que o usuário escolha um destino
          break;
        case 2:
          console.log('Voltando ao menu principal');
          // Aqui você pode adicionar o código para iniciar a exploração
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
  }
}

/* 
Criacao de nave com escolha do usuario de categoria
const categoria: string = teclado('Digite a categoria da nave (A, B, C): ');

let reator: Reator;
let motor: Motor;
let carga: Carga;
let escudo: Escudo;

switch (categoria.toUpperCase()) {
  case 'A':
    reator = reatorA;
    motor = motorA;
    carga = cargaA;
    escudo = escudoA;
    break;
  case 'B':
    reator = reatorB;
    motor = motorB;
    carga = cargaB;
    escudo = escudoB;
    break;
  case 'C':
    reator = reatorC;
    motor = motorC;
    carga = cargaC;
    escudo = escudoC;
    break;
  default:
    console.log('Categoria inválida. Por favor, digite A, B ou C.');
    return;
}

const nome: string = teclado('Digite o nome da nave: ');

const nave: Nave = new Nave(nome, infiltrator_sc, reator, motor, carga, escudo);

console.log(`Nome: ${nave.nome}`);
console.log(`Reator: ${nave.reator}`);
console.log(`Combustível: ${nave.combustivel}`);
console.log(`Casco: ${nave.casco}`);
console.log(`Escudo: ${nave.escudo}`);
console.log(`Carga: ${nave.carga}`);
console.log(`Tripulação: ${nave.tripulacao}`);
console.log(`Motor: ${nave.motor}`);
console.log(`Massa: ${nave.massa}`);







parte quu fizemos em aula

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
