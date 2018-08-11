import Challenge from '../classes/challenge';
import Week from '../classes/week';
import cities from './cities';

const c1 = new Challenge({
  type: 'Area',
  name: 'Search Chests in Junk Junction',
  coordinates: cities.getCity('Junk Junction').getCenter(),
  radius: cities.getCity('Junk Junction').radius,
  xp: 500,
  target: 7,
  isBattlePass: false,
  isHard: false
});


const c2 = new Challenge({
  type: 'Misc',
  name: 'Use Rift Portals',
  xp: 500,
  target: 3,
  isBattlePass: false,
  isHard: false
});


const c3 = new Challenge({
  type: 'Misc',
  name: 'Eliminate opponents in a Single Match',
  xp: 1000,
  target: 3,
  isBattlePass: false,
  isHard: true
});

const c4 = new Challenge({
  type: 'Misc',
  name: 'Deal damage to Players with a Clinger, Stink Bomb, or Grenade',
  xp: 500,
  target: 500,
  isBattlePass: true,
  isHard: false
});


const c5 = new Challenge({
  type: 'MultiPoint',
  name: 'Hit a golf ball from tee to green on different holes',
  coordinates: [
    [0.008141333885475888, -0.004574778845892524],
    [0.007173631040473083, -0.004194609905624702],
    [0.008329426838315612, -0.004035901502803085],
    [0.008062231987224777, -0.0037868618118039876],
    [0.008565832732330136, -0.003596718301224655],
    [0.008912938361959277, -0.0028903062329419527],
    [0.007700574673435767, -0.00325281658034271],
    [0.007428432192938317, -0.003422011635265676],
    [0.006868850078859623, -0.003245150249583162]
  ],
  xp: 1000,
  target: 3,
  icon: 'golf',
  isBattlePass: true,
  isHard: false
});

const c6 = new Challenge({
  type: 'Point',
  name: 'Follow the treasure map found in Snobby Shores',
  coordinates: [
    [0.012166517401851706, -0.009712464980964342]
  ],
  xp: 1000,
  target: 1,
  icon: 'star',
  isBattlePass: true,
  isHard: true
});

const c7 = new Challenge({
  type: 'Area',
  name: 'Eliminate opponents in Shifty Shafts',
  coordinates: cities.getCity('Shifty Shafts').getCenter(),
  radius: cities.getCity('Shifty Shafts').radius,
  xp: 1000,
  target: 3,
  isBattlePass: true,
  isHard: true
});

export default new Week([c1, c2, c3, c4, c5, c6, c7]);