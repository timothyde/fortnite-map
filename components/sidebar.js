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

  selectWeek = (week) => {
    console.log(week);
  }

  render() {
    return (
      <Container>
        <WeekSelect />
        <ChallengeList week={3} />
      </Container>
    );
  }
}

export default Sidebar;