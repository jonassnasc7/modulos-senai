const express = require('express')
const exphbs = require('express-handlebars')
const PORT = 2522
// UTILIZANDO O EXPRESS
const app = express()
// UTILIZANDO O HANDLEBARS
app.engine('handlebars',exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res)=>{
    return res.render('dashboard')
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