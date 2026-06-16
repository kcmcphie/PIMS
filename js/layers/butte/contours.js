define([
  "esri/layers/GeoJSONLayer"
], function(GeoJSONLayer) {

  return new GeoJSONLayer({
    id: "contours",

    title: "Contours",

    url: "./data/contours.geojson",

    visible: false,

    renderer: {
      type: "simple",

      symbol: {
        type: "simple-line",

        color: [59, 59, 59, 1],

        width: 0.5
      }
    },

    labelingInfo: [{

      labelExpressionInfo: {
        expression: "Round($feature.Contour * 3.28084, 0)"
      },

      symbol: {
        type: "text",

        color: [80, 80, 80, 255],

        haloColor: [255, 255, 255, 255],
        haloSize: 1.5,

        font: {
          family: "Arial",
          size: 8
        }
      },

      labelPlacement: "center-along"
    }],

    labelsVisible: true
  });

});