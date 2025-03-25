sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel"
], function (UIComponent, JSONModel) {
    "use strict";
    return UIComponent.extend("app.Component", {
        metadata: {
            manifest: "json"
        },
        init: function () {
            UIComponent.prototype.init.apply(this, arguments);

            var oModel = new JSONModel();
            oModel.loadData("odata/v4/cat/CatBreeds");
            this.setModel(oModel, "cats");
        }
    });
});
