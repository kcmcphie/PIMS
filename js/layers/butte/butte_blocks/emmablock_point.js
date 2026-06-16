define([
  "esri/layers/GeoJSONLayer"
], function(GeoJSONLayer) {

  return new GeoJSONLayer({
    title: "Emma Block Points",
    id: "emmablock_point",

    url: "./data/emmablock_point.geojson",

    renderer: {
        type: "simple",
        symbol: {
            type: "simple-marker",
            color: [255, 255, 0],
            size: 8,
            outline: {
            color: [0, 0, 0],
            width: 1
            }
        }
    }

  });

});