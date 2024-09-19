class SlowDownBonus extends Bonus {
  constructor(x, y) {
    super(x, y);
  }

  aplicar(entidade) {
    if (entidade instanceof PacMan) {
      entidade.velocidade *= 0.5; 
    } else if (entidade instanceof Fantasma) {
      entidade.velocidade *= 0.5; 
    }
  }

  desenhar() {
    super.desenhar(); 
   
  }
}
