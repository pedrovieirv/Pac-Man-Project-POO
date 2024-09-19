class Fantasma extends Entidade {
  constructor(x, y, cor) {
    super(x, y, VELOCIDADE_FANTASMA);
    this.cor = cor;
    this.randomizarDirecao();
  }

  randomizarDirecao() {
    if (Math.random() < 0.5) {
      this.definirDirecao(random([-VELOCIDADE_FANTASMA, VELOCIDADE_FANTASMA]), 0);
    } else {
      this.definirDirecao(0, random([-VELOCIDADE_FANTASMA, VELOCIDADE_FANTASMA]));
    }
  }

  mover() {
    const prevX = this.x;
    const prevY = this.y;
    super.mover();
    if (prevX === this.x && prevY === this.y) {
      this.randomizarDirecao();
    }
  }

  desenhar() {
    fill(this.cor);
    beginShape();
    vertex(this.x + TAMANHO_TELA / 2, this.y);
    vertex(this.x + TAMANHO_TELA, this.y + TAMANHO_TELA / 2);
    vertex(this.x + TAMANHO_TELA / 2, this.y + TAMANHO_TELA);
    vertex(this.x, this.y + TAMANHO_TELA / 2);
    endShape(CLOSE);
    fill('white');
    ellipse(this.x + TAMANHO_TELA * 0.3, this.y + TAMANHO_TELA * 0.35, TAMANHO_TELA * 0.2, TAMANHO_TELA * 0.2);
    ellipse(this.x + TAMANHO_TELA * 0.7, this.y + TAMANHO_TELA * 0.35, TAMANHO_TELA * 0.2, TAMANHO_TELA * 0.2);
    fill('black');
    ellipse(this.x + TAMANHO_TELA * 0.3, this.y + TAMANHO_TELA * 0.35, TAMANHO_TELA * 0.1, TAMANHO_TELA * 0.1);
    ellipse(this.x + TAMANHO_TELA * 0.7, this.y + TAMANHO_TELA * 0.35, TAMANHO_TELA * 0.1, TAMANHO_TELA * 0.1);
  }
}
