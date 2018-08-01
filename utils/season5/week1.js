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
    [0.008879914628778351, -0.013984456091336028],
    [0.006390231951570513, -0.012608226437166081],
    [0.011876093856841408, -0.011383529553768312],
    [0.006169089715001519, -0.010863301317471041],
    [0.00816745818198683, -0.009753837047995262],
    [0.009892653229229609, -0.010270860127903347],
    [0.003353827130922582, -0.00964360519907359],
    [0.005539715973128523, -0.007875060865032424],
    [0.008951350081730425, -0.007895924775581875],
    [0.01100736825199533, -0.008380677684115767],
    [0.013536465647945306, -0.007130000791349289],
    [0.0062229749739799445, -0.00605730093064949],
    [0.00877442876594614, -0.005029179859846522],
    [0.01097505109871122, -0.004234510694189453],
    [0.012513449263281018, -0.004112253891960904],
    [0.009528345564120855, -0.0024414108793564537],
    [0.0019878507513908517, -0.006643210393008303],
    [0.0029438418570464364, -0.004040830795986494],
    [0.006011440083170783, -0.002859390927724803],
    [0.006011440083170783, -0.002859390927724803],
    [0.002750389717533608, -0.002099400373452908],

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