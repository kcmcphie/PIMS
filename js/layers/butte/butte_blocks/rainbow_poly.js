define([
  "esri/layers/GeoJSONLayer"
], function(GeoJSONLayer) {

  return new GeoJSONLayer({
    title: "Rainbow Polygons",
    id: "rainbow_poly",

    url: "./data/rainbow_poly.geojson",

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