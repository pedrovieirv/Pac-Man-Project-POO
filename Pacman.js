class PacMan extends Entidade {
  constructor() {
    super(TAMANHO_TELA, TAMANHO_TELA, VELOCIDADE_JOGADOR);
  }

  desenhar() {
    fill('yellow');
    arc(this.x + TAMANHO_TELA / 2, this.y + TAMANHO_TELA / 2, TAMANHO_TELA, TAMANHO_TELA, QUARTER_PI, -QUARTER_PI, PIE);
  }
}


