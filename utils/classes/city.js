import * as turf from "@turf/helpers";
/** City class representing a city in Fortnite */
export default class City {
  /**
   * @param  {string} name The name of the city, e.g. 'Tilted Towers'
   * @param  {number} [radius=0.05] The radius of the city around its center point, should be somewhere between 0.05 and 0.1
   * @param  {number[]} center The center point of the city, Array of Lng Lat coordinates obeying to GeoJSON spec
   * @param  {number[]} anchor The anchor point of the city used for placing labels, Array of Lng Lat coordinates obeying to GeoJSON spec
   */
  constructor({ name, radius = 0.05, center, anchor }) {
    this.name = name;
    this.center = center;
    this.anchor = anchor;
    this.radius = radius;
  }

  /**
   * Get the center point of the city
   * @returns {number[]} The center point in [Lng, Lat], obeying GeoJSON spec
   */
  getCenter() {
    return [this.center];
  }
  /**
   * Get the anchor point as a GeoJSON Feature
   * @returns {Object} The anchor point object containing name property, obeying GeoJSON spec
   */
  getAnchorFeature() {
    const { name, anchor } = this;

    const geometry = {
      type: "Point",
      coordinates: anchor
    };

    const properties = {
      name
    };
    const feature = turf.feature(geometry, properties);
    return feature;
  }
  /**
   * Get the center point as a GeoJSON Feature
   * @returns {Object} The center point object containing name, radius properties, obeying GeoJSON spec
   */
  getCenterFeature() {
    const { name, radius, center } = this;

    const geometry = {
      type: "Point",
      coordinates: center
    };

    const properties = {
      name,
      radius
    };
    const feature = turf.feature(geometry, properties);
    return feature;
  }
}
