const path = require('path')

module.exports = {
    configureWebpack: {
        resolve: {
            extensions: ['.js', '.vue', '.json', '.ts'],
            modules: [path.resolve(__dirname, 'src'), 'node_modules'],
            alias: {
                '@': path.resolve(__dirname, 'src'),
                $assets: path.resolve(__dirname, 'src/assets'),
                $components: path.resolve(__dirname, 'src/components'),
                $utils: path.resolve(__dirname, 'src/utils')
            }
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    exclude: /node_modules/,
                    enforce: 'pre',
                    loader: 'tslint-loader'
                  },
                  {
                    test: /\.tsx?$/,
                    loader: 'ts-loader',
                    exclude: /node_modules/,
                    options: {
                      appendTsSuffixTo: [/\.vue$/],
                    }
                  }
            ]
        },
        plugins: []
    }
}
