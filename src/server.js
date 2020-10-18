// importar biblioteca
const express = require('express');
const path = require('path')
const pages = require('./pages.js')

console.log(pages)
// iniciando o express
const server = express();
server
    // utilizar req
    .use(express.urlencoded({extended: true}))

// utilizar os arquivos estaticos
  .use(express.static('public'))

  // configurar templete engine

  .set('views', path.join(__dirname, "views"))
  .set('view engine', 'hbs')


  // criar rota
  .get('/', pages.index)
  .get('/orphanage', pages.orphanage)
  .get('/orphanages', pages.orphanages)
  .get('/create-orphanage', pages.createOrphanage)
  .post('/save-orphanage', pages.saveOrphanage)
  // ligar servidor 
server.listen('5500');