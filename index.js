const path = require('path')

module.exports = function vkPixelModule (options) {
    if (!options.debug && options.dev && process.env.NODE_ENV !== 'production') {
        return;
    }

    if (!options.id)
        throw new Error('The `id` option is required.');

    this.options.head.script.push({
        src: 'https://vk.com/js/api/openapi.js?169',
        async: true
    });

    this.addPlugin({
        src: path.resolve(__dirname, './module.js'),
        ssr: false,
        options
    });
}

module.exports.meta = require('./package.json')