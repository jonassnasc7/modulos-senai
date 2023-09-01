const express = require('express')
const app = express()
const PORT = 2204

const path = require('path')
const basePath = path.join(__dirname, 'templates')

// ARQUIVOS ESTÁTICOS - > CSS, IMG, VÍDEOS, JS
app.use(express.static('public'))

app.get('/', (req, res)=>{
    res.sendFile(`${basePath}/index.html`)
})

app.listen(PORT, ()=>{
    console.log(`Servidor ON ${PORT}🐢`)
})