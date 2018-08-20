import uid from "uid";
import * as turf from "@turf/helpers";
import circle from "@turf/circle";

export default class Challenge {
  /**
   * @construcor
   * @param  {string} type - The type of the challenge. Must be one of 'Area', 'MultiPoint', 'Point', 'Misc'
   * @param  {string} name - The name of the challenge
   * @param  {array} coordinates - The coordinates of the challenge, array of LatLng arrays; e.g. [[1,0],[0,1]]
   * @param  {number} xp - Amount of XP
   * @param  {number} stars - Amount of Stars
   * @param  {number} target - Target value
   * @param  {boolean} isBattlePass - Specifies whether or not it is a battle pass challenge or not
   * @param  {boolean} isHard - Specifies whether or not challenge is marked as (HARD)
   * @param  {string} color - The color to display
   * @param  {number} radius - a radius, usually using a City's radius property
   * @param  {string} icon - the name of the icon sprite, must be identical to the name specified in the respective JSON file
   */
  constructor({
    type,
    name,
    coordinates,
    xp,
    stars,
    target,
    isBattlePass,
    isHard,
    color,
    radius,
    icon
  }) {
    this.color = color ? color : "#722ed1";
    this.coordinates = coordinates;
    this.icon = icon ? icon : "default";
    this.id = uid();
    this.isBattlePass = isBattlePass;
    this.isHard = isHard;
    this.name = name;
    this.radius = radius ? radius : 0.05;
    this.stars = stars;
    this.target = target;
    this.type = type;
    this.xp = xp;
  }

  /**
   * Returns the name and adds the (HARD) suffix if necessary
   * @getName
   */
  getName() {
    return `${this.name}${this.isHard ? " (HARD)" : ""}`;
  }

  /**
   * Returns the geometry according to GeoJSON spec, depending on type of challenge
   * @returns {Object} the geometry according to GeoJSON spec
   */
  getGeometry() {
    switch (this.type) {
      case "MultiPoint": {
        const coordinates = this.coordinates;
        const geometry = {
          type: "MultiPoint",
          coordinates
        };
        return geometry;
      }
      case "Point": {
        const coordinates = this.coordinates.length ? this.coordinates[0] : [];
        const geometry = {
          type: "Point",
          coordinates
        };
        return geometry;
      }
      case "Area": {
        const coordinates = this.coordinates.length ? this.coordinates[0] : [];

        const radius = this.radius;
        const options = { steps: 40, units: "kilometers" };
        const area = circle(coordinates, radius, options);

        return area.geometry;
      }
      default: {
        const geometry = {
          type: "Point",
          coordinates: []
        };
        return geometry;
      }
    }
  }

  /**
   * Returns the feature according to GeoJSON spec with properties and geometry
   * @getFeature
   */
  getFeature() {
    const { xp, stars, id, target, isBattlePass, color, radius, icon } = this;

    const geometry = this.getGeometry();
    const properties = {
      name: this.getName(),
      xp,
      stars,
      id,
      icon,
      target,
      isBattlePass,
      color
    };
    const feature = turf.feature(geometry, properties, { id });
    return feature;
  }
}
