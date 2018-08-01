import Challenge from '../classes/challenge';
import Week from '../classes/week';
import cities from './cities';

const c1 = new Challenge({
  type: 'Misc',
  name: 'Deal damage with Assualt Rifles to opponents',
  xp: 500,
  target: 100,
  isBattlePass: false,
  isHard: false
});

const c2 = new Challenge({
  type: 'Misc',
  name: 'Search 7 Ammo Boxes in a single match',
  xp: 500,
  target: 7,
  isBattlePass: false,
  isHard: false
});

const c3 = new Challenge({
  type: 'Area',
  name: 'Eliminate opponents in Paradise Palms',
  coordinates: cities.getCity('Paradise Palms').getCenter(),
  radius: cities.getCity('Paradise Palms').radius,
  xp: 500,
  target: 1,
  isBattlePass: false,
  isHard: true
});

const c4 = new Challenge({
  type: 'MultiPoint',
  name: 'Score a basket on different hoops',
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
  target: 5,
  isBattlePass: true,
  isHard: false
});

const c5 = new Challenge({
  type: 'Area',
  name: 'Search chests in Loot Lake',
  coordinates: cities.getCity('Loot Lake').getCenter(),
  radius: cities.getCity('Loot Lake').radius,
  xp: 500,
  target: 7,
  isBattlePass: true,
  isHard: false
});

const c6 = new Challenge({
  type: 'Point',
  name: 'Search between an oasis, rock archway, and dinosaurs',
  coordinates: [0.011466492196262834, -0.012737581468030612],
  radius: cities.getCity('Haunted Hills').radius,
  xp: 100,
  target: 1,
  isBattlePass: true,
  isHard: false
});

const c7 = new Challenge({
  type: 'Misc',
  name: 'Sniper Rifle Eliminations',
  xp: 1000,
  target: 2,
  isBattlePass: true,
  isHard: true
});

export default new Week([c1, c2, c3, c4, c5, c6, c7]);