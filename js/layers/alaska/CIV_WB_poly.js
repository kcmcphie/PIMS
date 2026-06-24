define([
  "esri/layers/GeoJSONLayer"
], function(GeoJSONLayer) {

  return new GeoJSONLayer({
    title: "CIV WB Polygons",
    id: "civwb_poly",

    url: "./data/CIV_WB_poly.geojson",

    renderer: {
      type: "simple",
      symbol: {
          type: "simple-fill",
          color: [255, 0, 0, 0.15],
          outline: {
          color: [255, 0, 0],
          width: 1.5
          }
      }
    }

  });

});