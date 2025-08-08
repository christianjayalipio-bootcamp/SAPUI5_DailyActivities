sap.ui.define([

    "sap/ui/core/mvc/Controller",
    
    "sap/m/MessageToast"
    
    ],
    
    @param {typeof sap.ui.core.mvc.Controller} Controller

    function (Controller, MessageToast){
        onAddItem: function (){

            this.fnDisplayMsg("Add button pressed");
            
            },
            
            
            fnDisplayMsg: function (sMsg){
            
            MessageToast.show(sMsg);
            
            },
    }