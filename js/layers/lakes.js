define([
  "esri/layers/GeoJSONLayer"
], function(GeoJSONLayer) {

  return new GeoJSONLayer({
    title: "Lakes",

    id: "lakes",

    url: "./data/lakes.geojson",

    renderer: {
      type: "simple",

      symbol: {
        type: "simple-fill",

        color: [76, 166, 245, 1],

        outline: {
          color: [105, 105, 105, 1],
          width: 0.75
        }
      }
    }

  });

});