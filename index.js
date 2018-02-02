
/*const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})*/

var request = require('request');
request('https://restaurant.michelin.fr/restaurants-etoiles-france/', function (error, response, body) {
  console.log('body:', body); // Print the HTML for the Google homepage.
});
/*
body > div.l-page > div > div.l-main > div > div.panel-flexible.panels-flexible-51.clearfix > div > div > div > div.panel-pane.pane-block.pane-bean-links-etoiles-directory > div > div > div > div.field.field--name-field-links.field--type-link-field.field--label-hidden > div > div:nth-child(2) > a
<a href="https://restaurant.michelin.fr/restaurants/paris-02/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin/">&gt;Restaurants étoilés Paris 02</a>
/*const request = require('request');

request('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log(body.url);
  console.log(body.explanation);
});*/


var cheerio = require('cheerio')
var cheerioAdv = require('cheerio-advanced-selectors')

cheerio = cheerioAdv.wrap(cheerio)

var $ = cheerio.load('<div>foo</div><div>bar</div>')

$('div:first').text() // => 'foo'
