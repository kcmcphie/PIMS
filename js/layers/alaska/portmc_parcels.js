define([
  "esri/layers/GeoJSONLayer"
], function(GeoJSONLayer) {

  return new GeoJSONLayer({
    title: "Port MacKenzie Parcels",
    
    id: "portmc_parcels",

    url: "./data/portmc_parcels.geojson",

    visible: true,

    renderer: {
      type: "simple",

      symbol: {
        type: "simple-fill",

        color: [58, 15, 69, 0.2],

        outline: {
          color: [58, 15, 69, 1],
          width: 0.75
        }
      }
    }

  });

});