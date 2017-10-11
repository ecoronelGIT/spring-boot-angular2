import {platformBrowser} from '@angular/platform-browser';
import {AppModuleNgFactory} from '../aot/app/app.module.ngfactory';

// enableProdMode(); look for righ place to setup this
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
