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

        color: [58, 15, 69, 0.2],

        outline: {
          color: [58, 15, 69, 1],
          width: 0.75
        }
      }
    }

  });

});