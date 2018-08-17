import Challenge from "../classes/challenge";
import Week from "../classes/week";
import cities from "./cities";

const c1 = new Challenge({
  type: "Misc",
  name: "Deal Headshot Damage to opponents",
  xp: 500,
  target: 500,
  isBattlePass: false,
  isHard: false
});

const c2 = new Challenge({
  type: "Misc",
  name: "Harvest building resources with a pickaxe",
  xp: 500,
  target: 3000,
  isBattlePass: false,
  isHard: false
});

const c3 = new Challenge({
  type: "Point",
  name: "Search where the Stone Heads are looking",
  coordinates: [[0.007743233070613087, -0.010128890696364579]],
  xp: 1000,
  target: 1,
  icon: "star",
  isBattlePass: false,
  isHard: true
});

const c4 = new Challenge({
  type: "Area",
  name: "Search Chests in Lonely Lodge",
  coordinates: cities.getCity("Lonely Lodge").getCenter(),
  radius: cities.getCity("Lonely Lodge").radius,
  xp: 500,
  target: 500,
  isBattlePass: true,
  isHard: false
});

const c5 = new Challenge({
  type: "MultiPoint",
  name: "Complete timed trials",
  coordinates: [
    [0.0068130760722340256, -0.009541216988807832],
    [0.011757179758461689, -0.008676640894321963],
    [0.01337130187675939, -0.006359921602367535],
    [0.009450303481969513, -0.004567047812116698],
    [0.010911595324756718, -0.012457568058508173],
    [0.0010659553475136363, -0.008015840033152699],
    [0.004339035746568243, -0.002677015990187215]
  ],
  xp: 500,
  target: 5,
  icon: "time",
  isBattlePass: true,
  isHard: false
});

const c6 = new Challenge({
  type: "Misc",
  name: "Minigun or Light Machine Gun Eliminations",
  xp: 1000,
  target: 2,
  isBattlePass: true,
  isHard: true
});

const c7 = new Challenge({
  type: "Area",
  name: "Eliminate opponents in Tilted Towers",
  coordinates: cities.getCity("Tilted Towers").getCenter(),
  radius: cities.getCity("Tilted Towers").radius,
  xp: 1000,
  target: 3,
  isBattlePass: true,
  isHard: true
});

export default new Week([c1, c2, c3, c4, c5, c6, c7]);
