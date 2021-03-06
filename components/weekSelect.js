import { Select } from "antd";
import styled from "styled-components";

import AppContext from "../utils/context";

const Option = Select.Option;

const Container = styled.div`
  width: 100%;
`;

const StyledSelect = styled(Select)`
  width: 100%;
`;

export default props => (
  <Container>
    {/* <StyledSelect size='large' defaultValue={5} onChange={props.selectSeason}>
      <Option value={1} disabled>Season 1</Option>
      <Option value={2} disabled>Season 2</Option>
      <Option value={3} disabled>Season 3</Option>
      <Option value={4} disabled>Season 4</Option>
      <Option value={5}>Season 5</Option>
    </StyledSelect> */}
    <AppContext.Consumer>
      {context => (
        <StyledSelect
          size="large"
          defaultValue={context.week}
          onChange={context.selectWeek}
        >
          <Option value={1}>Week 1</Option>
          <Option value={2}>Week 2</Option>
          <Option value={3}>Week 3</Option>
          <Option value={4}>Week 4</Option>
          <Option value={5}>Week 5</Option>
          <Option value={6}>Week 6</Option>
          <Option value={7} disabled>
            Week 7
          </Option>
          <Option value={8} disabled>
            Week 8
          </Option>
          <Option value={9} disabled>
            Week 9
          </Option>
          <Option value={10} disabled>
            Week 10
          </Option>
        </StyledSelect>
      )}
    </AppContext.Consumer>
  </Container>
);
