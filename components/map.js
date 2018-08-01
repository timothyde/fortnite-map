import mapboxgl from 'mapbox-gl';
import styled from 'styled-components';

import mapstyle from '../utils/mapstyle';
import cities from '../utils/season5/cities';
import displayData from '../utils/display';

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
      center: [0.004, -0.007533689066],
      zoom: 15
    });

    //ADD CONTROLS
    const control = new mapboxgl.NavigationControl({ showCompass: true });
    this.map.addControl(control, 'top-right');

    //BUT ADD SCALE ANYWAYS
    this.map.addControl(new mapboxgl.ScaleControl({
      maxWidth: 200,
    }), 'bottom-right');

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

    // display the data
    displayData({ map: this.map, challenges: this.props.challenges });

    // used for location finding
    this.map.on('click', (e) => {
      console.log(e.lngLat);
    })

  }

  /**
   * updates the 'challenge' source of the map instance and updates it
   */
  weekDidChange() {
    if (this.map.getSource('challenges')) {
      this.map.getSource('challenges').setData(this.props.challenges.getFeatureCollection());
    }
  }

  componentDidUpdate(prevProps) {
    //DETECT WEEK CHANGES
    const weekChanged = prevProps.week !== this.props.week;
    if (weekChanged) {
      this.weekDidChange();
    }
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
