export default () => {
  return {
    version: 8,
    name: 'fortmap',
    metadata: {
      'mapbox:autocomposite': false,
      'mapbox:type': 'template',
      'maputnik:renderer': 'mbgljs',
    },
    bearing: 0,
    pitch: 0,
    glyphs: 'static/fonts/{fontstack}/{range}.pbf',
    'sources': {
      'season5': {
        'type': 'raster',
        'tiles': [
          'http://localhost:3001/season5/{z}/{x}/{y}.png'
        ],
        'tileSize': 512
      }
    },
    'layers': [
      {
        id: 'background',
        type: 'background',
        paint: {
          'background-color': '#2b7284'
        }
      },
      {
        'id': 'simple-tiles',
        'type': 'raster',
        'source': 'season5',
        'minzoom': 0,
        'maxzoom': 24
      }
    ]
  }
};
