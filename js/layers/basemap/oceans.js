define([
  "esri/layers/GeoJSONLayer"
], function(GeoJSONLayer) {

  return new GeoJSONLayer({
    title: "Oceans",

    id: "oceans",

    url: "./data/oceans.geojson",

    renderer: {
      type: "simple",

      symbol: {
        type: "simple-fill",

        color: [76, 166, 245, 0.35],

        outline: {
          color: [105, 105, 105, 1],
          width: 0.75
        }
      }
    }

  });

});