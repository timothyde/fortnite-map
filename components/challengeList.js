import { List } from 'antd';
import styled from 'styled-components';

import AppContext from '../utils/context';

const Challenge = styled(List.Item)`

`

const BattlePassChallenge = styled(List.Item)`
  background: #f0f0f0;
`

export default ({ week }) => (
  <AppContext.Consumer>
    {(context) => (
      <div>
        <List
          size="large"
          bordered
          dataSource={context.challenges.getChallenges().filter(challenge => !challenge.isBattlePass)}
          renderItem={challenge => (<Challenge>{challenge.getName()}</Challenge>)}
        />
        <List
          size="large"
          bordered
          dataSource={context.challenges.getChallenges().filter(challenge => challenge.isBattlePass)}
          renderItem={challenge => (<BattlePassChallenge>{challenge.getName()}</BattlePassChallenge>)}
        />
      </div>
    )}
  </AppContext.Consumer>
)