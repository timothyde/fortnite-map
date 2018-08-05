import Challenge from '../classes/challenge';
import Week from '../classes/week';
import cities from './cities';

const c1 = new Challenge({
  type: 'Misc',
  name: 'Deal damage to opponents in a single match',
  xp: 500,
  target: 500,
  isBattlePass: false,
  isHard: false
});

const c2 = new Challenge({
  type: 'Misc',
  name: 'Use a Launchpad',
  xp: 500,
  target: 1,
  isBattlePass: false,
  isHard: false
});

const c3 = new Challenge({
  type: 'Point',
  name: 'Follow the treasure map found in Flush Factory',
  coordinates: [
    [0.0077816155738048565, -0.011075374091689127]
  ],
  xp: 500,
  icon: 'star',
  target: 1,
  isBattlePass: false,
  isHard: true
});

const c4 = new Challenge({
  type: 'Area',
  name: 'Search chests in Fatal Fields',
  coordinates: cities.getCity('Fatal Fields').getCenter(),
  radius: cities.getCity('Fatal Fields').radius,
  xp: 500,
  target: 7,
  isBattlePass: true,
  isHard: false
});

const c5 = new Challenge({
  type: 'MultiPoint',
  name: 'Shoot a Clay Pigeon at different locations',
  coordinates: [
    [0.0027507220704023894, -0.005239743262876573],
    [0.007016390557794239, -0.005673041119223399],
    [0.013630842730691484, -0.005936288537782275],
    [0.012408235146835978, -0.013815489435742734],
    [0.004799620700026708, -0.011653722593152338]
  ],
  xp: 500,
  icon: 'clay-pigeon',
  target: 5,
  isBattlePass: true,
  isHard: false
});

const c6 = new Challenge({
  type: 'Area',
  name: 'Eliminate opponents in Haunted Hills',
  coordinates: cities.getCity('Haunted Hills').getCenter(),
  radius: cities.getCity('Haunted Hills').radius,
  xp: 500,
  target: 5,
  isBattlePass: true,
  isHard: false
});

const c7 = new Challenge({
  type: 'Misc',
  name: 'Explosive Weapon Eliminations',
  xp: 1000,
  target: 3,
  isBattlePass: true,
  isHard: true
});

export default new Week([c1, c2, c3, c4, c5, c6, c7]);