define([], function() {

  return function(view, customBasemap) {

    const button = document.createElement("button");

    button.innerHTML = "Toggle Basemap";
    button.className = "esri-widget esri-button";

    let customBasemapEnabled = false;

    button.addEventListener("click", () => {

      customBasemapEnabled = !customBasemapEnabled;

      customBasemap.visible = customBasemapEnabled;

    });

    return button;

  };

});