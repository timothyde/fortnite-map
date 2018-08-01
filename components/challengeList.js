import { List } from 'antd';
import styled from 'styled-components';

import AppContext from '../utils/context';

const ListHeading = styled.div`
  ${props => props.isBattlePass ? (
    'background: linear-gradient(to right, #503e2f 0%,#503e2f 50%,#3c302b 100%);'
  ) : (
      'background: linear-gradient(to right, #43577a 0%,#43577a 50%,#2f3e5f 100%);'
    )}
  height: 38px;
  overflow: hidden;
  width: 100%;
`

const ListHeadingTitle = styled.div`
  ${props => props.isBattlePass ? (
    'background: linear-gradient(to right, #976d3e 0%,#624a32 100%);'
  ) : (
      'background: linear-gradient(to right, #708db7 0%,#51688d 100%);'
    )}
  height: 38px;
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
`

const ChallengeList = styled(List)`
  margin-bottom: ${props => props.useMargin ? '4px' : '0px'};
`

const Challenge = styled(List.Item)`

  &&& {
    border-top: 2px solid rgba(255,255,255,0.2);
    border-bottom: none;
    min-height: 40px;
    padding: 8px 16px;
    width: 100%;
  }

  .ant-list-item-content {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
  }
`

const ChallengeTitle = styled.div`
  color: rgba(255,255,255,0.7);
  font-weight: 300;
  width: 100%;
`

const ChallengeProperties = styled.div`
  background: #f00;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 900;
  font-size: 12px;
  line-height: 12px;
`

const ChallengeItem = ({ challenge }) => (
  <Challenge>
    <ChallengeTitle>{challenge.getName()}</ChallengeTitle>
  </Challenge>
)

export default () => (
  <AppContext.Consumer>
    {(context) => (
      <div>
        <ListHeading>
          <ListHeadingTitle>
            <p>Weekly Challenges</p>
          </ListHeadingTitle>
        </ListHeading>
        <ChallengeList
          size="large"
          dataSource={context.challenges.getChallenges().filter(challenge => !challenge.isBattlePass)}
          renderItem={challenge => (<ChallengeItem challenge={challenge} />)}
        />
        <ListHeading isBattlePass>
          <ListHeadingTitle isBattlePass>
            <p>Battle Pass Challenges</p>
          </ListHeadingTitle>
        </ListHeading>
        <ChallengeList
          size="large"
          dataSource={context.challenges.getChallenges().filter(challenge => challenge.isBattlePass)}
          renderItem={challenge => (<ChallengeItem challenge={challenge} />)}
        />
      </div>
    )}
  </AppContext.Consumer>
)