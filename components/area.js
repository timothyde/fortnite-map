import { GeoJSONLayer } from 'react-mapbox-gl';

export const Area = ({ data }) => (
  <GeoJSONLayer
    data={data}
    layerOptions={{
      filter: [
        'all', ['==', '$type', 'Polygon']
      ]
    }}
    fillPaint={{
      'fill-color': { type: 'identity', property: 'color' },
      'fill-opacity': 0.2
    }}
  />
)

export const AreaOutline = ({ data }) => (
  <GeoJSONLayer
    data={data}
    layerOptions={{
      filter: [
        'all', ['==', '$type', 'Polygon']
      ]
    }}
    linePaint={{
      'line-color': { type: 'identity', property: 'color' },
      'line-width': 2
    }}
  />
)