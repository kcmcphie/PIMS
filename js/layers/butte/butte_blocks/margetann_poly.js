define([
  "esri/layers/GeoJSONLayer"
], function(GeoJSONLayer) {

  return new GeoJSONLayer({
    title: "Marget Ann Polygons",
    id: "margetann_poly",

    url: "./data/margetann_poly.geojson",

    renderer: {
      type: "simple",
      symbol: {
          type: "simple-fill",
          color: [0, 0, 255, 0.15],
          outline: {
          color: [0, 0, 255],
          width: 1.5
          }
      }
    }

  });

});