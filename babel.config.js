module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo', '@babel/preset-typescript'],
        plugins: [
            [
                require('babel-plugin-module-resolver'),
                {
                    alias: { '~': './src' },
                    extension: { '.ts': '.tsx' },
                },
            ],
        ],
    };
};
