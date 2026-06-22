define([
  "esri/layers/GeoJSONLayer"
], function(GeoJSONLayer) {

  return new GeoJSONLayer({
    title: "Claims Great Republic Polygons",
    id: "claims_greatrep_poly",

    url: "./data/claims_greatrep_poly.geojson",

    renderer: {
      type: "simple",
      symbol: {
          type: "simple-fill",
          color: [191, 0, 255, 0.15],
          outline: {
          color: [255, 0, 0],
          width: 1.5
          }
      }
    }

  });

});