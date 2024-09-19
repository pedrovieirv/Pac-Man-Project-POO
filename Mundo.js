class Mundo {
  constructor() {
    this.pacman = new PacMan();
    this.fantasmas = [
      new Fantasma(TAMANHO_TELA * 10, TAMANHO_TELA * 10, 'red'),
      new Fantasma(TAMANHO_TELA * 10, TAMANHO_TELA * 10, 'blue')
    ];
    this.pontos = [];
    this.pontuacao = new Pontuacao();
    this.bonuses = [];
    this.gameOver = false;
    this.labirinto = [];
  }

  gerarPontos() {
    this.pontos = [];
    for (let linha = 0; linha < LINHAS; linha++) {
      for (let coluna = 0; coluna < COLUNAS; coluna++) {
        if (this.labirinto[linha][coluna] === 0 && Math.random() < 0.2) {
          const ponto = new Ponto(coluna * TAMANHO_TELA, linha * TAMANHO_TELA);
          if (!this.pontoEstaDentroDeQuadrado(ponto)) {
            this.pontos.push(ponto);
          }
        } else if (Math.random() < 0.05) {
          const bonus = new SlowDownBonus(coluna * TAMANHO_TELA, linha * TAMANHO_TELA);
          if (!this.pontoEstaDentroDeQuadrado(bonus)) {
            this.bonuses.push(bonus);
          }
        }
      }
    }
    // garantir que haja uma forma de vencer o jogo
    const pontoFinal = new Ponto(COLUNAS * TAMANHO_TELA - TAMANHO_TELA, LINHAS * TAMANHO_TELA - TAMANHO_TELA);
    if (!this.pontoEstaDentroDeQuadrado(pontoFinal)) {
      this.pontos.push(pontoFinal);
    }
  }

  pontoEstaDentroDeQuadrado(ponto) {
    const coluna = Math.floor(ponto.x / TAMANHO_TELA);
    const linha = Math.floor(ponto.y / TAMANHO_TELA);
    return this.labirinto[linha][coluna] === 1;
  }

  desenhar() {
    background('black');
    for (let linha = 0; linha < LINHAS; linha++) {
      for (let coluna = 0; coluna < COLUNAS; coluna++) {
        if (this.labirinto[linha][coluna] === 1) {
          fill('blue');
          rect(coluna * TAMANHO_TELA, linha * TAMANHO_TELA, TAMANHO_TELA, TAMANHO_TELA);
        }
      }
    }
    this.pacman.desenhar();
    for (const fantasma of this.fantasmas) {
      fantasma.desenhar();
    }
    for (const ponto of this.pontos) {
      ponto.desenhar();
    }
    for (const bonus of this.bonuses) {
      bonus.desenhar();
    }
    this.pontuacao.desenhar();
  }

  atualizar() {
    this.pacman.mover();
    for (const fantasma of this.fantasmas) {
      fantasma.mover();
    }
    for (const ponto of this.pontos) {
      if (dist(this.pacman.x, this.pacman.y, ponto.x, ponto.y) < TAMANHO_TELA / 2) {
        this.pontuacao.aumentar();
        this.pontos.splice(this.pontos.indexOf(ponto), 1);
      }
    }
    for (const bonus of this.bonuses) {
      if (dist(this.pacman.x, this.pacman.y, bonus.x, bonus.y) < TAMANHO_TELA / 2) {
        bonus.aplicar(this.pacman);
        this.bonuses.splice(this.bonuses.indexOf(bonus), 1);
      }
    }
    if (this.pontos.length === 0) {
      this.gameOver = true;
    }
  }

  keyPressed() {
    if (keyCode === LEFT_ARROW) {
      this.pacman.definirDirecao(-VELOCIDADE_JOGADOR, 0);
    } else if (keyCode === RIGHT_ARROW) {
      this.pacman.definirDirecao(VELOCIDADE_JOGADOR, 0);
    } else if (keyCode === UP_ARROW) {
      this.pacman.definirDirecao(0, -VELOCIDADE_JOGADOR);
    } else if (keyCode === DOWN_ARROW) {
      this.pacman.definirDirecao(0, VELOCIDADE_JOGADOR);
    }
  }
}
