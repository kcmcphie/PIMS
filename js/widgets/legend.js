define([
  "esri/widgets/Legend",
  "esri/widgets/Expand"
], function(Legend, Expand) {

  return function(view) {

    const legend = new Legend({
      view: view,

      layerInfos: [
        {
          layer: view.map.findLayerById("butte_plss"),
          title: "PLSS Sections"
        },
        {
          layer: view.map.findLayerById("head_frames"),
          title: "Headframes"
        },
        {
          layer: view.map.findLayerById("parcels"),
          title: "Silver Bow Parcels"
        }, 
        {
          layer: view.map.findLayerById("contours"),
          title: "10m Contours"
        },

        // SBM Blocks 
        {
          layer: view.map.findLayerById("emmablock_poly"),
          title: "Emma Block"
        },
        {
          layer: view.map.findLayerById("goldsmithblock_poly"),
          title: "Goldsmith Block"
        },
        {
          layer: view.map.findLayerById("greatrep_poly"),
          title: "Great Republic Block"
        },
        {
          layer: view.map.findLayerById("margetann_poly"),
          title: "Marget Ann Block"
        },
        {
          layer: view.map.findLayerById("rainbow_poly"),
          title: "Rainbow Block"
        },
        {
          layer: view.map.findLayerById("travona_poly"),
          title: "Travona Block"
        },
        {
          layer: view.map.findLayerById("ferrylane_poly"),
          title: "Ferry Lane"
        },
        {
          layer: view.map.findLayerById("claims_greatrep_poly"),
          title: "Great Republic Claims"
        },
        {
          layer: view.map.findLayerById("claims_margetann_poly"),
          title: "Marget Ann Claims"
        },
        {
          layer: view.map.findLayerById("claims_rainbow_poly"),
          title: "Rainbow Claims"
        }
      ]
    });

    return new Expand({
      view: view,

      content: legend,

      expanded: false,

      expandTooltip: "Legend",

      expandIcon: "legend"
    });

  };

});