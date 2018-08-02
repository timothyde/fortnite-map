import { GeoJSONLayer } from 'react-mapbox-gl';

export default ({ data }) => (
  <GeoJSONLayer
    data={data}
    layerOptions={{
      filter: [
        'all', ['==', '$type', 'Point']
      ]
    }}
    circlePaint={{
      'circle-color': { type: 'identity', property: 'color' },
      'circle-radius': 10
    }}
  />
)