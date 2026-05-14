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

    const map = new Map({
      basemap: {
        baseLayers: [],
        referenceLayers: [labelsLayer]
      }
    });

    const hillshadeLayer = new TileLayer({
      url: "https://services.arcgisonline.com/ArcGIS/rest/services/Elevation/World_Hillshade/MapServer"

    });

    const countriesLayer = new GeoJSONLayer({
      url: "./world.geojson",

      renderer: {
        type: "simple",

        symbol: {
          type: "simple-fill",

          color: [194, 194, 194, 0.35],

          outline: {
            color: [194, 194, 194],
            width: 0.75
          }

        }
    }

    })

    const statesLayer = new GeoJSONLayer({
      url: "./states.geojson",

      renderer: {
        type: "simple",

        symbol: {
          type: "simple-fill",

          color: [61, 109, 63, 0.35],

          outline: {
            color: [73, 73, 73],
            width: 0.75
          }
        }
      }
    });

    const riversLayer = new GeoJSONLayer({
      url: "./rivers.geojson",

      renderer: {
        type: "simple",

        symbol: {
          type: "simple-line",

          color: [0, 98, 163, 0.3],

          width: 1.2
        }
      }
    });

    const NAriversLayer = new GeoJSONLayer({
      url: "./NArivers.geojson",

      renderer: {
        type: "simple",

        symbol: {
          type: "simple-line",

          color: [0, 98, 163, 0.3],

          width: 1.2
        }
      }
    });

    map.add(hillshadeLayer);
    map.add(countriesLayer);
    map.add(statesLayer);
    map.add(riversLayer);
    map.add(NAriversLayer);

    window.view = new MapView({
      container: "map",
      map: map,

      center: [-107.5512, 42.9993],
      zoom: 7,

      spatialReference: {
        wkid: 3857
      },

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

  });

});