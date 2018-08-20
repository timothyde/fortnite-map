/** Class representing a week of challenges. */
export default class Week {
  /**
   * @param  {Challenge[]} [challenges=[]] array of a Week's challenges
   */
  constructor(challenges = []) {
    this.challenges = challenges;
  }
  /**
   * Get the array of Challenge instances of a week
   * @return {Challenge[]} The array of challenges
   */
  getChallenges() {
    return this.challenges;
  }
  /**
   * Get an object containing the challenges in GeoJSON format
   * @return {Object} The object according to GeoJSON spec
   */
  getFeatureCollection() {
    const features = this.challenges.map(challenge => challenge.getFeature());
    const collection = {
      type: "FeatureCollection",
      features
    };
    return collection;
  }
}
