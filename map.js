document.addEventListener("DOMContentLoaded", () => {

  require([
    "esri/Map",
    "esri/views/MapView",
    "esri/widgets/ScaleBar",
    "esri/layers/TileLayer",
    "esri/layers/GeoJSONLayer",
    "esri/layers/VectorTileLayer"
  ], (
    Map,
    MapView,
    ScaleBar,
    TileLayer,
    GeoJSONLayer,
    VectorTileLayer
  ) => {

    const labelsLayer = new VectorTileLayer({
      portalItem: {
        id: "1768e8369a214dfab4e2167d5c5f2454"
      },
    });

  labelsLayer.load().then(() => {

    const style = labelsLayer.currentStyleInfo.style;

    style.layers.forEach(layer => {

      if (
        layer.type === "symbol" &&
        layer.layout &&
        layer.layout["text-field"]
      ) {

        // Bigger labels
        layer.layout["text-size"] = [
          "interpolate",
          ["linear"],
          ["zoom"],
          0, 10,
          6, 14,
          10, 18
        ];

        // Darker labels
        layer.paint["text-color"] = "#111111";

        // Stronger halo
        layer.paint["text-halo-color"] = "#ffffff";
        layer.paint["text-halo-width"] = 2;
        layer.paint["text-halo-blur"] = 0.5;
      }
    });

    labelsLayer.style = style;
  });

    const map = new Map({
      basemap: {}
    });

    const terrainLayer = new TileLayer({
      url: "https://services.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer",
      opacity: 0.85
    });

    const hillshadeLayer = new TileLayer({
      url: "https://services.arcgisonline.com/ArcGIS/rest/services/Elevation/World_Hillshade/MapServer",
      opacity: 0.75,
      blendMode: "multiply"
    });

    const terrainTintLayer = new GeoJSONLayer({
      url: "./world.geojson",

      renderer: {
        type: "simple",

        symbol: {
          type: "simple-fill",

          color: [61, 108, 62, 0.35],

          outline: {
            color: [0, 0, 0, 0],
            width: 0
          }
        }
      }
    });

    const mountainTintLayer = new GeoJSONLayer({
      url: "./world.geojson",

      renderer: {
        type: "simple",

        symbol: {
          type: "simple-fill",

          color: [61, 108, 62, 0.45],

          outline: {
            color: [0, 0, 0, 0],
            width: 0
          }
        }
      },

      blendMode: "multiply"
    });

    const statesLayer = new GeoJSONLayer({
      url: "./states.geojson",

      renderer: {
        type: "simple",

        symbol: {
          type: "simple-fill",

          color: [0, 0, 0, 0],

          outline: {
            color: [105, 105, 105, 1],
            width: 0.75
          }
        }
      },

      blendMode: "multiply"
    });


    window.view = new MapView({
      container: "map",
      map: map,

      center: [-112.53, 46.01],
      zoom: 15,

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

    window.view.ui.move("attribution", "top-right");

    window.mapReady = false;

    window.view.when(async () => {

      window.mapReady = true;

      console.log("Map fully ready");

    });

    map.add(terrainLayer);
    map.add(terrainTintLayer);
    map.add(hillshadeLayer);
    map.add(mountainTintLayer);
    map.add(statesLayer);
    map.add(labelsLayer);

  });

});