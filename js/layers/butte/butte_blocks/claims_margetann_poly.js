define([
  "esri/layers/GeoJSONLayer"
], function(GeoJSONLayer) {

  return new GeoJSONLayer({
    title: "Claims Marget Ann Polygons",
    id: "claims_margetann_poly",

    url: "./data/claims_margetann_poly.geojson",

    renderer: {
      type: "simple",
      symbol: {
          type: "simple-fill",
          color: [0, 255, 255, 0.15],
          outline: {
          color: [0, 255, 255],
          width: 1.5
          }
      }
    }

  });

});