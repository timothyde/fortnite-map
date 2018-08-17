import { Collapse, List } from "antd";
import styled from "styled-components";

import AppContext from "../utils/context";

const StyledCollapse = styled(Collapse)`
  background-color: transparent !important;
  border-bottom: none;

  &&& .ant-collapse-content {
    overflow: visible !important;
    padding: 0 !important;
  }

  &&& .ant-collapse-content-box {
    padding: 0 !important;
  }
`;

const Panel = styled(Collapse.Panel)`
  border-bottom: 2px solid rgba(255, 255, 255, 0.3) !important;

  .ant-collapse-header {
    ${props =>
      props.isBattlePass
        ? "background: linear-gradient(to right, #503e2f 0%,#503e2f 50%,#3c302b 100%);"
        : "background: linear-gradient(to right, #43577a 0%,#43577a 50%,#2f3e5f 100%);"} height: 38px;
    overflow: hidden;
    padding: 0 !important;
    width: 100%;
  }

  i {
    display: none !important;
  }
`;

const ListHeadingTitle = styled.div`
  ${props =>
    props.isBattlePass
      ? "background: linear-gradient(to right, #976d3e 0%,#624a32 100%);"
      : "background: linear-gradient(to right, #708db7 0%,#51688d 100%);"} height: 38px;
  margin-left: -12px;
  padding: 0 16px 0 26px;
  transform: skewX(25deg);
  float: left;
  p {
    color: #d4ddea;
    text-transform: uppercase;
    font-weight: 500;
    line-height: 40px;
    font-size: 11px;
    transform: skewX(-25deg);
  }
`;

const Minimize = styled.div`
  border: 2px solid rgba(255, 255, 255, 0.7);
  width: 38px;
  height: 38px;
  position: absolute;
  margin-left: -44px;

  &:hover {
    cursor: pointer;
  }

  &::after {
    content: "-";
    display: ${props => (props.active ? "inline-block" : "none")};
    font-family: "Luckiest Guy";
    font-size: 38px;
    line-height: 44px;
    text-align: center;
    width: 100%;
  }
  &::before {
    content: "+";
    display: ${props => (props.active ? "none" : "inline-block")};
    font-family: "Luckiest Guy";
    font-size: 38px;
    line-height: 44px;
    text-align: center;
    width: 100%;
  }
`;

const ChallengeList = styled(List)`
  margin-bottom: ${props => (props.useMargin ? "4px" : "0px")};
`;

const Challenge = styled(List.Item)`
  &&& {
    background-color: ${props =>
      props.highlighted ? "rgba(250, 219, 20, 0.75)" : "transparent"};
    border-top: 2px solid rgba(255, 255, 255, 0.2);
    border-bottom: none;
    min-height: 40px;
    padding: 8px 16px;
    transition: background-color 200ms ease-in-out;
    width: 100%;
  }

  .ant-list-item-content {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
  }
`;

const ChallengeTitle = styled.div`
  color: ${props => (props.highlighted ? "#fff" : "rgba(255,255,255,0.7)")};
  font-weight: 300;
  transition: color 200ms ease-in-out;
  width: 100%;
`;

const ChallengeProperties = styled.div`
  background: #f00;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 900;
  font-size: 12px;
  line-height: 12px;
`;

const ChallengeItem = ({ challenge, highlighted, setHighlighted }) => (
  <Challenge
    onMouseEnter={() => setHighlighted([challenge.id])}
    onMouseLeave={() => setHighlighted([])}
    highlighted={highlighted ? 1 : 0}
  >
    <ChallengeTitle highlighted={highlighted ? 1 : 0}>
      {challenge.getName()}
    </ChallengeTitle>
  </Challenge>
);

export default class Challenges extends React.Component {
  state = {
    activeKeys: ["weekly", "battlePass"]
  };

  toggleActive = ({ key }) => {
    const { activeKeys } = this.state;

    const index = activeKeys.indexOf(key);
    if (index !== -1) {
      activeKeys.splice(index, 1);
    } else {
      activeKeys.push(key);
    }

    this.setState({
      activeKeys
    });
  };

  render() {
    return (
      <AppContext.Consumer>
        {context => (
          <StyledCollapse
            bordered={false}
            defaultActiveKey={this.state.activeKeys}
            activeKey={this.state.activeKeys}
          >
            <Minimize
              onClick={() => this.toggleActive({ key: "weekly" })}
              active={this.state.activeKeys.includes("weekly")}
            />
            <Panel
              header={
                <ListHeadingTitle>
                  <p>Weekly Challenges</p>
                </ListHeadingTitle>
              }
              key="weekly"
            >
              <ChallengeList
                size="large"
                dataSource={context.challenges
                  .getChallenges()
                  .filter(challenge => !challenge.isBattlePass)}
                renderItem={challenge => (
                  <ChallengeItem
                    highlighted={context.highlightedChallengeIds.includes(
                      challenge.id
                    )}
                    setHighlighted={context.setHighlighted}
                    challenge={challenge}
                  />
                )}
              />
            </Panel>
            <Minimize
              onClick={() => this.toggleActive({ key: "battlePass" })}
              active={this.state.activeKeys.includes("battlePass")}
            />
            <Panel
              isBattlePass
              header={
                <ListHeadingTitle isBattlePass>
                  <p>Battle Pass Challenges</p>
                </ListHeadingTitle>
              }
              key="battlePass"
            >
              <ChallengeList
                size="large"
                dataSource={context.challenges
                  .getChallenges()
                  .filter(challenge => challenge.isBattlePass)}
                renderItem={challenge => (
                  <ChallengeItem
                    highlighted={context.highlightedChallengeIds.includes(
                      challenge.id
                    )}
                    setHighlighted={context.setHighlighted}
                    challenge={challenge}
                  />
                )}
              />
            </Panel>
          </StyledCollapse>
        )}
      </AppContext.Consumer>
    );
  }
}
