define([
  "esri/layers/GeoJSONLayer"
], function(GeoJSONLayer) {

  return new GeoJSONLayer({
    title: "World",

    id: "world",

    url: "./data/world.geojson",

    renderer: {
      type: "simple",

      symbol: {
        type: "simple-fill",

        color: [61, 108, 62, 0.15],

        outline: {
          color: [105, 105, 105, 1],
          width: 0.75
        }
      }
    }

  });

});