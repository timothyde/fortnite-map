import Week from './classes/week';

import week3 from './season5/week3';

export default ({ week }) => {
  switch (week) {
    case 3:
      return week3;
    default:
      return new Week([]);
  }
}