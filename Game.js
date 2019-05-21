module.exports = function Game() {
  this._score = 0;
  this._rolls = [];
  this._currentRoll = 0;

  this._isSpare = function(frameIndex) {
    return this._rolls[frameIndex] + this._rolls[frameIndex + 1] === 10;
  }

  this._isStrike = function(frameIndex) {
    return this._rolls[frameIndex] === 10;
  }

  this.reset = function() {
    this._score = 0;
    this._rolls = [];
  }

  this.roll = function(pins) {
    this._score += pins;  
    this._rolls.push(pins);
    // if (pins === 10) {
    //   this._rolls.push(0);
    //   this._currentRoll++;
    // }
    this._currentRoll++;
  }

  this.score = function() {
    let score = 0;
    let frameIndex = 0;
    for (let frame = 0; frame < 10; frame++) {
      if (this._isStrike(frameIndex)) {   //  strike
        score += 10 + this._rolls[frameIndex + 1] + this._rolls[frameIndex + 2];
        frameIndex++;
      } else if (this._isSpare(frameIndex)) { //  spare
        score += 10 + this._rolls[frameIndex + 2];
        frameIndex += 2;
      } else {
        score += this._rolls[frameIndex] + this._rolls[frameIndex + 1];
        frameIndex += 2;
      }      
    }
    return score;
  }
}