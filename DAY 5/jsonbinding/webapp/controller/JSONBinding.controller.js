sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sapips/training/jsonbinding/model/formatter"
], function(Controller, JSONModel, formatter, mobileLibrary) {
    "use strict";

    return Controller.extend("sapips.training.jsonbinding.controller.JSONBinding", {

        formatter: formatter,

        onInit: function() {

            const oEmployeeData = new JSONModel({
                EID: " ",
                Enabled: true,
                Address: {
                    Street: "Nangalisan",
                    City: "Laoag City",
                    Zip: "2900",
                    Country: "Philippines"
                },
                SalesAmount: 12000,
                CurrencyCode: "PHP"
            });
            this.getView().setModel(oEmployeeData);


            const oProductModel = new JSONModel("/model/Products.json");
            this.getView().setModel(oProductModel, "ProductsModel");
        },

        onListItemPress: function(oEvent) {
            const oList = oEvent.getSource();
            const oSelectedProduct = oList.getSelectedItem();

            if (oSelectedProduct) {
                const oBindingContext = oSelectedProduct.getBindingContext("ProductsModel");
                const sPath = oBindingContext.getPath();
                const oPanel = this.byId("Product_details");
                oPanel.bindElement({
                    path: sPath,
                    model: "ProductsModel"
                });
            }
        }
    });
});