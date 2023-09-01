const { response } = require('express')
const express = require('express')
const exphbs = require('express-handlebars')
const PORT = 2522
// UTILIZANDO O EXPRESS
const app = express()
// UTILIZANDO O HANDLEBARS
app.engine('handlebars',exphbs.engine())
app.set('view engine', 'handlebars')
app.use(express.static('public'))

app.get('/dashboard', (req, res)=>{
    // RECEBER -> INSOMINA
    const items = ['Item 01','Item 02','Item 03']
    return res.render('dashboard', {items})
})

app.get('/post', (request, response)=>{
    const post = {
        title: 'Aprendendo NODEJS',
        category: 'JavaScript',
        body: 'Este arquivo vai de ajudar a aprender Handlebars',
        comments: 8
    }
    return response.render('blogpost', {post})
})

app.get('/', (req, res)=>{
    const user = {
        name: 'jonas',
        surname: 'nasc',
        age: 17
    }
    const palavra = "jonas nasc, o maioral. APENAS!"
    const auth = true
    const approved = true
    return res.render('home', {user:user, palavra, auth, approved})
})

app.listen(PORT, () =>{
    console.log(`Servidor ON ${PORT}🐒`)
})