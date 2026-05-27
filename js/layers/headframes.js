define([
  "esri/layers/GeoJSONLayer"
], function(GeoJSONLayer) {

  return new GeoJSONLayer({
    title: "Headframes",

    id: "head_frames",

    url: "./data/headframes.geojson",

    visible: true,

    renderer: {
      type: "simple",

      symbol: {
        type: "simple-marker",

        style: "circle",

        size: 6,

        color: [0, 120, 255, 230],

        outline: {
          color: [255, 255, 255, 255],
          width: 1
        }
      }
    }

  });

  return head_frames;

});