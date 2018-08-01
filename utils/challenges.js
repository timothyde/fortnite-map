import Week from './classes/week';

import week1 from './season5/week1';
import week2 from './season5/week2';
import week3 from './season5/week3';

export default ({ week }) => {
  switch (week) {
    case 1:
      return week1;
    case 2:
      return week2;
    case 3:
      return week3;
    default:
      return new Week([]);
  }
}