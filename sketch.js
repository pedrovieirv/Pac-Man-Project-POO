
const TAMANHO_TELA = 20;
const LINHAS = 11;
const COLUNAS = 20;
const VELOCIDADE_JOGADOR = 0.1 * TAMANHO_TELA;
const VELOCIDADE_FANTASMA = 0.1 * TAMANHO_TELA;


let labirinto;
let mundo;


function setup() {
  createCanvas(COLUNAS * TAMANHO_TELA, LINHAS * TAMANHO_TELA);
  labirinto = gerarLabirinto(LINHAS, COLUNAS);
  mundo = new Mundo();
}

function draw() {
  background(0);
  if (!mundo.gameOver) {
    mundo.atualizar();
    mundo.desenhar();
  } else {
    fill('white');
    textSize(32);
    textAlign(CENTER, CENTER);
    text('Game Over', width / 2, height / 2);
  }
}


function gerarLabirinto(linhas, colunas) {
  const labirinto = [];
  for (let linha = 0; linha < linhas; linha++) {
    const linhaArray = [];
    for (let coluna = 0; coluna < colunas; coluna++) {
      if (eBorda(linha, coluna, linhas, colunas)) {
        linhaArray.push(1);
      } else {
        linhaArray.push(Math.random() < 0.7 ? 0 : 1);
      }
    }
    labirinto.push(linhaArray);
  }
  labirinto[1][1] = 0; 
  labirinto[linhas - 2][colunas - 2] = 0; 
  return labirinto;
}

function eBorda(linha, coluna, linhas, colunas) {
  return linha === 0 || linha === linhas - 1 || coluna === 0 || coluna === colunas - 1;
}


function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    mundo.pacman.definirDirecao(-mundo.pacman.velocidade, 0);
  } else if (keyCode === RIGHT_ARROW) {
    mundo.pacman.definirDirecao(mundo.pacman.velocidade, 0);
  } else if (keyCode === UP_ARROW) {
    mundo.pacman.definirDirecao(0, -mundo.pacman.velocidade);
  } else if (keyCode === DOWN_ARROW) {
    mundo.pacman.definirDirecao(0, mundo.pacman.velocidade);
  }
}
