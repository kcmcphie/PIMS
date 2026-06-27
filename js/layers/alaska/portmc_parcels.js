define([
  "esri/layers/GeoJSONLayer"
], function(GeoJSONLayer) {

  return new GeoJSONLayer({
    title: "Port MacKenzie Parcels",
    
    id: "portmc_parcels",

    url: "./data/portmc_parcels.geojson",

    visible: false,

    renderer: {
      type: "simple",

      symbol: {
        type: "simple-fill",

        color: [0, 0, 0, 0],

        outline: {
          color: [61, 108, 62, 1],
          width: 0.75
        }
      }
    }

  });

});