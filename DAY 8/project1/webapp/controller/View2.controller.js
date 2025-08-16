sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
], function (Controller, MessageBox) {
    "use strict";

    return Controller.extend("com.ui5.trng.project1.controller.View2", {
        onInit: function () {
        },

        onNavBack: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            MessageBox.information("You are going to Main Page", {
                styleClass: "myCustomHeader",
                onClose: function () {
                    oRouter.navTo("RouteMainView");
                }
            });
        },
        onButton1Press: function () {
            MessageBox.information(
                "Hi! This is Christian Jay Alipio, you are on the subpage right now",
                {
                    styleClass: "myCustomHeader"
                }
            );
        }
    });
});