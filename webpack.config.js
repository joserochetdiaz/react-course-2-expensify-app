const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//const ExtractTextPlugin = require('extract-text-webpack-pluggin'); plugin deprecated.


module.exports = (env) => {
    const isProduction = env === 'production';
    const MiniCssExtract = new MiniCssExtractPlugin({
        filename: 'style.css'
    })

    console.log('env', env)
    return {
        entry: './src/app.js',
        output:{
            path: path.join(__dirname, 'public', 'dist'),
            filename:'bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },{
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader, 
                    'css-loader',
                    'sass-loader'
                ],
    
            }]
        },
        plugins: [
            MiniCssExtract
        ],
        devtool: isProduction ? 'source-map'  : 'inline-source-map',
        devServer:{
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true,
            publicPath: '/dist/'
        }
    };
}
