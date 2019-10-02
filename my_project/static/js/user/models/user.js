/*global define */
define([
    'backbone'
], function (Backbone) {
    'use strict';

    var MainModel = Backbone.Model.extend({

        urlRoot: "api/user/",
    });

    return MainModel;
});