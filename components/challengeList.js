import { List } from 'antd';
import styled from 'styled-components';

import challenges from '../utils/challenges';

const Challenge = styled(List.Item)`

`

const BattlePassChallenge = styled(List.Item)`
  background: #f0f0f0;
`

export default ({ week }) => (
  <div>
    <List
      size="large"
      bordered
      dataSource={challenges({ week }).getChallenges().filter(challenge => !challenge.isBattlePass)}
      renderItem={challenge => (<Challenge>{challenge.getName()}</Challenge>)}
    />
    <List
      size="large"
      bordered
      dataSource={challenges({ week }).getChallenges().filter(challenge => challenge.isBattlePass)}
      renderItem={challenge => (<BattlePassChallenge>{challenge.getName()}</BattlePassChallenge>)}
    />
  </div>
)