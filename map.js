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
    "./js/layers/butte/butte_plss.js",
    "./js/layers/butte/headframes.js",
    "./js/layers/butte/sbparcels.js",
    "./js/layers/butte/contours.js",

    "./js/layers/butte/butte_blocks/emmablock_poly.js",
    "./js/layers/butte/butte_blocks/emmablock_point.js",
    "./js/layers/butte/butte_blocks/bjs_ferrylane_poly.js",
    "./js/layers/butte/butte_blocks/goldsmith_poly.js",
    "./js/layers/butte/butte_blocks/goldsmith_point.js",
    "./js/layers/butte/butte_blocks/claims_greatrep_poly.js",
    "./js/layers/butte/butte_blocks/claims_margetann_poly.js",
    "./js/layers/butte/butte_blocks/claims_rainbow_poly.js",
    "./js/layers/butte/butte_blocks/greatrep_point.js",
    "./js/layers/butte/butte_blocks/greatrep_poly.js",
    "./js/layers/butte/butte_blocks/margetann_point.js",
    "./js/layers/butte/butte_blocks/margetann_poly.js",
    "./js/layers/butte/butte_blocks/rainbow_point.js",
    "./js/layers/butte/butte_blocks/rainbow_poly.js",
    "./js/layers/butte/butte_blocks/travona_point.js",
    "./js/layers/butte/butte_blocks/travona_poly.js",

    "./js/layers/alaska/CIV_WB_point.js",
    "./js/layers/alaska/CIV_WB_poly.js",
    "./js/layers/alaska/CIV_WB_line.js",
    "./js/layers/alaska/portmc_plss.js",
    "./js/layers/alaska/portmc_parcels.js",
    "./js/layers/alaska/portmc_contours.js",

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
    claimsGreatrepPoly,
    claimsMargetannPoly,
    claimsRainbowPoly,
    greatrepPoint,
    greatrepPoly,
    margetannPoint,
    margetannPoly,
    rainbowPoint,
    rainbowPoly,
    travonaPoint,
    travonaPoly,

    civwbPoint,
    civwbPoly,
    civwbLine,
    portmc_plss,
    portmc_parcels,
    portmc_contours,

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
      visible: false,
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
    });

    const goldBlock = new GroupLayer({
      title: "Goldsmith Block",
      visibilityMode: "independent",
      layers: [
        goldPoly,
        goldPoint
      ]
    });

    const greatrepBlock = new GroupLayer({
      title: "Great Republic Block",
      visibilityMode: "independent",
      layers: [
        greatrepPoint,
        greatrepPoly
      ]
    });

    const margetannBlock = new GroupLayer({
      title: "Marget Ann Block",
      visibilityMode: "independent",
      layers: [
        margetannPoint,
        margetannPoly
      ]
    });

    const rainbowBlock = new GroupLayer({
      title: "Rainbow Block",
      visibilityMode: "independent",
      layers: [
        rainbowPoint,
        rainbowPoly
      ]
    });

    const travonaBlock = new GroupLayer({
      title: "Travona Block",
      visibilityMode: "independent",
      layers: [
        travonaPoint,
        travonaPoly
      ]
    });

    const butteBlocks = new GroupLayer ({
      title: "SBM Surface Blocks",
      id: "sbm_group",
      visibilityMode: "independent",
      visible: true, 
      layers: [
        emmaBlock,
        goldBlock,
        greatrepBlock,
        margetannBlock,
        rainbowBlock,
        travonaBlock,
        ferrylanePoly,
        claimsGreatrepPoly,
        claimsMargetannPoly,
        claimsRainbowPoly
      ]
    });

    const civwbGroup = new GroupLayer ({
      title: "CIV WB",
      id: "civwb_group",
      visibilityMode: "independent",
      visible: true,
      layers: [
        civwbPoint,
        civwbPoly,
        civwbLine
      ]
    });

    const butteGroup = new GroupLayer ({
      title: "Butte, MT",
      id: "butte_group",
      visibilityMode: "independent",
      visible: true,
      layers: [
        parcelsLayer,
        contoursLayer,
        butte_plss,
        butteBlocks,
        headframesLayer
      ]
    });

    const anchorGroup = new GroupLayer ({
      title: "Anchorage, AK",
      id: "anchor_group",
      visibilityMode: "independent",
      visible: false,
      layers: [
        civwbGroup
      ]
    });

    const portMcGroup = new GroupLayer({
      title: "Port MacKenzie, AK",
      id: "portMc_group",
      visibilityMode: "independent",
      visible: false,
      layers: [
        portmc_plss,
        portmc_parcels,
        portmc_contours,
      ]
    });

    map.add(customBasemap);
    map.add(butteGroup);
    map.add(anchorGroup);
    map.add(portMcGroup);
    map.add(labelsLayer);

  
    const view = new MapView({
      ...viewConfig,
      container: "map",
      map: map
    });

    window.view = view;

    const container = document.getElementById("container");
    const fullscreen = document.getElementById("fullscreenView");

    document
    .getElementById("fullscreenBtn")
    .addEventListener("click", () => {

        container.style.display = "none";

        fullscreen.classList.remove("hidden");

        view.container = "fullscreenMap";

    });

    document
    .getElementById("returnToLayout")
    .addEventListener("click", () => {

        fullscreen.classList.add("hidden");

        container.style.display = "";

        view.container = "map";

    });

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

    document.getElementById("zoomAnchorage").addEventListener("click", () => {
      
      const butteGroup = view.map.findLayerById("butte_group");
      const anchorGroup = view.map.findLayerById("anchor_group");
      const portmcGroup = view.map.findLayerById("portMc_group");

      butteGroup.visible = false;
      anchorGroup.visible = true;
      portmcGroup.visible = false;
      
      view.goTo({
        center: [-151.40680024414047, 61.8492427503479],
        zoom: 8
      });
    });

    document.getElementById("zoomButte").addEventListener("click", () => {
      
      const butteGroup = view.map.findLayerById("butte_group");
      const anchorGroup = view.map.findLayerById("anchor_group");
      const portmcGroup = view.map.findLayerById("portMc_group");

      butteGroup.visible = true;
      anchorGroup.visible = false;
      portmcGroup.visible = false;
      
      view.goTo({
        center: [-112.53540861972655, 46.00615169799132],
        zoom: 12
      });
    });

    document.getElementById("zoomPortMc").addEventListener("click", () => {

      const butteGroup = view.map.findLayerById("butte_group");
      const anchorGroup = view.map.findLayerById("anchor_group");
      const portmcGroup = view.map.findLayerById("portMc_group");

      butteGroup.visible = false;
      anchorGroup.visible = false;
      portmcGroup.visible = true;
      
      view.goTo({
        center: [-149.94355866699252, 61.2815532141017],
        zoom: 13
      });
    });

  });

});