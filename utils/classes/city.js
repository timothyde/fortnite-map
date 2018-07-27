import * as turf from '@turf/helpers';

export default class City {
  constructor({ name, radius, center, anchor }) {
    this.name = name;
    this.center = center;
    this.anchor = anchor;
    this.radius = radius ? radius : 0.05;
  }

  getCenter() {
    return [this.center]
  }

  getAnchorFeature() {
    const { name, anchor } = this;

    const geometry = {
      type: 'Point',
      coordinates: anchor
    }

    const properties = {
      name
    }
    const feature = turf.feature(geometry, properties);
    return feature;
  }

  getCenterFeature() {
    const { name, radius, center } = this;

    const geometry = {
      type: 'Point',
      coordinates: center
    }

    const properties = {
      name,
      radius
    }
    const feature = turf.feature(geometry, properties);
    return feature;
  }
}