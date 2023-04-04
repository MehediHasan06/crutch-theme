let mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

mix.js('src/assets/js/app.js', 'assets')
  .sass('src/assets/scss/app.scss', 'assets')
  .options({
    processCssUrls: false,
    postCss: [ tailwindcss('tailwind.config.js') ],
  })
  .copy('src/sections/**', 'sections')
  .copy('src/config/**', 'config')
  .copy('src/layout/**', 'layout')
  .copy('src/snippets/**', 'snippets')
  .copy('src/templates/**', 'templates');
