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
    sprite: process.env.SPRITE_URL,
    'sources': {
      'season5': {
        'type': 'raster',
        'tiles': [
          process.env.TILESERVER_URL
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
