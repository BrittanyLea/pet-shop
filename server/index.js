var Path = require('path')
var browserify = require('browserify-middleware')
var express = require('express')
var app = express()

//provide a browserified file at a path
var shared = ['mithril']
app.get('/scripts/vendor-bundle.js', browserify(shared))
app.get('/scripts/app-bundle.js', browserify('./client/main.js', { external: shared }))

// Sass
var sassMiddleware = require('node-sass-middleware')
app.use(sassMiddleware({
    /* Options */
    src: Path.join(__dirname, '../client'),
    dest: Path.join(__dirname, '../client/public'),
    debug: true,
    outputStyle: 'compressed',
    prefix:  '/styles'  // Where prefix is at <link rel="stylesheets" href="styles/my-style.css"/>
}));

// Non-js static files
app.use(express.static('client/public'))

var port = process.env.PORT || 4000
app.listen(port)
console.log("Listening on port", port)
