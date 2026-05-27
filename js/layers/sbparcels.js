define([
  "esri/layers/GeoJSONLayer"
], function(GeoJSONLayer) {

  return new GeoJSONLayer({
    title: "Silverbow Parcels",
    
    id: "parcels",

    url: "./data/silverbow_parcels.geojson",

    renderer: {
      type: "simple",

      symbol: {
        type: "simple-fill",

        color: [229, 116, 116, 165],

        outline: {
          color: [105, 105, 105, 1],
          width: 0.75
        }
      }
    }

  });

});