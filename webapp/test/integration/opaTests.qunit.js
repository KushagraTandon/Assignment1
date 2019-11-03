/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"Kushagra_1-11-19_1/Kushagra_1-11-19_1/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});