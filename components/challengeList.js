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
      dataSource={challenges({ week }).features.filter(challenge => !challenge.properties.isBattlePass)}
      renderItem={challenge => (<Challenge>{challenge.properties.name}</Challenge>)}
    />
    <List
      size="large"
      bordered
      dataSource={challenges({ week }).features.filter(challenge => challenge.properties.isBattlePass)}
      renderItem={challenge => (<BattlePassChallenge>{challenge.properties.name}</BattlePassChallenge>)}
    />
  </div>
)