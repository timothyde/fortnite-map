import City from '../classes/city';

class Cities {

  constructor(cities) {
    this.cities = cities;
  }

  getAnchorCollection() {
    const features = this.cities.map(city => city.getAnchorFeature());
    return {
      type: 'FeatureCollection',
      features
    };
  }

  getCenterCollection() {
    const features = this.cities.map(city => city.getCenterFeature());
    return {
      type: 'FeatureCollection',
      features
    };
  }

  getCity(name) {
    return this.cities.find(city => city.name === name);
  }
}

const tiltedTowers = new City({
  name: 'Tilted Towers',
  anchor: [0.005580072216616827, -0.007890101100670677],
  center: [0.005580072216616827, -0.007890101100670677]
});

const flushFactory = new City({
  name: 'Flush Factory',
  anchor: [0.005268147581006133, -0.013721316901069258],
  center: [0.005268147581006133, -0.013721316901069258]
});

const luckyLanding = new City({
  name: 'Lucky Landing',
  anchor: [0.008531829275938208, -0.014527142077767508],
  center: [0.008531829275938208, -0.014527142077767508]
});

const fatalFields = new City({
  name: 'Fatal Fields',
  anchor: [0.00906540797993216, -0.011868573655291925],
  center: [0.00906540797993216, -0.011868573655291925]
});

const paradisePalms = new City({
  name: 'Paradise Palms',
  anchor: [0.012349471679073076, -0.011667036132166686],
  center: [0.012349471679073076, -0.011667036132166686]
});

const saltySprings = new City({
  name: 'Salty Springs',
  anchor: [0.008417055550353325, -0.00991888967389798],
  center: [0.008417055550353325, -0.00991888967389798]
});

const retailRow = new City({
  name: 'Retail Row',
  anchor: [0.011254372349043251, -0.008400650361267026],
  center: [0.011254372349043251, -0.008400650361267026]
});

const dustyDivot = new City({
  name: 'Dusty Divot',
  anchor: [0.008933597810056426, -0.007665361300070117],
  center: [0.008933597810056426, -0.007665361300070117]
});

const greasyGrove = new City({
  name: 'Greasy Grove',
  anchor: [0.003349442907676803, -0.009746376441114535],
  center: [0.003349442907676803, -0.009746376441114535]
});

const snobbyShores = new City({
  name: 'Snobby Shores',
  anchor: [0.0011615870148489194, -0.0072208023386792775],
  center: [0.0011615870148489194, -0.0072208023386792775]
});

const lootLake = new City({
  name: 'Loot Lake',
  anchor: [0.006556359909382081, -0.006104291790137495],
  center: [0.006556359909382081, -0.006104291790137495]
});

const lonelyLodge = new City({
  name: 'Lonely Lodge',
  anchor: [0.013581346410575179, -0.0067297366820042726],
  center: [0.013581346410575179, -0.0067297366820042726]
});

const tomatoTown = new City({
  name: 'Tomato Town',
  anchor: [0.009933021059737257, -0.005303338872906238],
  center: [0.009933021059737257, -0.005303338872906238]
});

const wailingWoods = new City({
  name: 'Wailing Woods',
  anchor: [0.012510114487014334, -0.004376779133508535],
  center: [0.012510114487014334, -0.004376779133508535]
});

const pleasantPark = new City({
  name: 'Pleasant Park',
  anchor: [0.004139185599626671, -0.004924200190444594],
  center: [0.004139185599626671, -0.004924200190444594]
});

const hauntedHills = new City({
  name: 'Haunted Hills',
  anchor: [0.0021463251091233815, -0.0038047064582116263],
  center: [0.0021463251091233815, -0.0038047064582116263]
});

const junkJunction = new City({
  name: 'Junk Junction',
  anchor: [0.002791972966775802, -0.0018979910466470074],
  center: [0.002791972966775802, -0.0018979910466470074]
});

const lazyLinks = new City({
  name: 'Lazy Links',
  anchor: [0.008021799322079914, -0.0037923921619409384],
  center: [0.008021799322079914, -0.0037923921619409384]
});

const riskyReels = new City({
  name: 'Risky Reels',
  anchor: [0.011187484666578484, -0.0029697939770585435],
  center: [0.011187484666578484, -0.0029697939770585435]
});

const cities = new Cities([
  tiltedTowers,
  flushFactory,
  luckyLanding,
  fatalFields,
  paradisePalms,
  saltySprings,
  retailRow,
  dustyDivot,
  greasyGrove,
  snobbyShores,
  lootLake,
  lonelyLodge,
  tomatoTown,
  wailingWoods,
  pleasantPark,
  hauntedHills,
  junkJunction,
  lazyLinks,
  riskyReels
]);

export default cities;
