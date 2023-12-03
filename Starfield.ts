import { Nave } from "./nave";
import { Arma } from "./arma";
import Prompt from "prompt-sync";
import { Escudo } from "./escudo";
import { Util } from "./util";

const teclado = Prompt();

// OI GUILHERME

// ARMA -----------------------------------------------------------------------

const dragonMW: Arma = new Arma(
  "Dragon 221 MW Laser",
  "Energia",
  16,
  1000,
  50);

const rezaTHz: Arma = new Arma(
  "RezaTHz Laser Gun",
  "Energia",
  19,
  800,
  2.5);

const ke20Cannon: Arma = new Arma(
  "KE-20 Cannon Gun",
  "Balística",
  22,
  800,
  3.49);

const jishaku_fe_railgun: Arma = new Arma(
  "Jishaku FE Railgun",
  "Balistica",
  41,
  1000,
  2.5);

const vanguard_tempest: Arma = new Arma(
  "Vanguard Tempest CE-13",
  "Míssil",
  65,
  4000,
  1.5);

const infiltrator_sc: Arma = new Arma(
  "Infiltrator SC-02",
  "Míssil",
  130,
  3750,
  1);

// ESCUDO ---------------------------------------------------------------------

const escudoA: Escudo = new Escudo(
  "Escudo A",
  150);

const escudoB: Escudo = new Escudo(
  "Escudo B",
  600);

const escudoC: Escudo = new Escudo(
  "Escudo C",
  1000);

// NAVE PADRÃO ----------------------------------------------------------------

const nave: Nave = new Nave(
  "",
  infiltrator_sc,
  100,
  escudoC);

let continua = true;
let iniciajogo = true;

// INICIAR DO JOGO -----------------------------------------------------------

console.log("\n");
console.log("Carregando Starfield... Status Completo.");

