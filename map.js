require([
  "esri/Map",
  "esri/views/MapView",
  "esri/widgets/ScaleBar"
], (Map, MapView, ScaleBar) => {

  const map = new Map({
    basemap: "topo-vector"
  });

  const view = new MapView({
    container: "map",
    map: map,
    center: [-107.5512, 42.9993],
    zoom: 7,

    constraints: {
        rotationEnabled: false
    }
  });

  const scaleBar = new ScaleBar({
    view: view,
    unit: "non-metric",
  });

  view.ui.add(scaleBar, {
    position: "bottom-left"
  });

  view.ui.move("attribution", "top-right");

});

