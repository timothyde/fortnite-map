import Challenge from '../classes/challenge';
import Week from '../classes/week';
import cities from './cities';

const c1 = new Challenge({
  type: 'Misc',
  name: 'Build Structures',
  xp: 500,
  target: 250,
  isBattlePass: false,
  isHard: false
});

const c2 = new Challenge({
  type: 'MultiPoint',
  name: 'Jump through flaming hoops with a Shopping Cart or ATK',
  coordinates: [
    [0.001295656833178782, -0.007840722168936054],
    [0.00382713000243484, -0.0072705269897284],
    [0.003916486200665759, -0.006821512109468131],
    [0.0036345362908036805, -0.0061871104826281],
    [0.0064025786919330585, -0.003849771688081205],
    [0.0075245634192242505, -0.00462206332132097],
    [0.009764475845827292, -0.005885990028204446],
    [0.005024775762564104, -0.012265712080292701]
  ],
  xp: 500,
  target: 5,
  icon: 'hoop',
  isBattlePass: false,
  isHard: false
});

const c3 = new Challenge({
  type: 'Area',
  name: 'Eliminate opponents in Dusty Divot',
  coordinates: cities.getCity('Dusty Divot').getCenter(),
  radius: cities.getCity('Dusty Divot').radius,
  xp: 1000,
  target: 3,
  isBattlePass: false,
  isHard: true
});

const c4 = new Challenge({
  type: 'Misc',
  name: 'Deal damage with Sniper Rifles to opponents',
  xp: 500,
  target: 500,
  isBattlePass: true,
  isHard: false
});

const c5 = new Challenge({
  type: 'Area',
  name: 'Search Chests in Flush Factory',
  coordinates: cities.getCity('Flush Factory').getCenter(),
  radius: cities.getCity('Flush Factory').radius,
  xp: 500,
  target: 7,
  isBattlePass: true,
  isHard: false
});

const c6 = new Challenge({
  type: 'Point',
  name: 'Search between a gas station, soccer pitch, and Stunt Mountain',
  coordinates: [
    [0.004268215126984387, -0.005809309134534146]
  ],
  xp: 1000,
  target: 1,
  icon: 'star',
  isBattlePass: true,
  isHard: true
});

const c7 = new Challenge({
  type: 'Misc',
  name: 'Pistol Eliminations',
  xp: 1000,
  target: 3,
  isBattlePass: true,
  isHard: true
});

export default new Week([c1, c2, c3, c4, c5, c6, c7]);