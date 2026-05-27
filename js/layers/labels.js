define([
  "esri/layers/VectorTileLayer"
], function(VectorTileLayer) {

  const labelsLayer = new VectorTileLayer({
    title: "Labels",

    portalItem: {
      id: "1768e8369a214dfab4e2167d5c5f2454"
    }
  });

  labelsLayer.load().then(() => {

    const style = labelsLayer.currentStyleInfo.style;

    style.layers.forEach(layer => {

      const id = layer.id.toLowerCase();

      // Remove street labels
      if (
        id.includes("road") ||
        id.includes("street") ||
        id.includes("highway") ||
        id.includes("route")
      ) {
        layer.layout.visibility = "none";
      }

      if (
        layer.type === "symbol" &&
        layer.layout &&
        layer.layout["text-field"]
      ) {

        layer.layout["text-size"] = [
          "interpolate",
          ["linear"],
          ["zoom"],
          0, 10,
          6, 14,
          10, 18
        ];

        layer.paint["text-color"] = "#111111";

        layer.paint["text-halo-color"] = "#ffffff";
        layer.paint["text-halo-width"] = 2;
        layer.paint["text-halo-blur"] = 0.5;
      }
    });

    labelsLayer.style = style;
  });

  return labelsLayer;

});