import mapboxgl from 'mapbox-gl';
import styled from 'styled-components';

import mapstyle from '../utils/mapstyle';
import cities from '../utils/cities';
import challenges from '../utils/challenges';

const Container = styled.div`
  height: 100%;
  width: 100%;
`


export default class Map extends React.Component {

  map;

  constructor(props) {
    super(props);

    this.state = {
      mapLoaded: false
    }

  };

  componentDidMount() {

    //GET THE STYLE CONFIG

    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: mapstyle(),
      center: [0.007533689066, -0.007533689066],
      zoom: 15
    });

    //ADD CONTROLS
    const control = new mapboxgl.NavigationControl({ showCompass: true });
    this.map.addControl(control, 'top-right');

    //BUT ADD SCALE ANYWAYS
    this.map.addControl(new mapboxgl.ScaleControl({
      maxWidth: 200,
    }), 'bottom-left');

    this.map.on('load', () => {
      this.mapDidLoad();
    })
  }

  /**
   * function that executes on the 'load' event of this.map; used for all initial adding of layers etc.
   */

  mapDidLoad() {

    this.setState({
      mapLoaded: true
    });

    this.map.addLayer({
      "id": "cities",
      "type": "symbol",
      "source": {
        "type": "geojson",
        "data": cities()
      },
      "layout": {
        "text-field": "{name}",
        "text-font": ["Open Sans Bold"],
        "text-offset": [0, 0],
        "text-anchor": "center",
        'text-transform': 'uppercase',
        'text-size': 12
      },
      paint: {
        'text-color': '#fff',
        'text-halo-color': '#000',
        'text-halo-width': 0.5
      }
    });

    this.map.addLayer({
      "id": "challenges",
      "type": "circle",
      "source": {
        "type": "geojson",
        "data": challenges({ week: 3 })
      },
      paint: {
        'circle-color': { type: 'identity', property: 'color' },
        'circle-radius': 10
      }
    });

    // used for location finding
    this.map.on('click', (e) => {
      console.log(e.lngLat);
    })

  }

  componentWillUnmount() {
    if (this.map) {
      this.map.remove();
    }
  }

  render() {
    return <Container innerRef={el => this.mapContainer = el} />;
  };
};
