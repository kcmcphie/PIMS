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

        color: [252, 252, 0, 1],

        outline: {
          color: [105, 105, 105, 1],
          width: 1.5
        }
      }
    }

  });

  return head_frames;

});