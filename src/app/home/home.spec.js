"use strict";
var testing_1 = require('angular2/testing');
var core_1 = require('angular2/core');
var http_1 = require('angular2/http');
var testing_2 = require('angular2/http/testing');
var home_1 = require('./home');
var title_1 = require('../providers/title');
describe('Home', function () {
    testing_1.beforeEachProviders(function () { return [
        title_1.Title,
        home_1.Home,
        http_1.BaseRequestOptions,
        testing_2.MockBackend,
        core_1.provide(http_1.Http, {
            useFactory: function (backend, defaultOptions) {
                return new http_1.Http(backend, defaultOptions);
            },
            deps: [testing_2.MockBackend, http_1.BaseRequestOptions] })
    ]; });
    testing_1.it('should have a title', testing_1.inject([home_1.Home], function (app) {
        expect(app.title.value).toEqual('Angular 2');
    }));
});
//# sourceMappingURL=home.spec.js.map