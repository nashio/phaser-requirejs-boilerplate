
define(function(require, exports, module) {
    'use strict';
    var constants = {
        MAX_SPEED : 500, // pixels/second
        ACCELERATION : 1500, // pixels/second/second
        DRAG : 600, // pixels/second
        GRAVITY : 2600, // pixels/second/second
        JUMP_SPEED : -1000 // pixels/second (negative y is up)
    };
    return constants;
});
