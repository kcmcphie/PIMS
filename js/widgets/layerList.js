define([
  "esri/widgets/LayerList"
], function(LayerList) {

  return function(view) {

    return new LayerList({
      view: view,

      listItemCreatedFunction: (event) => {

        const item = event.item;

        if (item.title !== "PLSS Sections") {
          item.hidden = true;
        }
      }
    });

  };

});