const cheerio = require('cheerio');
fetch('https://timvanwolfswinkel.com').then(r => r.text()).then(html => {
  const $ = cheerio.load(html);
  console.log('PRELOADER HTML:');
  console.log($('.preloader').html());
});
