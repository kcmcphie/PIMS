define([
  "esri/layers/GeoJSONLayer"
], function(GeoJSONLayer) {

  return new GeoJSONLayer({
    title: "Emma Block Polygons",
    id: "emmablock_poly",

    url: "./data/emmablock_poly.geojson",

    renderer: {
      type: "simple",
      symbol: {
          type: "simple-fill",
          color: [255, 140, 0, 0.15],
          outline: {
          color: [255, 140, 0],
          width: 1.5
          }
      }
    }

  });

});