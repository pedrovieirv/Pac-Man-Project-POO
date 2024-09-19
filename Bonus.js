class Bonus extends Entidade {
  constructor(x, y) {
    super(x, y, 0); 
  }

  aplicar(entidade) {
    
  }

  desenhar() {
    fill('green'); 
    circle(this.x + TAMANHO_TELA / 2, this.y + TAMANHO_TELA / 2, TAMANHO_TELA / 4);
  }
}
