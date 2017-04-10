'use strict';

module.exports={
    entry: "./js/index",
    output: {
        path: __dirname + "/js/",
        filename: "bundle.js",
        //library: 'index'
    },

    watch:true,
    watchOptions:{
        aggregateTimeout:300
    },

    devtool:"source-map",
    
    module:{
        loaders:[
            {
                test:/\.js$/,
                exclude: "/node_modules/",
                loader:['babel-loader?presets[]=es2015,presets[]=stage-0,presets[]=react']
            },
            {
                test:/\.css$/,
                loader:'style-loader!css-loader'
            }
        ]
    }
};


