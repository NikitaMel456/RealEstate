sap.ui.define([
		'jquery.sap.global',
		'sap/ui/core/mvc/Controller',
		'sap/ui/model/json/JSONModel'
	], function(jQuery, Controller, JSONModel) {
	"use strict";

	var PageController = Controller.extend("sap.m.sample.Select.Page", {

		onInit: function () {
			var oData = {
				"ZMEL_CONS_FLATType": [
					{
						"rent_type": "01",
						"Name": "Rent"
					},
					{
						"rent_type": "02",
						"Name": "Sale"
					}
				]
			};

			// set explored app's demo model on this sample
			var oModel = new JSONModel(oData);
			this.getView().setModel(oModel);
		}
	});


	return PageController;

});