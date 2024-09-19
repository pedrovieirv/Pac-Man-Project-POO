class Entidade {
  constructor(x, y, velocidade) {
    this.x = x;
    this.y = y;
    this.velX = 0;
    this.velY = 0;
    this.velocidade = velocidade;
  }

  mover() {
    const novoX = this.x + this.velX;
    const novoY = this.y + this.velY;
    if (this.podeMover(novoX, novoY)) {
      this.x = novoX;
      this.y = novoY;
    }
  }

  podeMover(x, y) {
    const coluna = Math.floor(x / TAMANHO_TELA);
    const linha = Math.floor(y / TAMANHO_TELA);
    return coluna >= 0 && coluna < COLUNAS && linha >= 0 && linha < LINHAS && mundo.labirinto[linha][coluna] === 0;
  }

  definirDirecao(x, y) {
    this.velX = x;
    this.velY = y;
  }

  desenhar() {}
}