import { ReflectiveInjector } from '@angular/core';
import { BuchungService } from '../buchung.service';


console.debug("starting service-worker");

const PROVIDERS = [
    BuchungService
];

let injector = ReflectiveInjector.resolveAndCreate(PROVIDERS);
let bs:BuchungService = injector.get(BuchungService);

var context:any = self;

context.addEventListener('sync', function(event) {
  console.debug("Service Worker: sync, tag=" + event.tag);
  if (event.tag == 'upload') {
    event.waitUntil(bs.upload().then(_ => console.debug('background-upload finished')));
  }
});