while (continua) {
  console.log("\n");
  console.log("| ========= MENU ========= |");
  console.log("|  Bem vindo ao Starfield  |");
  console.log("|  1.  Construa sua Nave   |");
  console.log("|  2.    Iniciar jogo      |");
  console.log("|  3.       Sair           |");
  console.log("| ======================== |");

  const opcao: number = +teclado("Escolha uma opção: ");

  switch (opcao) {
    case 1:
      // ESCOLHER O NOME DA NAVE
      const nomeNave: string = teclado("Digite o nome da nave: ");
      console.log("\n");
      console.log("|", "=".repeat(40), "|");
      nave.setNome("Espaçonave " + nomeNave);
      console.log(`   Nome:    ${nave.nome}`);
      console.log("|", "=".repeat(40), "|");
      console.log("\n");

      // ESCOLHER A ARMA
      console.log("-".repeat(30));
      console.log("Escolha a sua arma");
      console.log("1. Dragon 221 MW Laser");
      console.log("2. RezaTHz Laser Gun");
      console.log("3. KE-20 Cannon Gun");
      console.log("4. Jishaku FE Railgun");
      console.log("5. Vanguard Tempest CE-13");
      console.log("6. Infiltrator SC-02");
      console.log("-".repeat(30));

      const opcaoArma: number = parseInt(teclado("Digite a opção desejada: "));

      switch (opcaoArma) {
        case 1:
          const nomeArma: Arma = dragonMW;
          nave.setArma(nomeArma);
          console.log("\n");
          console.log("|", "=".repeat(37), "|");
          console.log(`   Arma escolhida: ${nave.arma.nome}`);
          console.log("|", "=".repeat(37), "|");
          console.log("\n");

          break;
        case 2:
          const nomeArma2: Arma = rezaTHz;
          nave.setArma(nomeArma2);
          console.log("\n");
          console.log("|", "=".repeat(35), "|");
          console.log(`   Arma escolhida: ${nave.arma.nome}`);
          console.log("|", "=".repeat(35), "|");
          console.log("\n");

          break;
        case 3:
          const nomeArma3: Arma = ke20Cannon;
          nave.setArma(nomeArma3);
          console.log("\n");
          console.log("|", "=".repeat(34), "|");
          console.log(`   Arma escolhida: ${nave.arma.nome}`);
          console.log("|", "=".repeat(34), "|");
          console.log("\n");

          break;
        case 4:
          const nomeArma4: Arma = jishaku_fe_railgun;
          nave.setArma(nomeArma4);
          console.log("\n");
          console.log("|", "=".repeat(36), "|");
          console.log(`   Arma escolhida: ${nave.arma.nome}`);
          console.log("|", "=".repeat(36), "|");
          console.log("\n");

          break;
        case 5:
          const nomeArma5: Arma = vanguard_tempest;
          nave.setArma(nomeArma5);
          console.log("\n");
          console.log("|", "=".repeat(40), "|");
          console.log(`   Arma escolhida: ${nave.arma.nome}`);
          console.log("|", "=".repeat(40), "|");
          console.log("\n");

          break;
        case 6:
          const nomeArma6: Arma = infiltrator_sc;
          nave.setArma(nomeArma6);
          console.log("\n");
          console.log("|", "=".repeat(34), "|");
          console.log(`   Arma escolhida: ${nave.arma.nome}`);
          console.log("|", "=".repeat(34), "|");
          console.log("\n");

          break;
        default:
          console.log("\n");
          console.log("Opção inválida. Tente novamente.");
          console.log("\n");
          break;
      }

      // ESCOLHER O ESCUDO
      console.log("-".repeat(30));
      console.log("Escolha um escudo");
      console.log("1. Escudo A");
      console.log("2. Escudo B");
      console.log("3. Escudo C");
      console.log("-".repeat(30));

      const opcaoEscudo: number = parseInt(
        teclado("Digite a opção desejada: ")
      );

      switch (opcaoEscudo) {
        case 1:
          const nomeEscudo: Escudo = escudoA;
          nave.setEscudo(nomeEscudo);
          console.log("\n");
          console.log("|", "=".repeat(28), "|");
          console.log(`   Escudo escolhido: ${nave.escudo.nome}`);
          console.log("|", "=".repeat(28), "|");
          break;

        case 2:
          const nomeEscudo2: Escudo = escudoB;
          nave.setEscudo(nomeEscudo2);
          console.log("\n");
          console.log("|", "=".repeat(28), "|");
          console.log(`   Escudo escolhido: ${nave.escudo.nome}`);
          console.log("|", "=".repeat(28), "|");
          break;

        case 3:
          const nomeEscudo3: Escudo = escudoC;
          nave.setEscudo(nomeEscudo3);
          console.log("\n");
          console.log("|", "=".repeat(28), "|");
          console.log(`   Escudo escolhido: ${nave.escudo.nome}`);
          console.log("|", "=".repeat(28), "|");
          break;

        default:
          console.log("\n");
          console.log("Opção inválida. Tente novamente.");
          console.log("\n");
          break;
      }

      // RANDOMIZAÇÃO DO COMBUSTÍVEL
      nave.setCombustivel(Util.randomizar(100, 500));

      break;

    case 2:

      // INICIAR O JOGO
      if (nave.nome != "") {
        console.log("\n");
        console.log("| ======= INICIAR JOGO ====== |");
        console.log("|     1.     Combater         |");
        console.log("|     2.   Ver sua Nave       |");
        console.log("|     3.      Voltar          |");
        console.log("| =========================== |");

        const opcaoJogo: number = +teclado("Escolha uma opção: ");

        switch (opcaoJogo) {
          case 1:
            // COMBATE
            console.log("\n");
            console.log("Você escolheu combater");

            const inimigos: string[] = [
              "UC Vanguard",
              "UC Chimera",
              "UC Achilles",
              "FC Mustang",
              "FC Star Eagle",
              "FC Blackhawk",
              "CF Banshee",
              "CF Ghost",
              "CF Phantom",
              "EC Bayonet",
              "EC Claymore",
              "EC Cutlass"
            ]

            const armas: Arma[] = [
              dragonMW,
              rezaTHz,
              ke20Cannon,
              jishaku_fe_railgun,
              vanguard_tempest,
              infiltrator_sc,
            ];

            const escudos: Escudo[] = [escudoA, escudoB, escudoC];

            const inimigo: Nave = new Nave(
              inimigos[Util.randomizar(0, 11)],
              armas[Util.randomizar(0, 5)],
              Util.randomizar(100, 500),
              escudos[Util.randomizar(0, 2)]
            )


            let escudoRestante: number = inimigo.escudo.potencia;

            while (escudoRestante > 0 && nave.escudo.potencia > 0 && nave.combustivel > 0) {

              console.log("\n");
              console.log("| ==== ALVO MARCADO ==== |");
              console.log(`      Nome: ${inimigo.nome}     `);
              console.log(`      Escudo: ${escudoRestante.toFixed(2)}     `);
              console.log("| ======== AÇÕES ======= |");
              console.log("|       1. Atirar        |");
              console.log("|       2. Fugir         |");
              console.log("| ====================== |");
              const acao: number = +teclado("Escolha uma ação: ");



              switch (acao) {
                case 1:
                  console.log("\n")
                  console.log("Você atirou no inimigo.");

                  // PLAYER ATACA INIMIGO 
                  let dado: number = Util.randomizar(1, 100);

                  if (dado <= 10) {
                    console.log("Você acertou um crítico!");
                    console.log("\n");
                    escudoRestante = escudoRestante - (nave.arma.dano + 15);

                    const escudoUpdate: Escudo = new Escudo(inimigo.escudo.nome, escudoRestante)
                    inimigo.setEscudo(escudoUpdate)

                  } else {
                    escudoRestante = escudoRestante - nave.arma.dano;
                  }

                  nave.setCombustivel(nave.combustivel - 25)
                  console.log(`Você perdeu 25 de combustível. Ainda lhe resta ${nave.combustivel} de combustível.`);


                  // INIMIGO ATACA JOGADOR
                  dado = Util.randomizar(1, 100);
                  let escudoJogadorRestante: number = nave.escudo.potencia;

                  if (dado <= 10) {
                    console.log("O inimigo acertou um crítico!");
                    escudoJogadorRestante = escudoJogadorRestante - (inimigo.arma.dano + 15);
                  } else {
                    escudoJogadorRestante = escudoJogadorRestante - inimigo.arma.dano;
                  }

                  const escudoJogadorUpdate: Escudo = new Escudo(nave.escudo.nome, escudoJogadorRestante)
                  nave.setEscudo(escudoJogadorUpdate)

                  console.log(`Você recebeu ${dado <= 10 ? inimigo.arma.dano + 15 : inimigo.arma.dano} de dano. Ainda lhe resta ${nave.escudo.potencia} de escudo.`);

                  // VERIFICA SE O INIMIGO FOI DESTRUIDO
                  if (escudoRestante <= 0) {

                    const escudoInimigoUpdate: Escudo = new Escudo(inimigo.escudo.nome, 0)
                    nave.setEscudo(escudoInimigoUpdate)

                    console.log("\n");
                    console.log("Você venceu a batalha, detonando seu inimigo!");

                    // RECOMPENSAS
                    let combustivelRecompensa: number = 50; // Defina a quantidade de combustível que o jogador ganha

                    nave.setCombustivel(nave.combustivel + combustivelRecompensa);
                    console.log(`Você ganhou ${combustivelRecompensa} de combustível. Agora você tem ${nave.combustivel} de combustível.`);

                    const escudoJogadorUpdate: Escudo = new Escudo(nave.escudo.nome, escudoJogadorRestante);
                    nave.setEscudo(escudoJogadorUpdate)
                    console.log(`Você ganhou 30 de escudo. Agora você tem ${escudoJogadorRestante + 30} de escudo.`);

                    const armaJogadorUpdate: Arma = new Arma(nave.arma.nome, nave.arma.tipo, nave.arma.dano * 1.08, nave.arma.alcance, nave.arma.cadencia);
                    nave.setArma(armaJogadorUpdate);
                    console.log(`O dano da sua arma aumentou em 8%. Agora é ${nave.arma.dano}.`);

                    // VERIFICA SE O JOGADOR FOI DESTRUIDO
                  } else if (nave.escudo.potencia <= 0) {
                    const escudoJogadorUpdate: Escudo = new Escudo(nave.escudo.nome, 0)
                    nave.setEscudo(escudoJogadorUpdate)

                    console.log("\n");
                    console.log("Você perdeu a batalha.");

                    break

                    // VERIFICA SE O JOGADOR FICOU SEM COMBUSTÍVEL
                  } else if (nave.combustivel <= 0) {
                    const escudoJogadorUpdate: Escudo = new Escudo(nave.escudo.nome, 0)
                    nave.setEscudo(escudoJogadorUpdate)


                    console.log("\n");
                    console.log("Sua nave foi destruida. Você perdeu a batalha");

                    break
                  }

                  break;

                case 2:
                  // PLAYER TENTA FUGIR
                  console.log("Você tentou fugir.");


                  if (nave.combustivel >= 100) {

                    console.log("\n");
                    console.log("|", "=".repeat(20), "|");
                    console.log("  Você conseguiu fugir.");
                    console.log("|", "=".repeat(20), "|");
                    console.log("\n");

                    escudoRestante = -1
                    const escudoUpdate: Escudo = new Escudo(inimigo.escudo.nome, escudoRestante)
                    inimigo.setEscudo(escudoUpdate)

                  } else {
                    console.log("Você não conseguiu fugir.");
                  }

                  break;
                default:
                  break;
              }

            }


            break;

          case 2:
            // VER SUA NAVE
            console.log("\n");
            console.log("Você escolheu ver sua nave");
            console.log("\n");

            console.log("|", "=".repeat(38), "|");

            console.log(`•   Nome: ${nave.nome}`);
            console.log(`•   Arma: ${nave.arma.nome}`);
            console.log(`•   Stats da arma: `);
            console.log(`•   •   Tipo: ${nave.arma.tipo}`);
            console.log(`•   •   Dano: ${nave.arma.dano}`);
            console.log(`•   •   Alcance: ${nave.arma.alcance}`);
            console.log(`•   •   Cadência: ${nave.arma.cadencia}`);
            console.log(`•   Combustível: ${nave.combustivel}`);
            console.log(`•   Escudo: ${nave.escudo.nome}`);
            console.log(`•   Stats do escudo:`);
            console.log(`•   •   Potência: ${nave.escudo.potencia}`);

            console.log("|", "=".repeat(38), "|");

            break;

          default:
            console.log("\n");
            console.log("Opção inválida. Tente novamente.");
            console.log("\n");
            break;
        }
        break;
      } else {
        console.log("\n");
        console.log("|", "=".repeat(43), "|");
        console.log("| ❕Você precisa construir uma nave primeiro. |");
        console.log("|", "=".repeat(43), "|");

        break;
      }

    case 3:
      // SAIR
      console.log("\n");
      console.log("Encerrando Starfield...");
      console.log("\n");
      continua = false;
      break;

    default:
      console.log("\n");
      console.log("|", "=".repeat(47), "|");
      console.log("|", "❗Opção inválida. Por favor, escolha novamente.", "|");
      console.log("|", "=".repeat(47), "|");
      break;
  }
}
