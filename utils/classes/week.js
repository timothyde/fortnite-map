export default class Week {
  constructor(challenges = []) {
    this.challenges = challenges;
  }

  getChallenges() {
    return this.challenges;
  }

  getFeatureCollection() {
    const features = this.challenges.map(challenge => challenge.getFeature());
    const collection = {
      type: 'FeatureCollection',
      features
    }
    return collection;
  }

}