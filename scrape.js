var request = require('request');
var cheerio = require('cheerio');

request('https://restaurant.michelin.fr/restaurants-etoiles-france/', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    $('.field__item.even  a').each(function(i, element){
      
      console.log($(element).attr('href'));
    });
  }
});
