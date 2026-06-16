define([
  "esri/layers/GeoJSONLayer"
], function(GeoJSONLayer) {

  return new GeoJSONLayer({
    title: "Goldsmith Block Points",
    id: "goldsmithblock_point",

    url: "./data/goldsmith_point.geojson",

    renderer: {
        type: "simple",
        symbol: {
            type: "simple-marker",
            color: [0, 255, 0],
            size: 8,
            outline: {
            color: [0, 0, 0],
            width: 1
            }
        }
    }

  });

});