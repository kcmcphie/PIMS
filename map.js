document.addEventListener("DOMContentLoaded", () => {

  require([
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/GroupLayer",

    "./js/layers/labels.js",
    "./js/layers/basemap/hillshade.js",
    "./js/layers/basemap/states.js",
    "./js/layers/basemap/world.js",
    "./js/layers/basemap/land.js",
    "./js/layers/basemap/oceans.js",
    "./js/layers/basemap/lakes.js",
    "./js/layers/basemap/rivers.js",
    "./js/layers/basemap/roads.js",
    "./js/layers/butte/plss.js",
    "./js/layers/butte/headframes.js",
    "./js/layers/butte/sbparcels.js",
    "./js/layers/butte/contours.js",
    "./js/layers/butte/butte_blocks/emmablock_poly.js",
    "./js/layers/butte/butte_blocks/emmablock_point.js",
    "./js/layers/butte/butte_blocks/bjs_ferrylane_poly.js",
    "./js/layers/butte/butte_blocks/goldsmith_poly.js",
    "./js/layers/butte/butte_blocks/goldsmith_point.js",

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
    landLayer,
    oceansLayer,
    lakesLayer,
    riversLayer,
    roadsLayer,
    butte_plss,
    headframesLayer,
    parcelsLayer,
    contoursLayer,

    emmaPoly,
    emmaPoint,
    ferrylanePoly,
    goldPoly,
    goldPoint,

    createScaleBar,
    createLayerList,
    createLegend,
    createBasemapToggle,

    viewConfig

  ) => {

    const map = new Map({
      basemap: "satellite"
    });

    const customBasemap = new GroupLayer({
      title: "Custom Basemap",
      visibilityMode: "independent",
      visible: true,
      layers: [
        worldLayer,
        landLayer,
        hillshadeLayer,
        oceansLayer,
        riversLayer,
        //roadsLayer,
        statesLayer,
        lakesLayer,
      ]
    });

    const emmaBlock = new GroupLayer({
      title: "Emma Block",
      visibilitymode: "independent",
      layers:[
        emmaPoly,
        emmaPoint
      ]
    })

    const goldBlock = new GroupLayer({
      title: "Goldsmith Block",
      visibilityMode: "independent",
      layers: [
        goldPoly,
        goldPoint
      ]
    })

    const butteBlocks = new GroupLayer ({
      title: "SBM Surface Blocks",
      visibilityMode: "independent",
      visible: false, 
      layers: [
        emmaBlock,
        goldBlock,
        ferrylanePoly,
      ]
    })

    map.add(customBasemap);
    map.add(parcelsLayer);
    map.add(contoursLayer);
    map.add(butte_plss);
    map.add(butteBlocks),
    map.add(headframesLayer);
    map.add(labelsLayer);

  
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