module.exports = {
	css: {
		loaderOptions: {
			sass: {
				additionalData: `@import "@/assets/_shared.scss";`,
			},
		},
	},
	devServer: {
		port: 3002,
		proxy: {
			"^/api": {
				target: "http://localhost:5010",
				changeOrigin: true,
				logLevel: "debug",
				pathRewrite: {"^/api": "/"},
			},
		},
	},
};
