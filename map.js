document.addEventListener("DOMContentLoaded", () => {

  require([
    "esri/Map",
    "esri/views/MapView",
    "esri/widgets/ScaleBar"
  ], (Map, MapView, ScaleBar) => {

    const map = new Map({
      basemap: "topo-vector"
    });

    window.view = new MapView({
      container: "map",
      map: map,
      center: [-107.5512, 42.9993],
      zoom: 7,

      constraints: {
          rotationEnabled: false
      }
    });

    const scaleBar = new ScaleBar({
      view: window.view,
      unit: "imperial",
      style: "ruler"
    });

    window.view.ui.add(scaleBar, {
      position: "bottom-left"
    });

    view.ui.move("attribution", "top-right");

    window.mapReady = false;

    window.view.when(async () => {

        window.mapReady = true;

        console.log("Map fully ready");

    });

  });

});