import Week from "./classes/week";

import week1 from "./season5/week1";
import week2 from "./season5/week2";
import week3 from "./season5/week3";
import week4 from "./season5/week4";
import week5 from "./season5/week5";
import week6 from "./season5/week6";
/**
 * @param  {number} week The number of the week to fetch
 * @returns {Week} the desired Week object containing a week's challenges, or an empty week as default
 */
export default ({ week }) => {
  switch (week) {
    case 1:
      return week1;
    case 2:
      return week2;
    case 3:
      return week3;
    case 4:
      return week4;
    case 5:
      return week5;
    case 6:
      return week6;
    default:
      return new Week([]);
  }
};

export const defaultWeek = 6;
