define([
  "esri/layers/TileLayer"
], function(TileLayer) {

  return new TileLayer({
    title: "Hillshade",

    url: "https://services.arcgisonline.com/ArcGIS/rest/services/Elevation/World_Hillshade/MapServer",

    opacity: 0.75,

    blendMode: "multiply"
  });

});