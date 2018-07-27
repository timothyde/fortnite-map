const week3 = {
  'type': 'FeatureCollection',
  'features': [
    {
      type: 'Feature',
      id: 's5w3-1',
      geometry: {
        type: 'MultiPoint',
        coordinates: []
      },
      properties: {
        name: 'Deal damage to opponents in a single match',
        xp: 500,
        amount: 500,
        isBattlePass: false,
        color: '#ff0'
      }
    },
    {
      type: 'Feature',
      id: 's5w3-2',
      geometry: {
        type: 'MultiPoint',
        coordinates: []
      },
      properties: {
        name: 'Use a Launchpad',
        xp: 500,
        amount: 1,
        isBattlePass: false,
        color: '#ff0'
      }
    },
    {
      type: 'Feature',
      id: 's5w3-3',
      geometry: {
        type: 'MultiPoint',
        coordinates: [
          [0.0077816155738048565, -0.011075374091689127]
        ]
      },
      properties: {
        name: 'Follow the treasure map found in Flush Factory',
        difficulty: 'hard',
        xp: 1000,
        amount: 1,
        isBattlePass: false,
        color: '#f0f'
      }
    },
    {
      type: 'Feature',
      id: 's5w3-4',
      geometry: {
        type: 'Point',
        coordinates: [
          0.009077359154929354, -0.012045741412478606
        ]
      },
      properties: {
        name: 'Search chests in Fatal Field',
        xp: 500,
        amount: 7,
        isBattlePass: true,
        color: '#0ff'
      }
    },
    {
      type: 'Feature',
      id: 's5w3-5',
      geometry: {
        type: 'MultiPoint',
        coordinates: [
          [0.0027507220704023894, -0.005239743262876573],
          [0.007016390557794239, -0.005673041119223399],
          [0.013630842730691484, -0.005936288537782275],
          [0.012408235146835978, -0.013815489435742734],
          [0.004799620700026708, -0.011653722593152338]
        ]
      },
      properties: {
        name: 'Shoot a Clay Pigeon at different locations',
        xp: 500,
        amount: 5,
        isBattlePass: true,
        color: '#ff0'
      }
    },
    {
      type: 'Feature',
      id: 's5w3-6',
      geometry: {
        type: 'Point',
        coordinates: [
          0.002226709810088323, -0.0033626199014094027
        ]
      },
      properties: {
        name: 'Eliminate opponents in Haunted Hills',
        xp: 1000,
        amount: 5,
        isBattlePass: true,
        color: '#0ff'
      }
    },
    {
      type: 'Feature',
      id: 's5w3-7',
      geometry: {
        type: 'Point',
        coordinates: []
      },
      properties: {
        name: 'Explosive Weapon Eliminations',
        difficulty: 'hard',
        xp: 1000,
        amount: 3,
        isBattlePass: true,
        color: '#0ff'
      }
    }
  ]
}

export default ({ week }) => {
  switch (week) {
    case 3:
      return week3;
    default:
      return {};
  }
}