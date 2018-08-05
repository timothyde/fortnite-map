import cities from '../utils/season5/cities';

export default ({ map, challenges }) => {

  map.addSource('challenges', {
    'type': 'geojson',
    'data': challenges.getFeatureCollection()
  });

  map.addSource('cities', {
    'type': 'geojson',
    'data': cities.getAnchorCollection()
  });

  map.addLayer({
    'id': 'challenges-points',
    'type': 'circle',
    'source': 'challenges',
    paint: {
      'circle-color': { type: 'identity', property: 'color' },
      'circle-radius': 10
    },
    filter: [
      'all', ['==', '$type', 'Point']
    ]
  });

  map.addLayer({
    'id': 'challenges-points-highlight',
    'type': 'circle',
    'source': 'challenges',
    paint: {
      'circle-color': '#fadb14',
      'circle-radius': 10,
      'circle-opacity': 0
    },
    filter: [
      'all', ['==', '$type', 'Point']
    ]
  });

  map.addLayer({
    'id': 'challenges-points-icons',
    'type': 'symbol',
    'source': 'challenges',
    layout: {
      'icon-image': ['get', 'icon'],
      'icon-size': 0.4,
      'icon-ignore-placement': true,
      'icon-allow-overlap': true
    },
    filter: [
      'all', ['==', '$type', 'Point']
    ]
  });

  map.addLayer({
    'id': 'challenges-areas',
    'type': 'fill',
    'source': 'challenges',
    paint: {
      'fill-color': { type: 'identity', property: 'color' },
      'fill-opacity': 0.2
    },
    filter: [
      'all', ['==', '$type', 'Polygon']
    ]
  });

  map.addLayer({
    'id': 'challenges-areas-highlight',
    'type': 'fill',
    'source': 'challenges',
    paint: {
      'fill-color': '#fadb14',
      'fill-opacity': 0,
    },
    filter: [
      'all', ['==', '$type', 'Polygon']
    ]
  });

  map.addLayer({
    'id': 'challenges-areas-outline',
    'type': 'line',
    'source': 'challenges',
    paint: {
      'line-color': { type: 'identity', property: 'color' },
      'line-width': 2
    },
    filter: [
      'all', ['==', '$type', 'Polygon']
    ]
  });

  map.addLayer({
    'id': 'challenges-areas-outline-highlight',
    'type': 'line',
    'source': 'challenges',
    paint: {
      'line-color': '#fadb14',
      'line-width': 2,
      'line-opacity': 0
    },
    filter: [
      'all', ['==', '$type', 'Polygon']
    ]
  });

  map.addLayer({
    'id': 'cities',
    'type': 'symbol',
    'source': 'cities',
    'layout': {
      'text-field': '{name}',
      'text-font': ['Open Sans Bold'],
      'text-offset': [0, 0],
      'text-anchor': 'center',
      'text-transform': 'uppercase',
      'text-size': 12
    },
    paint: {
      'text-color': '#fff',
      'text-halo-color': '#000',
      'text-halo-width': 0.5,
      'text-opacity': [
        'interpolate', ['linear'], ['zoom'],
        13, 0,
        14, 1,
        16.5, 1,
        17.5, 0,
      ]
    }
  });
}