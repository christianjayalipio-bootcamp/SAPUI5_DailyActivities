sap.ui.define([
    "sap/m/library",
    "sap/ui/model/type/Currency"
], function (mobileLibrary, Currency) {
    "use strict";
    
    return {
        formatMailLink: function (sEID, sDomain, sSubject, sBody) {
            return mobileLibrary.URLHelper.normalizeEmail(
                sEID + sDomain,
                sSubject + " " + sEID,
                sBody
            );
        },
    
        formatStockValue: function (fUnitPrice, iStockLevel, sCurrCode) {
            const oCurrency = new Currency();
            return oCurrency.formatValue([fUnitPrice * iStockLevel, sCurrCode], "string");
        }
    };
});