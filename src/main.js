(function () {
    'use strict';

    requirejs.config({
        baseUrl: "src/",

        paths: {
            phaser:   'libs/phaser/build/phaser.min',
            underscore: 'libs/underscore/underscore-min',
            game: 'game'
        },

        shim: {
            'phaser': {
                exports: 'Phaser'
            }
        }
    });

    define(function(require, exports, module) {

        var Phaser      = require('phaser');
        var Preloader   = require('modules/preloader');
        var Game        = require('modules/game');
        var Menu        = require('modules/menu');
        var Boot        = require('modules/boot');
        var game        = new Phaser.Game(520, 600, Phaser.AUTO, 'game-name');

        // Add game states from modules
        game.state.add('boot', Boot);
        game.state.add('preloader', Preloader);
        game.state.add('menu', Menu);
        game.state.add('game', Game);
        game.state.start('boot');
    });
}());
