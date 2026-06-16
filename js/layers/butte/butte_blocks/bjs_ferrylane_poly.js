define([
  "esri/layers/GeoJSONLayer"
], function(GeoJSONLayer) {

  return new GeoJSONLayer({
    title: "BJS Ferry Lane Polygons",
    id: "ferrylane_poly",

    url: "./data/bjs_ferrylane_poly.geojson",

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