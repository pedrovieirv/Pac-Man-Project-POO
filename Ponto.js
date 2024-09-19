class Ponto {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  desenhar() {
    fill('white');
    circle(this.x + TAMANHO_TELA / 2, this.y + TAMANHO_TELA / 2, TAMANHO_TELA / 4);
  }
}
