define([
  "esri/layers/GeoJSONLayer"
], function(GeoJSONLayer) {

  return new GeoJSONLayer({
    title: "Roads",

    id: "roads",

    url: "./data/roads.geojson",

    renderer: {
      type: "simple",

      symbol: {
        type: "simple-line",

        color: [64, 39, 24, 1],

        width: 1
      }
    }

  });

});