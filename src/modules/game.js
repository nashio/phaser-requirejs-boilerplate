define(function(require, exports, module) {

    'use strict';

    var _             = require('underscore');
    var mainConstants = require('helpers/main-constants');
    var inputEvents   = require('modules/parts/input-events');

    function Game() {
        this.player = null;
    }

    Game.prototype = {

        create: function () {
            var x = this.game.width / 2;
            var y = this.game.height - 350;

            // Define movement constants
            _.extend(this, mainConstants);

            // Add key handlers
            _.extend(this, inputEvents);

            // Create a player sprite
            this.player = this.add.sprite(x, y, 'player');

            this.game.stage.backgroundColor = 0x4488cc;

            // Enable physics on the player
            this.game.physics.enable(this.player, Phaser.Physics.ARCADE);

            // physics on the player
            this.player.body.collideWorldBounds = true;
            this.player.body.maxVelocity.setTo(this.MAX_SPEED, this.MAX_SPEED * 10); // x, y
            this.player.bringToTop();


            this.game.input.keyboard.addKeyCapture([
                Phaser.Keyboard.LEFT,
                Phaser.Keyboard.RIGHT,
                Phaser.Keyboard.UP,
                Phaser.Keyboard.DOWN
            ]);

            // Add drag to the player that slows them down when they are not accelerating
            this.player.body.drag.setTo(this.DRAG, 0); // x, y
            this.player.body.collideWorldBounds = true;
            this.game.physics.arcade.gravity.y = this.GRAVITY;
            this.player.body.maxVelocity.setTo(this.MAX_SPEED, this.MAX_SPEED * 10);

        },

        update: function(){
            // loop
        }

    };

    return Game;
});
