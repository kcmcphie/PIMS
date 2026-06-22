define([
  "esri/layers/GeoJSONLayer"
], function(GeoJSONLayer) {

  return new GeoJSONLayer({
    title: "Claims Rainbow Polygons",
    id: "claims_rainbow_poly",

    url: "./data/claims_rainbow_poly.geojson",

    renderer: {
      type: "simple",
      symbol: {
          type: "simple-fill",
          color: [255, 127, 127, 0.15],
          outline: {
          color: [255, 127, 127],
          width: 1.5
          }
      }
    }

  });

});