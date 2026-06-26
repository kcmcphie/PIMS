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
          "Butte, MT",
          "Butte PLSS Sections",
          "Headframes",
          "Silverbow Parcels",
          "Contours",
          "SBM Surface Blocks", 
          "Emma Block",
          "Emma Block Polygons",
          "Emma Block Points",
          "BJS Ferry Lane Polygons",
          "Goldsmith Block",
          "Goldmsith Block Polygons",
          "Goldsmith Block Points",
          "Claims Great Republic Polygons",
          "Claims Marget Ann Polygons",
          "Claims Rainbow Polygons",
          "Great Republic Block",
          "Great Republic Points",
          "Great Replublic Polygons",
          "Marget Ann Block",
          "Marget Ann Points",
          "Marget Ann Polygons",
          "Rainbow Block",
          "Rainbow Points",
          "Rainbow Polygons",
          "Travona Block",
          "Travona Points",
          "Travona Polygons",
          "Anchorage, AK",
          "CIV WB",
          "CIV WB Polygons",
          "CIV WB Points",
          "CIV WB Lines",
          "Port MacKenzie, AK",
          "Port MacKenzie PLSS Sections"
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