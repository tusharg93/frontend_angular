const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ScriptExtPlugin = require('script-ext-html-webpack-plugin');


// Create multiple instances
module.exports = {
    output: {
        filename: '[name].'+new Date().getTime()+'.bundle.js',
        chunkFilename:'[name].'+new Date().getTime()+'.chunk.js',
    },
 
    plugins: [
        new ScriptExtPlugin({
            defaultAttribute: 'defer'
        })
    ]
};
