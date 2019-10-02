define([
    'backbone',
    'jquery',
    '../models/user',
    '../templates/user.handlebars'
], function (Backbone, $, UserModel, UserTemplate) {
    'use strict';

    var UserView = Backbone.View.extend({
        el: '.main-container',
        initialize() {
            this.render()
        },
        render: function(){
            let user = new UserModel()
            this.$el.append(UserTemplate());
            console.log("Inside render function");
        }
    });

    return UserView;
});

