import Challenge from '../classes/challenge';
import Week from '../classes/week';
import cities from './cities';

const c1 = new Challenge({
  type: 'Misc',
  name: 'Deal damage with SMGs to opponents',
  xp: 500,
  target: 500,
  isBattlePass: false,
  isHard: false
});

const c2 = new Challenge({
  type: 'Misc',
  name: 'Search a Supply Lama',
  xp: 500,
  target: 1,
  isBattlePass: false,
  isHard: false
});

const c3 = new Challenge({
  type: 'Misc',
  name: 'Clinger, Stink Bomb, or Grenade Eliminations',
  xp: 500,
  target: 3,
  isBattlePass: false,
  isHard: true
});

const c4 = new Challenge({
  type: 'Area',
  name: 'Search Chests in Snobby Shores',
  coordinates: cities.getCity('Snobby Shores').getCenter(),
  radius: cities.getCity('Snobby Shores').radius,
  xp: 500,
  target: 5,
  isBattlePass: true,
  isHard: false
});

const c5 = new Challenge({
  type: 'MultiPoint',
  name: 'Search floating Lightning Bolts',
  coordinates: [
    [0.0035584851511885063, -0.009402030816872298],
    [0.003288421069242986, -0.0077354304660275375],
    [0.0011733976216135034, -0.006842592250521307],
    [0.005419402695224562, -0.0074957192154130325],
    [0.007313771038838013, -0.011018383155047218],
    [0.012736663855861252, -0.011397998491673889],
    [0.011357407101939998, -0.008665613533210603],
    [0.012569136414754212, -0.008051105522923763],
    [0.010977864964388573, -0.006211173679034232],
    [0.0030003467396113592, -0.001980826455167062]
  ],
  xp: 500,
  target: 7,
  isBattlePass: true,
  isHard: false
});

const c6 = new Challenge({
  type: 'Point',
  name: 'Follow the trasure map found in Risky Reels',
  coordinates: [0.009788736187374525, -0.005625270904090485],
  xp: 1000,
  target: 1,
  isBattlePass: true,
  isHard: false
});

const c7 = new Challenge({
  type: 'Area',
  name: 'Eliminate opponents in Retail Row',
  coordinates: cities.getCity('Retail Row').getCenter(),
  radius: cities.getCity('Retail Row').radius,
  xp: 1000,
  target: 3,
  isBattlePass: true,
  isHard: true
});

export default new Week([c1, c2, c3, c4, c5, c6, c7]);