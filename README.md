# Projeto-POO

**Grupo:**

Luis Gustavo Guimarães Damião Pinto 

Pedro Augusto vieira da Silva 

José Italo Lemos Coelho




## Introdução

Pac-Man é um jogo de arcade clássico desenvolvido pela Namco e lançado em 1980. Neste projeto, recriamos Pac-Man usando JavaScript. A implementação segue os princípios da programação orientada a objetos para garantir um código modular e reutilizável.

## Funcionalidades

- Movimento de Pac-Man controlado pelo teclado
- Labirinto com pontos para Pac-Man comer
- Fantasmas que perseguem Pac-Man
- Sistema de pontuação
- Detecção de colisão entre Pac-Man, fantasmas e pontos
- Animações básicas para Pac-Man e fantasmas


## Licença

Feel free to use / copy / modify my code, as long as you reshare your version and give some credit to the original author (me).

This project is licensed under the terms of the GNU General Public License (GPL) version 3. See the [LICENSE](https://creativecommons.org/licenses/by-sa/4.0/) file for more details.


Copyright (c) [2024] [Pedro Vieira]

Este programa é software livre; você pode redistribuí-lo e/ou
modificá-lo sob os termos da versão 3 da Licença Pública Geral GNU
conforme publicada pela Free Software Foundation.

Este programa é distribuído na expectativa de que será útil, mas SEM QUALQUER GARANTIA; sem
garantia implícita de comercialização ou adequação a qualquer fim específico. Veja a
GNU General Public License para mais detalhes.

Você deve ter recebido uma cópia da GNU General Public License junto com este programa;
se não, escreva para a Free Software Foundation, Inc., 51 Franklin Street, Fifth Floor,
Boston, MA 02110-1301, USA.



# Segunda Unidade 

### Estrutura Geral
 Variáveis globais e constantes estavam no início do código.
  Todas as constantes e variáveis globais foram movidas para o final do código.

### Funções de Geração de Labirinto
 -A lógica de geração do labirinto estava mesclada com a lógica do jogo.
 -A função de geração do labirinto foi separada na classe `Mundo`, que é inicializada ao criar o jogo.

### Classes de Bônus
 -Manipulação direta da velocidade do PacMan.
 -Introduziu a classe base `Bonus` e a subclasse `SlowDownBonus`, mas a lógica de diminuição de velocidade ainda precisa ser revisada.

### Método de Colisão
 -Verificações de colisões misturadas em um único bloco.
 -O método `verificarColisoes` foi criado, mas a complexidade aumentou sem trazer melhorias claras. 

foi basicamente o que fizemos no código nessa segunda unidade 


