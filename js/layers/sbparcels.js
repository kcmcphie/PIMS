define([
  "esri/layers/GeoJSONLayer"
], function(GeoJSONLayer) {

  return new GeoJSONLayer({
    title: "Silverbow Parcels",
    
    id: "parcels",

    url: "./data/silverbow_parcels.geojson",

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