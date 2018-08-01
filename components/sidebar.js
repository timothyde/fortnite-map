import styled from 'styled-components';

import WeekSelect from './weekSelect';
import ChallengeList from './challengeList';

const Container = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  padding: 3px;
  max-width: 30vw;
  margin: 8px;
  max-height: 90vh;
`

const Section = styled.div`
  background: rgba(150,0,0,0.35);
  margin-bottom: 8px;
  margin-left: 24px;
  width: 100%;
  -webkit-backdrop-filter: blur(10px);
`

const Heading = styled.div`
  background: rgba(0,0,0,0.55);
  color: #fff;
  font-family: 'Luckiest Guy';
  font-size: 28px;
  height: 32px;
  line-height: 38px;
  padding: 2px 8px;
  text-transform: uppercase;
  width: 100%;
`

const HeadingSmall = styled.div`
  background: rgba(0,0,0,0.55);
  color: #fff;
  font-family: 'Luckiest Guy';
  font-size: 18px;
  height: 24px;
  line-height: 26px;
  padding: 2px 8px;
  text-transform: uppercase;
  width: 100%;
`

const Info = styled.div`
  color: #fff;
  width: 100%;
  padding: 2px 8px;
`

class Sidebar extends React.Component {

  selectWeek = (week) => {
    console.log(week);
  }

  render() {
    return (
      <Container>
        <Section>
          <Heading>Season 5</Heading>
          <Info>Ipsum sanctus dolores et sit consetetur amet accusam invidunt consetetur dolor, rebum sed sea dolor accusam dolore ea sea, sed.</Info>
          <WeekSelect />
        </Section>
        <Section>
          <HeadingSmall>challenges</HeadingSmall>
          <ChallengeList week={3} />
        </Section>
      </Container>
    );
  }
}

export default Sidebar;