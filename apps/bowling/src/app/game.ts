export class Game {
  private rolls: number[] = [];
  private currentRoll = 0;
  roll(pins: number) {
    this.rolls[this.currentRoll++] = pins;
  }

  get score() {
    let score = 0;
    for (let i = 0; i < this.rolls.length; i++) {
      score += this.rolls[i];
    }
    return score;
  }
}
