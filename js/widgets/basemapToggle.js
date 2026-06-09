define([], function() {

  return function(view, customBasemap) {

    const button = document.createElement("button");

    button.innerHTML = "Toggle Basemap";
    button.className = "esri-widget esri-button";

    let satelliteEnabled = false;

    button.addEventListener("click", () => {

      satelliteEnabled = !satelliteEnabled;

      if (satelliteEnabled) {
        view.map.basemap = "satellite";
        customBasemap.visible = false;
      } else {
        view.map.basemap = "oceans";
        customBasemap.visible = true;
      }

    });

    return button;

  };

});