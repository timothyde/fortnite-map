import { GeoJSONLayer } from 'react-mapbox-gl';
import cities from '../utils/season5/cities';

export default () => (
  <GeoJSONLayer
    data={cities.getAnchorCollection()}
    symbolLayout={{
      'text-field': '{name}',
      'text-font': ['Open Sans Bold'],
      'text-offset': [0, 0],
      'text-anchor': 'center',
      'text-transform': 'uppercase',
      'text-size': 12
    }}
    symbolPaint={{
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
    }}
  />
)