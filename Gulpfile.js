const elixir = require('laravel-elixir')

elixir.config.assetsPath = 'src'

elixir(mix => {
  mix
    .sass('bundle.scss')
    .scripts(
      [
        '../../node_modules/jquery/dist/jquery.js',
        '../../node_modules/bootstrap-sass/assets/javascripts/bootstrap/transition.js',
        '../../node_modules/bootstrap-sass/assets/javascripts/bootstrap/collapse.js',
        '../../node_modules/bootstrap-sass/assets/javascripts/bootstrap/tab.js',
        '../../node_modules/slick-carousel/slick/slick.js',
      ], 'public/js/vendor.js'
    )
    .scripts('src/js/main.js', 'public/js/main.js')
    .copy('src/index.html', 'public')
    .copy('src/images', 'public/images')
    .browserSync({
      server: {
        baseDir: 'public',
      },
      proxy: false,
      files: [
        'src/index.html',
        'src/sass/**/*.scss',
        'src/js/app.js',
      ],
    })
})
