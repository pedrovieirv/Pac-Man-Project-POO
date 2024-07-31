class Pontuacao {
  constructor() {
    this.pontuacao = 0;
  }

  aumentar() {
    this.pontuacao++;
  }

  desenhar() {
    fill('white');
    textSize(16);
    text('Pontuação: ' + this.pontuacao, 10, height - 10);
  }
}
