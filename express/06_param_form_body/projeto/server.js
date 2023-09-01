const express = require('express')
const app = express();
const PORT = 3000
const contatos = []

const path = require('path')
const basePath = path.join(__dirname, 'templates')

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

app.get('/', (req, res)=>{
    res.sendFile(`${basePath}/index.html`)
})

app.get('/curso', (req, res)=>{
    res.sendFile(`${basePath}/curso.html`)
})

app.get('/user/add', (req, res)=>{
    res.sendFile(`${basePath}/form.html`)
})

app.post('/user/save', (req, res)=>{
    const {name, age, email, telefone} = req.body 
    contatos.push({nome:name, idade:age, email:email, telefone:telefone})
    console.log(contatos)
    res.sendFile(`${basePath}/form.html`)
})

app.listen(PORT, ()=>{
    console.log(`Servidor on ${PORT}🐢🐢`)
})