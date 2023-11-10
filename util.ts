export class Util {

    static randomizar(base: number, limite: number) {
      return Math.round(base + Math.random() * (limite - base))
    }
  }
  