define([
  "esri/layers/GeoJSONLayer"
], function(GeoJSONLayer) {

  return new GeoJSONLayer({
    title: "Great Replublic Polygons",
    id: "greatrep_poly",

    url: "./data/greatrep_poly.geojson",

    renderer: {
      type: "simple",
      symbol: {
          type: "simple-fill",
          color: [191, 0, 255, 0.15],
          outline: {
          color: [191, 0, 255],
          width: 1.5
          }
      }
    }

  });

});