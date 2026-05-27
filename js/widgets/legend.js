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