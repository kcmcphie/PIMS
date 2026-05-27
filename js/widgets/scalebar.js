define([
  "esri/widgets/ScaleBar"
], function(ScaleBar) {

  return function(view) {

    return new ScaleBar({
      view: view,

      unit: "imperial",

      style: "ruler"
    });

  };

});