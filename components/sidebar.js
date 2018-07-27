import styled from 'styled-components';

import WeekSelect from './weekSelect';
import ChallengeList from './challengeList';

const Container = styled.div`
  background: #fff;
  height: 100%;
  padding: 8px;
  width: 30%;
`

class Sidebar extends React.Component {

  selectWeek = () => {
    debugger;
  }

  render() {
    return (
      <Container>
        <WeekSelect selectWeek={this.selectWeek} />
        <ChallengeList week={3} />
      </Container>
    );
  }
}

export default Sidebar;