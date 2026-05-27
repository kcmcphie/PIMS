document.addEventListener("DOMContentLoaded", () => {

  require([
    "esri/Map",
    "esri/views/MapView",

    "./js/layers/labels.js",
    "./js/layers/hillshade.js",
    "./js/layers/states.js",
    "./js/layers/plss.js",
    "./js/layers/headframes.js",

    "./js/widgets/scalebar.js",
    "./js/widgets/layerList.js",
    "./js/widgets/legend.js",

    "./js/config/view.js"

  ], (
    Map,
    MapView,

    labelsLayer,
    hillshadeLayer,
    statesLayer,
    butte_plss,
    headframesLayer,

    createScaleBar,
    createLayerList,
    createLegend,

    viewConfig

  ) => {

    const map = new Map({
      basemap: {}
    });

    map.add(hillshadeLayer);
    map.add(statesLayer);
    map.add(butte_plss);
    map.add(headframesLayer);
    map.add(labelsLayer);
  

    const view = new MapView({
      ...viewConfig,
      container: "map",
      map: map
    });

    window.view = view;

    window.view.ui.move("attribution", "top-right");

    view.ui.add(createScaleBar(view), "bottom-left");
    view.ui.add(createLayerList(view), "top-right");
    view.ui.add(createLegend(view), "bottom-right");

  });

});