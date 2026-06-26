define([
  "esri/layers/GeoJSONLayer"
], function(GeoJSONLayer) {

  const portmc_plss = new GeoJSONLayer({

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
          color: [100, 100, 100, 1],
          width: 1
        }
      }
    },

  });

  return portmc_plss;

});