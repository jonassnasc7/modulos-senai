const express = require('express');
const app = express();
const port = 3333

const path = require('path')
const basePath = path.join(__dirname, 'templates')

app.get('/produto',(req, res)=>{
    console.log(`Estamos buscando o produto: ${id}`)

    res.sendFile(`${basePath}/produto.html`)
})

app.get('/',(req, res)=>{
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, ()=>{
    console.log(`Servidor on ${port}🐒`)
})