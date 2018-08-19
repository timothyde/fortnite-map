import { notification } from "antd";

import compareArrays from "./compareArrays";

const notificationStyle = {
  color: "#fff"
};

/**
 * @param  {MapboxGl} map the map instance to set the listeners on
 * @param  {Array} highlightedChallengeIds the array of currently highlighted challenge IDs
 * @param  {function} setHighlighted the function inside of context to set new highlights
 */
export default ({ map, highlightedChallengeIds, setHighlighted }) => {
  // used for location finding
  map.on("click", e => {
    console.log(e.lngLat);
  });

  // set highlight on mousemove
  map.on("mousemove", e => {
    const layerIds = map
      .queryRenderedFeatures(e.point)
      .filter(layer => !!layer.properties.id)
      .map(layer => layer.properties.id);

    const areEqual = compareArrays(layerIds, highlightedChallengeIds);
    if (!areEqual) {
      setHighlighted(layerIds);
    }
  });

  // display challenge info on touch
  map.on("touchstart", e => {
    const features = map.queryRenderedFeatures(e.point, {
      layers: ["challenges-areas", "challenges-points"]
    });

    if (features.length) {
      features.forEach(feature => {
        notification.open({
          btn: <p />,
          className: "challenge-notification",
          description: feature.properties.name,
          onClose: () => {
            setHighlighted([]);
          },
          placement: "bottomLeft"
        });
      });
    }
    console.log(features);
  });
};
