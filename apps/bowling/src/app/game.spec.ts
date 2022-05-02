import { Game } from './game';

describe('Game', () => {
  it('should create an instance', () => {
    expect(new Game()).toBeTruthy();
  });

  it('should return score of 0', () => {
    const game = new Game();
    for (let i = 0; i < 20; i++) {
      game.roll(0);
    }
    expect(game.score).toBe(0);
  });

  it('should return score of 20', () => {
    const game = new Game();
    for (let i = 0; i < 20; i++) {
      game.roll(1);
    }
    expect(game.score).toBe(20);
  });
});
