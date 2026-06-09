define([
  "esri/layers/GeoJSONLayer"
], function(GeoJSONLayer) {

  const butte_plss = new GeoJSONLayer({

    title: "PLSS Sections",

    id: "butte_plss",

    visible: false,

    url: "./data/Butte_MT_PLSS_Sections.geojson",

    renderer: {
      type: "simple",

      symbol: {
        type: "simple-fill",

        color: [0, 0, 0, 0],

        outline: {
          color: [100, 100, 100, 1],
          width: 1
        }
      }
    },

    labelingInfo: [{

      labelExpressionInfo: {
        expression: "$feature.FRSTDIVLAB"
      },

      symbol: {
        type: "text",

        color: [60, 60, 60, 1],

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

  return butte_plss;

});