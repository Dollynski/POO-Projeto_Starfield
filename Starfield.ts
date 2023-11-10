import { Categoria } from "./categoria";
import { Nave } from "./nave";
import { Arma } from './arma';
import Prompt from 'prompt-sync';
import { Reator } from "./reator";

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

const nome: string = teclado('Digite o nome da nave: ');

const reator: Reator = new Reator (
    100,
    new Categoria("A"),
    100
);

const nave: Nave = new Nave(nome, infiltrator_sc, reator, );
nave.nome;
nave.reator;
nave.combustivel;
nave.casco;
nave.escudo;
nave.carga;
nave.tripulacao;
nave.motor;
nave.massa;

