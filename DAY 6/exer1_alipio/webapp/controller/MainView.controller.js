sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("com.exer1_alipio.controller.MainView", {

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

            var oInputFName = this.getView().byId("idInptFName");
            var oInputLName = this.getView().byId("idInptLName");
            var oInputFNameValue = oInputFName.getValue();
            var oInputLNameValue = oInputLName.getValue();
            var oRouter = this.getOwnerComponent().getRouter();


            // Check if first name and last name is blank

            if (oInputFNameValue === "" || oInputLNameValue === "") {


                // set value state to Error
                oInputFName.setValueState("Error");
                oInputLName.setValueState("Error");

            } else {

                oInputFName.setValueState("None");
                oInputLName.setValueState("None");

                //Navigate to review page passing first
                oRouter.navTo("RouteReviewPage", {

                    firstName: oInputFNameValue

                });


            }

        },
        onAddItem: function () {

            // Comment this code for now

            // var oTextBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();

            // var sMsg = oTextBundle.getText("addButtonMsg");

            // this.fnDisplayMsg(sMsg);


            // Instantiate the fragment


            // create dialog lazily

            if (!this.oDialog) {

                // By using loadFragment, we are adding the fragment as a dependent to the View

                // By doing so, we can use the functions inside the view's controller

                this.oDialog = this.loadFragment({

                    name: "com.training.exer1alipio.fragment.ProductDialog"

                });

            }

            this.oDialog.then(function (oDialog) {

                oDialog.open();

            });

        },

        onClearPress: function () {
            this.byId("input0").setValue("");
            this.byId("input1").setValue("");
            this.byId("input2").setValue("");
            this.byId("input5").setValue("");
            this.byId("input6").setValue("");

            this.byId("box0").setSelectedKey("");

            MessageToast.show("Form cleared.");
        },

        onCloseDialog: function () {
            this.getView().byId("idProductDialog").close();
        },
    });
});