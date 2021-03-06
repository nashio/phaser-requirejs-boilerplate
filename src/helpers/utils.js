define([
], function(){
    var utils = {

        // makeClass - By John Resig
        makeClass: function(){
            return function(args){
                if ( this instanceof arguments.callee ) {
                    if ( typeof this.init == "function" ){
                        this.init.apply( this, args.callee ? args : arguments );
                    }
                } else {
                    return new arguments.callee( arguments );
                }
            };
        }
    };
    return utils;
});
