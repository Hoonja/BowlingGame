const assert = require('chai').assert;
const Game = require('../Game');

describe('BowlingGame', function() {
  let g = null;

  function rollMany(n, pins) {
    for (let i = 0; i < n; i++) {
      g.roll(pins);
    }
  }

  function rollSpare() {
    g.roll(5);
    g.roll(5);
  }

  function rollStrike() {
    g.roll(10);
  }

  before(function() {
    g = new Game();
  });

  beforeEach(function() {
    g.reset();
  });

  it('#GutterGame', function() {
    rollMany(20, 0);
    assert.equal(0, g.score());
  });

  it('#AllOnes', function() {
    rollMany(20, 1);

    assert.equal(20, g.score());
  });

  it('#OneSpare', function() {
    rollSpare();
    g.roll(3);
    rollMany(17, 0);
    assert.equal(16, g.score());
  });

  it('#OneStrike', function() {
    rollStrike();
    g.roll(3);
    g.roll(4);
    rollMany(16, 0);

    assert.equal(24, g.score());
  });

  it('#PerfectGame', function() {
    rollMany(12, 10);
    assert.equal(300, g.score());
  });
});
