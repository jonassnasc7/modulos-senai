const { response } = require('express')
const express = require('express')
const exphbs = require('express-handlebars')
const PORT = 2522

const app = express()

app.engine('handlebars',exphbs.engine())
app.set('view engine', 'handlebars')
app.use(express.static('public'))

app.get('/dashboard', (req, res)=>{
    const produto1 = {
        name: 'Cadeira Gamer',
        price: 599.99,
        dec: 'Cadeira de alta qualidade com direito a desconto!! Super confortável.'
    }
    return res.render('dashboard', {produto1})
})

app.get('/dashboard2', (req, res)=>{
    const produto2 = {
        name: 'Fone Gamer',
        price: 399.99,
        dec: 'Fone com alta qualidade, graves reforçados.'
    }
    return res.render('dashboard', {produto2})
})

app.get('/dashboard3', (req, res)=>{
    const produto3 = {
        name: 'Duplo barbecue + Refrigerante + Batata Grande',
        price: 37.99,
        dec: 'Acompanha queijo cheddar'
    }
    return res.render('dashboard', {produto3})
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
