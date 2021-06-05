const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */
// moment js include only required locales

mix
    .js('resources/assets/front/js/vue/src/main.js', 'public/assets/front/js/vue').vue()
    .js('resources/assets/front/js/app.js', 'public/assets/front/js')
    .sass('resources/assets/front/sass/app.scss', 'public/assets/front/css')

    .js('resources/assets/admin/js/app.js', 'public/assets/admin/js')
    .js('resources/assets/admin/js/plugins.js', 'public/assets/admin/js')

    .sass('resources/assets/admin/sass/app.scss', 'public/assets/admin/css')
    .sass('resources/assets/admin/sass/plugins.scss', 'public/assets/admin/css');


mix.webpackConfig({
    resolve: {
        alias: {
            '@': __dirname + '/resources/assets/front/js/vue/src'
        },
    },
})
