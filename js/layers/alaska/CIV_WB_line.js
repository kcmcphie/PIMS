define([
  "esri/layers/GeoJSONLayer"
], function(GeoJSONLayer) {

  return new GeoJSONLayer({
    title: "CIV WB Lines",
    id: "civwb_line",

    url: "./data/CIV_WB_line.geojson",

    renderer: {
      type: "simple",
      symbol: {
        type: "simple-line",
        color: [255, 0, 0],
        width: 2,
        style: "solid"
      }
    },

    labelingInfo: [{
      labelExpressionInfo: {
        expression: "$feature.Name"
      },
      symbol: {
        type: "text",
        color: [255, 255, 255],
        haloColor: [0, 0, 0],  
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