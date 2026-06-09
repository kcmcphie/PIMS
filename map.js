document.addEventListener("DOMContentLoaded", () => {

  require([
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/GroupLayer",

    "./js/layers/labels.js",
    "./js/layers/hillshade.js",
    "./js/layers/states.js",
    "./js/layers/world.js",
    "./js/layers/plss.js",
    "./js/layers/headframes.js",
    "./js/layers/sbparcels.js",
    "./js/layers/contours.js",

    "./js/widgets/scalebar.js",
    "./js/widgets/layerList.js",
    "./js/widgets/legend.js",
    "./js/widgets/basemapToggle.js",

    "./js/config/view.js"

  ], (
    Map,
    MapView,
    GroupLayer,

    labelsLayer,
    hillshadeLayer,
    statesLayer,
    worldLayer,
    butte_plss,
    headframesLayer,
    parcelsLayer,
    contoursLayer,

    createScaleBar,
    createLayerList,
    createLegend,
    createBasemapToggle,

    viewConfig

  ) => {

    const map = new Map({
      basemap: "oceans"
    });

    const customBasemap = new GroupLayer({
      title: "Custom Basemap",
      visibilityMode: "independent",
      visible: true,
      layers: [
        hillshadeLayer,
        worldLayer,
        statesLayer,
        labelsLayer
      ]
    });


    map.add(customBasemap);
    map.add(parcelsLayer);
    map.add(contoursLayer);
    map.add(butte_plss);
    map.add(headframesLayer);

  
    const view = new MapView({
      ...viewConfig,
      container: "map",
      map: map
    });

    window.view = view;

    view.when(() => {
      map.basemap.referenceLayers.removeAll();
    });

    window.view.ui.move("attribution", "top-right");

    view.ui.add(createScaleBar(view), "bottom-left");
    view.ui.add(createLayerList(view), "top-right");
    view.ui.add(createLegend(view), "bottom-right");
    
    view.ui.add(
      createBasemapToggle(view, customBasemap),
      "top-left"
    );


  });

});