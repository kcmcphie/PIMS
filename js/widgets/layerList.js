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
          "Headframes"
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