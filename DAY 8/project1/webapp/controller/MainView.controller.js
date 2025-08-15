sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
], function (Controller, MessageBox) {
    "use strict";

    return Controller.extend("com.ui5.trng.project1.controller.MainView", {
        onInit: function () {
        },

        onNavPress: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            MessageBox.information("You are going to Sub Page", {
                onClose: function () {
                    oRouter.navTo("RouteView2");
                }
            });
        },

        onButton1Press: function () {
            MessageBox.information("Hi! This is Christian Jay Alipio, its a pleasure to meet you.");
        }
    });
});
