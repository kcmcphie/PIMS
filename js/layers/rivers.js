define([
  "esri/layers/GeoJSONLayer"
], function(GeoJSONLayer) {

  return new GeoJSONLayer({
    title: "Rivers",

    id: "rivers",

    url: "./data/rivers.geojson",

    renderer: {
      type: "simple",

      symbol: {
        type: "simple-line",

        color: [76, 166, 245, 0.55],

        width: 1.5
      }
    }

  });

});