const fs = require('fs');
const http = require('http');
const url = require('url');
const replaceTemplate = require(`${__dirname}/modules/replaceTemplates`);


const data = fs.readFileSync(`${__dirname}/dev-data/data.json`,'utf-8');
const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`,'utf-8');
const tempCardProduct = fs.readFileSync(`${__dirname}/templates/template-card.html`,'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/product.html`,'utf-8');
const produkData = JSON.parse(data);



const server = http.createServer((req, res) => {
  const {query,pathname}  = url.parse(req.url, true);

  if(pathname === '/' || pathname === '/overview'){
    res.writeHead(200, {'Content-type' : 'text/html'});

    const cardsHtml = produkData.map(el => replaceTemplate(tempCardProduct, el));
    const output = tempOverview.replace(/{%PRODUCT_CARDS%}/g,cardsHtml);
    res.end(output);
  } else if(pathname === '/produk'){
    const produk = produkData[query.id];
    res.writeHead(200, {'Content-type': 'text/html'});
    const output = replaceTemplate(tempProduct, produk);
    res.end(output);
  } else if(pathname === '/api'){
    res.writeHead(200, {'Content-type' : 'application/json'});
    res.end(data);
  } else{
    res.writeHead(404, {
      'Content-type' : 'text/html'
    });
    res.end('<h1>Woi tidak ada</h1>');
  }
});

server.listen(3000, 'localhost', () => {
  console.log('Listen on Port: 3000');
});