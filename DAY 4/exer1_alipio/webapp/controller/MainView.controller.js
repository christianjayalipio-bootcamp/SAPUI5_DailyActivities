sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("com.exer1_alipio.controller.ViewName", {
        
        onInit: function () {
        },

        onAddItem: function () {
            this.fnDisplayMsg("Add button pressed");
        },

        fnDisplayMsg: function (sMsg) {
            MessageToast.show(sMsg);
        },

        onChangeMOP: function (oEvent) {
            var sSelectedKey = oEvent.getParameter("selectedItem").getProperty("key");

            var oMobileLabel = this.getView().byId("idLblPhone");
            var oMobileInput = this.getView().byId("idInputPhone");
            var oCCLabel = this.getView().byId("idLblCC");
            var oCCInput = this.getView().byId("idInputCC");

            oMobileLabel.setVisible(false);
            oMobileInput.setVisible(false);
            oCCLabel.setVisible(false);
            oCCInput.setVisible(false);

            if (sSelectedKey === "GCASH") {
                MessageToast.show("GCASH");
                oMobileLabel.setVisible(true);
                oMobileInput.setVisible(true);
                
            } else if (sSelectedKey === "CC") {
                MessageToast.show("Credit Card");
                oCCLabel.setVisible(true);
                oCCInput.setVisible(true);
            }
            else {
                MessageToast.show("Cash on Delivery");
            }
        },

        onPressCheckout: function () {
            var oInputFNameValue = this.getView().byId("idInptFName").getValue();

            if (oInputFNameValue === "") {
                MessageToast.show("Required Field is blank");
            }
            
        },
        onAddItem: function(){
            var oTextBundle =
            this.getOwnerComponent().getModel("i18n").getResourceBundle();
            var sMsg = oTextBundle.getText("addButtonMsg");
            this.fnDisplayMsg(sMsg);
        },

        onClearPress: function () {
            this.byId("input0").setValue("");
            this.byId("input1").setValue("");
            this.byId("input2").setValue("");
            this.byId("input5").setValue("");
            this.byId("input6").setValue("");

            this.byId("box0").setSelectedKey("");

            MessageToast.show("Form cleared.");
        }
    });
});