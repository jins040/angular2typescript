/*
import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';
import 'core-js/es6';
import 'reflect-metadata';
import 'zone.js';
*/
import {bootstrap, provide} from 'angular2/angular2';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import ApplicationComponent from "./components/application/application";

bootstrap(ApplicationComponent, [
    ROUTER_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy})
]);
