import mapboxgl from 'mapbox-gl';
import styled from 'styled-components';

import mapstyle from '../utils/mapstyle';
import displayData from '../utils/display';

const Container = styled.div`
  height: 100%;
  width: 100%;

  .mapboxgl-ctrl-group {
    border-radius: 0px !important;
    box-shadow: 0 0 0 0 !important;
    background: transparent !important;

    button {
      background-color: rgba(0,0,0,0.55);
      background-image: none !important;
      border: none;
      color: #fff;
      font-family: 'Luckiest Guy';
      font-size: 36px;
      outline: 2px solid rgba(255,255,255,0.7);
      margin: 6px;
      height: 36px;
      width: 36px;
      -webkit-backdrop-filter: blur(10px);

      &.mapboxgl-ctrl-zoom-in:after {
        content: '+';
        line-height: 44px;
      }

      &.mapboxgl-ctrl-zoom-out:after {
        content: '-';
        line-height: 46px;
      }

      span {
        width: 27px !important;
        height: 27px !important;
        background-image: url('data:image/svg+xml;charset=utf-8;base64,PHN2ZyB2ZXJzaW9uPSIxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MCA0MCI+DQogIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yNy42IDEzLjNsLS45IDE2LTYuMi42LTMuMy04LjYtLjQgOC43aC01LjNsLjQtMTYuNyA1LjktLjMgNC4xIDguNS4yLTggNS41LS4yek0yOCAxMC4xbC0xNiAxIDgtNnoiLz4NCjwvc3ZnPg==') !important;
      }
    }
  }
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
