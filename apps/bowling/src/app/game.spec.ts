import { Game } from './game';

describe('Game', () => {
  let game: Game;

  beforeEach(() => {
    game = new Game();
  });

  it('should create an instance', () => {
    expect(game).toBeTruthy();
  });

  it('should return score of 0', () => {
    rollMany(20, 0);
    expect(game.score).toBe(0);
  });

  it('should return score of 20', () => {
    rollMany(20, 1);
    expect(game.score).toBe(20);
  });

  function rollMany(n: number, pins: number) {
    for (let i = 0; i < n; i++) {
      game.roll(pins);
    }
  }
});
