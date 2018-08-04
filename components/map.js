import ReactMapboxGl, { RotationControl, ScaleControl, ZoomControl } from "react-mapbox-gl";
import styled from 'styled-components';

import AppContext, { AppProvider } from '../utils/context';
import Point from './point';
import { Area, AreaOutline } from './area';
import Cities from './cities';

import mapstyle from '../utils/mapstyle';
import displayData from '../utils/display';

const Container = styled.div`

`

const Map = ReactMapboxGl({});

const StyledMap = styled(Map)`
height: 100%;
width: 100%;

.fortnite-map-scale-control {
  font-size: 14px !important;
  background-color: transparent !important;
  border: none !important;
  padding: 0 5px !important;
  color: #fff !important;
  font-family: 'Luckiest Guy' !important;
  line-height: 24px !important;
  overflow: hidden !important;
  box-shadow: none !important;

  div {
    box-shadow: none !important;
    border-color: #fff !important;
  }
}

.fortnite-map-rotation-control {
  position: absolute !important;
  top: 106px !important;
  border-radius: 0px !important;
  box-shadow: 0 0 0 0 !important;
  border: none !important;
  background: transparent !important;

  button {
    background-color: rgba(0,0,0,0.55) !important;
    border: none !important;
    color: #fff !important;
    font-family: 'Luckiest Guy' !important;
    font-size: 36px !important;
    height: 36px !important;
    margin: 6px !important;
    outline: 2px solid rgba(255,255,255,0.7) !important;
    transition: background-color 300ms ease-in-out;
    width: 36px !important;
    -webkit-backdrop-filter: blur(10px) !important;

    &:hover {
      background-color: rgba(112,141,183,0.85) !important;
    }

    span {
      width: 30px !important;
      height: 30px !important;
      background-image: url('data:image/svg+xml;charset=utf-8;base64,PHN2ZyB2ZXJzaW9uPSIxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MCA0MCI+DQogIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yNy42IDEzLjNsLS45IDE2LTYuMi42LTMuMy04LjYtLjQgOC43aC01LjNsLjQtMTYuNyA1LjktLjMgNC4xIDguNS4yLTggNS41LS4yek0yOCAxMC4xbC0xNiAxIDgtNnoiLz4NCjwvc3ZnPg==') !important;

      svg {
        display: none;
      }
    }
  }
}

.fortnite-map-zoom-control {
  border-radius: 0px !important;
  box-shadow: 0 0 0 0 !important;
  border: none !important;
  background: transparent !important;

  button {
    background-color: rgba(0,0,0,0.55) !important;
    background-image: none !important;
    border: none !important;
    color: #fff !important;
    font-family: 'Luckiest Guy' !important;
    font-size: 36px !important;
    height: 36px !important;
    margin: 6px !important;
    outline: 2px solid rgba(255,255,255,0.7) !important;
    transition: background-color 300ms ease-in-out;
    width: 36px !important;
    -webkit-backdrop-filter: blur(10px) !important;

    &:hover {
      background-color: rgba(112,141,183,0.85) !important;
    }

    &:after {
      content: '+';
      line-height: 44px;
    }

    &:nth-child(2):after {
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

export default class FortniteMap extends React.Component {
  render() {
    return (
      <AppContext.Consumer>
        {(context) => (
          <StyledMap
            style={mapstyle()}
            onStyleLoad={() => { console.log('LOADED') }}
            onClick={(map, e) => console.log(e.lngLat)}
            center={[0.004, -0.0075]}
            zoom={[15]}>
            <ScaleControl style={{}} className='fortnite-map-scale-control' />
            <ZoomControl style={{}} className='fortnite-map-zoom-control' />
            <RotationControl style={{}} className='fortnite-map-rotation-control' />
            <Area data={context.challenges.getFeatureCollection()} />
            <AreaOutline data={context.challenges.getFeatureCollection()} />
            <Point data={context.challenges.getFeatureCollection()} />
            <Cities />
          </StyledMap>
        )}
      </AppContext.Consumer>
    );
  };
};
