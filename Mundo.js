class Mundo {
  constructor() {
    this.pacman = new PacMan();
    this.fantasmas = [
      new Fantasma(TAMANHO_TELA * 10, TAMANHO_TELA * 10, 'red'),
      new Fantasma(TAMANHO_TELA * 10, TAMANHO_TELA * 10, 'blue')
    ];
    this.pontos = this.gerarPontos();
    this.pontuacao = new Pontuacao();
    this.gameOver = false;
  }

  gerarPontos() {
    const pontos = [];
    for (let linha = 0; linha < LINHAS; linha++) {
      for (let coluna = 0; coluna < COLUNAS; coluna++) {
        if (labirinto[linha][coluna] === 0 && Math.random() < 0.2) {
          pontos.push(new Ponto(coluna * TAMANHO_TELA, linha * TAMANHO_TELA));
        }
      }
    }
    return pontos;
  }

  atualizar() {
    if (this.gameOver) return;
    this.pacman.mover();
    for (let fantasma of this.fantasmas) {
      fantasma.mover();
    }
    this.verificarColisoes();
  }

  verificarColisoes() {
    this.verificarColisoesPontos();
    this.verificarColisoesFantasmas();
  }

  verificarColisoesPontos() {
    this.pontos = this.pontos.filter(ponto => {
      if (dist(this.pacman.x, this.pacman.y, ponto.x, ponto.y) < TAMANHO_TELA / 2) {
        this.pontuacao.aumentar();
        return false;
      }
      return true;
    });
  }

  verificarColisoesFantasmas() {
    for (let fantasma of this.fantasmas) {
      if (dist(this.pacman.x, this.pacman.y, fantasma.x, fantasma.y) < TAMANHO_TELA) {
        this.gameOver = true;
      }
    }
  }

  desenhar() {
    this.desenharLabirinto();
    for (let ponto of this.pontos) {
      ponto.desenhar();
    }
    this.pacman.desenhar();
    for (let fantasma of this.fantasmas) {
      fantasma.desenhar();
    }
    this.pontuacao.desenhar();
    if (this.gameOver) {
      this.exibirGameOver();
    }
  }

  desenharLabirinto() {
    for (let linha = 0; linha < LINHAS; linha++) {
      for (let coluna = 0; coluna < COLUNAS; coluna++) {
        if (labirinto[linha][coluna] === 1) {
          fill('blue');
          rect(coluna * TAMANHO_TELA, linha * TAMANHO_TELA, TAMANHO_TELA, TAMANHO_TELA);
        }
      }
    }
  }

  exibirGameOver() {
    textSize(32);
    fill('red');
    textAlign(CENTER, CENTER);
    text('Game Over', width / 2, height / 2);
  }
}
