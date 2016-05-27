"use strict";
var core_1 = require('@angular/core');
var buchung_service_1 = require('../buchung.service');
console.debug("starting service-worker");
var PROVIDERS = [
    buchung_service_1.BuchungService
];
var injector = core_1.ReflectiveInjector.resolveAndCreate(PROVIDERS);
var bs = injector.get(buchung_service_1.BuchungService);
var context = self;
context.addEventListener('sync', function (event) {
    console.debug("Service Worker: sync, tag=" + event.tag);
    if (event.tag == 'upload') {
        event.waitUntil(bs.upload().then(function (_) { return console.debug('background-upload finished'); }));
    }
});
//# sourceMappingURL=service-worker.js.map