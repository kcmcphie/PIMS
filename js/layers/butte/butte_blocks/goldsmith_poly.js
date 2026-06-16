define([
  "esri/layers/GeoJSONLayer"
], function(GeoJSONLayer) {

  return new GeoJSONLayer({
    title: "Goldmsith Block Polygons",
    id: "goldsmithblock_poly",

    url: "./data/goldsmith_poly.geojson",

    renderer: {
      type: "simple",
      symbol: {
          type: "simple-fill",
          color: [0, 255, 0, 0.15],
          outline: {
          color: [0, 255, 0],
          width: 1.5
          }
      }
    }

  });

});