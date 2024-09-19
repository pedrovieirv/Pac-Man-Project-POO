
let mundo;
let LINHAS = 20;
let COLUNAS = 20;
let TAMANHO_TELA = 20;
let VELOCIDADE_JOGADOR = 2;
let VELOCIDADE_FANTASMA = 1;


function setup() {
  createCanvas(COLUNAS * TAMANHO_TELA, LINHAS * TAMANHO_TELA);
  mundo = new Mundo();
  mundo.labirinto = gerarLabirinto(LINHAS, COLUNAS);
  mundo.gerarPontos();
  
  mundo.pacman.x = TAMANHO_TELA * 2;
  mundo.pacman.y = TAMANHO_TELA * 2;
}


function draw() {
  if (!mundo.gameOver) {
    mundo.atualizar();
    mundo.desenhar();
  } else {
    fill('white');
    textSize(32);
    text('Game Over!', width / 2 - 80, height / 2);
  }
}


function keyPressed() {
  mundo.keyPressed();
}


function gerarLabirinto(linhas, colunas) {
  const labirinto = [];
  for (let linha = 0; linha < linhas; linha++) {
    labirinto[linha] = [];
    for (let coluna = 0; coluna < colunas; coluna++) {
      if (linha === 0 || linha === linhas - 1 || coluna === 0 || coluna === colunas - 1) {
        labirinto[linha][coluna] = 1; 
      } else {
        labirinto[linha][coluna] = Math.random() < 0.2 ? 1 : 0; 
      }
    }
  }
  return labirinto;
}
