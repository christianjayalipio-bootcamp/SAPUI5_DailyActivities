sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.ui5.trng.exer1alipio.controller.View1", {
        onInit() {
        },

        onClearPress: function () {
            // Clear Input fields
            this.byId("input0").setValue("");
            this.byId("input1").setValue("");
            this.byId("input2").setValue("");
            this.byId("input5").setValue("");
            this.byId("input6").setValue("");
        
            // Clear ComboBox selection
            this.byId("box0").setSelectedKey("");
        }
        
    });
});