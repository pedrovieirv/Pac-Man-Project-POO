const TILE_SIZE = 20;
const ROWS = 11;
const COLS = 20;
const PLAYER_SPEED = 0.25 * TILE_SIZE; 
const GHOST_SPEED = 0.25 * TILE_SIZE; 

function generateMaze(rows, cols) {
  let maze = [];
  for (let row = 0; row < rows; row++) {
    let rowArray = [];
    for (let col = 0; col < cols; col++) {
      if (row === 0 || row === rows - 1 || col === 0 || col === cols - 1) {
        rowArray.push(1); 
      } else {
        rowArray.push(random(1) < 0.7 ? 0 : 1); 
      }
    }
    maze.push(rowArray);
  }

  
  maze[1][1] = 0;
  maze[rows - 2][cols - 2] = 0;
  return maze;
}

class PacMan {
  constructor() {
    this.x = TILE_SIZE;
    this.y = TILE_SIZE;
    this.velX = 0;
    this.velY = 0;
  }

  move() {
    if (this.canMove(this.x + this.velX, this.y + this.velY)) {
      this.x += this.velX;
      this.y += this.velY;
    }
  }

  canMove(x, y) {
    let col = floor(x / TILE_SIZE);
    let row = floor(y / TILE_SIZE);
    return maze[row][col] === 0;
  }

  setDirection(x, y) {
    this.velX = x;
    this.velY = y;
  }

  draw() {
    fill('yellow');
    circle(this.x + TILE_SIZE / 2, this.y + TILE_SIZE / 2, TILE_SIZE);
  }
}

class Ghost {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.velX = random([-GHOST_SPEED, GHOST_SPEED]);
    this.velY = random([-GHOST_SPEED, GHOST_SPEED]);
  }

  move() {
    if (this.canMove(this.x + this.velX, this.y + this.velY)) {
      this.x += this.velX;
      this.y += this.velY;
    } else {
      this.velX = random([-GHOST_SPEED, GHOST_SPEED]);
      this.velY = random([-GHOST_SPEED, GHOST_SPEED]);
    }
  }

  canMove(x, y) {
    let col = floor(x / TILE_SIZE);
    let row = floor(y / TILE_SIZE);

    // Verifica se os índices estão dentro dos limites
    if (col >= 0 && col < COLS && row >= 0 && row < ROWS) {
      return maze[row][col] === 0;
    } else {
      return false;
    }
  }

  draw() {
    fill(this.color);
    circle(this.x + TILE_SIZE / 2, this.y + TILE_SIZE / 2, TILE_SIZE);
  }
}

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  draw() {
    fill('white');
    circle(this.x + TILE_SIZE / 2, this.y + TILE_SIZE / 2, TILE_SIZE / 2);
  }
}

class Score {
  constructor() {
    this.score = 0;
  }

  increase() {
    this.score++;
  }

  draw() {
    fill('white');
    textSize(16);
    text('Score: ' + this.score, 10, height - 10);
  }
}
