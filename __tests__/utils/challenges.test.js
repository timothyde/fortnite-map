import challenges, { defaultWeek } from "../../utils/challenges";

test("should return week 1 data", () => {
  const week = challenges({ week: 1 });
  expect(week.getChallenges().length).not.toBe(0);
});

test("should return week 2 data", () => {
  const week = challenges({ week: 2 });
  expect(week.getChallenges().length).not.toBe(0);
});

test("should return week 3 data", () => {
  const week = challenges({ week: 3 });
  expect(week.getChallenges().length).not.toBe(0);
});

test("should return week 4 data", () => {
  const week = challenges({ week: 4 });
  expect(week.getChallenges().length).not.toBe(0);
});

test("should return week 5 data", () => {
  const week = challenges({ week: 5 });
  expect(week.getChallenges().length).not.toBe(0);
});

test("should return week 6 data", () => {
  const week = challenges({ week: 6 });
  expect(week.getChallenges().length).not.toBe(0);
});

test("should return empty week", () => {
  expect(challenges().getChallenges().length).toBe(0);
  expect(challenges({}).getChallenges().length).toBe(0);
  expect(challenges({ week: "x" }).getChallenges().length).toBe(0);
});

test("should return a default week", () => {
  expect(defaultWeek).toBeDefined();
  expect(typeof defaultWeek).toBe("number");
});
