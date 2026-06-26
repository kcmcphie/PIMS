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
    },

        labelingInfo: [{
      labelExpressionInfo: {
        expression: "$feature.Name"
      },
      symbol: {
        type: "text",
        color: [255, 0, 0],
        haloColor: [255, 255, 255],  
        haloSize: 2,
        yoffset: 80,
        font: {
          size: 18,
          family: "Arial",
          weight: "bold"
        }
      }
    }],

    labelsVisible: true

  });

});