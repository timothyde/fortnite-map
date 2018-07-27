export default () => {
  return {
    version: 8,
    name: 'fortmap',
    metadata: {
      'mapbox:autocomposite': false,
      'mapbox:type': 'template',
      'maputnik:renderer': 'mbgljs',
      'openmaptiles:version': '3.x',
      'openmaptiles:mapbox:owner': 'openmaptiles',
      'openmaptiles:mapbox:source:url': 'mapbox://openmaptiles.4qljc88t'
    },
    bearing: 0,
    pitch: 0,
    glyphs: 'https://maps.captain.immo/fonts/{fontstack}/{range}.pbf',
    "sources": {
      "season5": {
        "type": "raster",
        // point to our third-party tiles. Note that some examples
        // show a "url" property. This only applies to tilesets with
        // corresponding TileJSON (such as mapbox tiles). 
        "tiles": [
          'http://localhost:3001/season5/{z}/{x}/{y}.png'
        ],
        "tileSize": 512
      }
    },
    "layers": [
      {
        id: 'background',
        type: 'background',
        paint: {
          'background-color': '#2b7284'
        }
      },
      {
        "id": "simple-tiles",
        "type": "raster",
        "source": "season5",
        "minzoom": 0,
        "maxzoom": 24
      }
    ]
    // sources: {
    //   'season5': {
    //     type: 'raster',
    //     tiles: [
    //       'http://localhost:3001/season5/{z}/{x}/{y}.png'
    //     ],
    //     minzoom: 0,
    //     maxzoom: 12,
    //     tileSize: 512
    //   },
    // },
    // layers: [
    //   {
    //     id: 'background',
    //     type: 'background',
    //     paint: {
    //       'background-color': '#f00'
    //     }
    //   }
    // ]
  }
};
