import { GeoJSONLayer } from 'react-mapbox-gl';

export default ({ data }) => {
  return (
    <GeoJSONLayer
      data={data}
      layerOptions={{
        filter: [
          'all', ['==', '$type', 'Point']
        ]
      }}
      circlePaint={{
        'circle-color': '#f00',
        'circle-radius': 10
      }}
    />
  )
}