define([
  "esri/widgets/LayerList",
  "esri/widgets/Expand"
], function(LayerList, Expand) {

  return function(view) {

    const layerList = new LayerList({
      view: view,

      listItemCreatedFunction: (event) => {

        const item = event.item;

        const visibleLayers = [
          "PLSS Sections",
          "Headframes",
          "Silverbow Parcels",
          "Contours",
          "SBM Surface Blocks", 
          "Emma Block",
          "Emma Block Polygons",
          "Emma Block Points",
          "BJS Ferry Lane Polygons"
        ];

        if (!visibleLayers.includes(item.title)) {
          item.hidden = true;
        }
      }
    });

    return new Expand({
      view: view,

      content: layerList,

      expanded: false,

      expandTooltip: "Layers",

      expandIcon: "layers"
    });

  };

});