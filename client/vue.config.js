var path = require('path');

function resolve (dir) {
	return path.join(__dirname, dir);
}

module.exports = {
	configureWebpack: {
		resolve: {
			extensions: ['.js', '.vue', '.json'],
			alias: {
				'vue$': 'vue/dist/vue.esm.js',
				'assets': resolve('src/assets')
			}
		},
		performance: {
			hints: false,
			maxEntrypointSize: 1024000,
			maxAssetSize: 1024000
		},
		output: {
			filename: process.env.production ? `bundle-[chunkHash].js` : `bundle-[hash].js`
		}
	},
	devServer: {
		hot: true,
		quiet: true,
		open: 'Google Chrome',
		port: 7080,
		publicPath: '/'
	}
};
