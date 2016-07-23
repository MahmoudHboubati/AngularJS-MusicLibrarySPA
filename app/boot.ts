import {bootstrap}    from 'angular2/platform/browser' // import bootstrap
import {AppComponent} from './app.component' // import the component we just created
import {ROUTER_PROVIDERS} from 'angular2/router' // import the component we just created
import {Http} from 'angular2/http';

// import 'jquery';

bootstrap(AppComponent, [ROUTER_PROVIDERS, Http]); // finally bootstrap it.
