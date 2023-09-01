const express = require('express')
const app = express();
const PORT = 3333

const path = require('path')
const basePath = path.join(__dirname, 'templates')

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

app.get('/user/add', (req, res)=>{
    res.sendFile(`${basePath}/userForm.html`)
})

app.post('/user/save', (req, res)=>{
    const {name, age} = req.body 
    console.log(`Nome: ${name} e idade: ${age}`)
    res.sendFile(`${basePath}/userForm.html`)
})

app.listen(PORT, ()=>{
    console.log(`Servidor on ${PORT}🐢🐢`)
})