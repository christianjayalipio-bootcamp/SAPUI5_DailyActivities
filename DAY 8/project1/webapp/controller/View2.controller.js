sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("com.ui5.trng.project1.controller.View2", {
        onInit: function () {
            // Initialization code for View2 if needed
        },

        onNavBack: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("RouteMainView"); // Matches your manifest.json route name for MainView
        }
    });
});
