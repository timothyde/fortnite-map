import styled from 'styled-components';
import { Modal } from 'antd';
import Media from 'react-media';

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

  @media screen and (max-width: 768px) {
    max-width: calc(100% - 38px);
    margin: 4px;
  }
`

const Section = styled.div`
  background: rgba(70,40,40,0.75);
  margin-bottom: 8px;
  margin-left: 24px;
  width: 100%;
  -webkit-backdrop-filter: blur(10px);

  @media screen and (max-width: 768px) {
    margin: 0;
  }
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

const OpenModal = styled.button`
  background: transparent;
  border: none;
  font-family: 'Luckiest Guy';
  font-size: 24px;
  height: 24px;
  left: 8px;
  position: absolute;
  top: 8px;
  z-index: 1001;
`

class Sidebar extends React.Component {

  state = { visible: false }

  toggleModal = () => {
    this.setState({
      visible: !this.state.visible,
    });
  }

  bodyStyle = {
    padding: '0px'
  }

  render() {
    return (
      <Container>
        <Media query='(max-width: 768px)'>
          {matches =>
            !matches ? (
              <div>
                <Section>
                  <Heading>Season 5</Heading>
                  <Info>This map shows you all the locations and areas of a week's challenges. Simply go ahead and choose the week you need to complete.</Info>
                  <WeekSelect />
                </Section>
                <Section>
                  <HeadingSmall>challenges</HeadingSmall>
                  <ChallengeList week={3} />
                </Section>
              </div>
            ) : (
                <div>
                  <OpenModal onClick={this.toggleModal}>{this.state.visible ? 'Close' : 'Menu'}</OpenModal>
                  <Modal
                    style={{ top: 40, backgroundColor: 'transparent' }}
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={null}
                    bodyStyle={this.bodyStyle}
                  >
                    <Section>
                      <Heading>Season 5</Heading>
                      <Info>This map shows you all the locations and areas of a week's challenges. Simply go ahead and choose the week you need to complete.</Info>
                      <WeekSelect />
                    </Section>
                    <Section>
                      <HeadingSmall>challenges</HeadingSmall>
                      <ChallengeList week={3} />
                    </Section>
                  </Modal>
                </div>
              )
          }
        </Media>
      </Container>
    );
  }
}

export default Sidebar;