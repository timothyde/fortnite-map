import uid from 'uid';
import * as turf from '@turf/helpers';
import circle from '@turf/circle';

export default class Challenge {

  /**
   * @construcor
   * @param  {string} type - The type of the challenge. Must be one of 'Area', 'MultiPoint', 'Point', 'Misc'
   * @param  {string} name - The name of the challenge
   * @param  {array} coordinates - The coordinates of the challenge, array of LatLng arrays; e.g. [[1,0],[0,1]]
   * @param  {number} xp - Amount of XP
   * @param  {number} target - Target value
   * @param  {boolean} isBattlePass - Specifies whether or not it is a battle pass challenge or not
   * @param  {boolean} isHard - Specifies whether or not challenge is marked as (HARD)
   */
  constructor({ type, name, coordinates, xp, stars, target, isBattlePass, isHard, color, radius }) {
    this.type = type;
    this.name = name;
    this.coordinates = coordinates;
    this.xp = xp;
    this.stars = stars;
    this.target = target;
    this.isBattlePass = isBattlePass;
    this.isHard = isHard;
    this.color = color ? color : '#722ed1';
    this.radius = radius ? radius : 0.05;
    this.id = Math.round(Math.random());
  }

  /**
   * Returns the name and adds the (HARD) suffix if necessary
   * @getName
   */
  getName() {
    return `${this.name}${this.isHard ? ' (HARD)' : ''}`
  }

  /**
   * Returns the geometry according to GeoJSON spec, depending on type of challenge
   * @getGeometry
   */
  getGeometry() {
    switch (this.type) {

      case 'MultiPoint': {
        const coordinates = this.coordinates;
        const geometry = {
          type: 'MultiPoint',
          coordinates
        }
        return (geometry);
      }
      case 'Point': {
        const coordinates = this.coordinates.length ? this.coordinates[0] : [];
        const geometry = {
          type: 'Point',
          coordinates
        }
        return geometry;
      }
      case 'Area': {

        const coordinates = this.coordinates.length ? this.coordinates[0] : [];

        const radius = this.radius;
        const options = { steps: 40, units: 'kilometers' };
        const area = circle(coordinates, radius, options);

        return area.geometry;
      }
      default: {
        const geometry = {
          type: 'Point',
          coordinates: []
        }
        return geometry;
      }
    }
  }

  /**
   * Returns the feature according to GeoJSON spec with properties and geometry
   * @getFeature
   */
  getFeature() {

    const { xp, stars, id, target, isBattlePass, color, radius } = this;

    const geometry = this.getGeometry();
    const properties = {
      name: this.getName(),
      xp,
      stars,
      id,
      target,
      isBattlePass,
      color
    }
    const feature = turf.feature(geometry, properties, { id });
    return feature;
  }

}