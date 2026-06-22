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
            color: [255, 191, 0,],
            size: 8,
            outline: {
            color: [0, 0, 0],
            width: 1
            }
        }
    },

    labelingInfo: [{
      labelExpressionInfo: {
        expression: "$feature.Name"
      },
      symbol: {
        type: "text",
        color: [255, 255, 255],
        haloColor: [255, 191, 0], 
        haloSize: 2,
        font: {
          size: 10,
          family: "Arial",
          weight: "bold"
        }
      },
      labelPlacement: "above-center"
    }],

    labelsVisible: true

  });

});