define([
  "esri/layers/GeoJSONLayer"
], function(GeoJSONLayer) {

  return new GeoJSONLayer({

    title: "Port MacKenzie PLSS Sections",

    id: "portmc_plss",

    visible: false,

    url: "./data/portmc_plss.geojson",

    renderer: {
      type: "simple",

      symbol: {
        type: "simple-fill",

        color: [0, 0, 0, 0],

        outline: {
          color: [25, 26, 28, 1],
          width: 1
        }
      }
    },

    labelingInfo: [{

      labelExpressionInfo: {
        expression: "$feature.SECTION"
      },

      symbol: {
        type: "text",

        color: [25, 26, 28, 1],

        haloColor: [255, 255, 255, 1],
        haloSize: 1.5,

        font: {
          family: "Arial",
          size: 10
        }
      },

      labelPlacement: "always-horizontal"

    }],

    labelsVisible: true,

    minScale: 10000000

  });

});