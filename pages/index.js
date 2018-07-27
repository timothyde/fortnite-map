import dynamic from 'next/dynamic';
import { Icon } from 'antd';
import styled from 'styled-components';
import Sidebar from '../components/sidebar';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
`

const MapContainer = styled.div`
  height: 100%;
  width: 70%;
`

const Loader = styled(Icon)`
  left: 50%;
  position: absolute;
  top: 50%;
`

const Map = dynamic(
  import('../components/map'),
  {
    loading: () => <Loader type="loading" style={{ fontSize: 36, color: 'white' }} spin />
  }
);

export default () => (
  <Wrapper>
    <MapContainer>
      <Map week={3} />
    </MapContainer>
    <Sidebar>
      asd
    </Sidebar>
  </Wrapper>
);