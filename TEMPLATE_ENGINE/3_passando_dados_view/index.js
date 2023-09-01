const express = require('express')
const exphbs = require('express-handlebars')
const PORT = 1297
// UTILIZANDO O EXPRESS
const app = express()
// UTILIZANDO O HANDLEBARS
app.engine('handlebars',exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/', (req, res)=>{
    const user = {
        name: 'jonas',
        surname: 'nasc',
        age: 17
    }
    const palavra = "jonas nasc, o maioral. APENAS!"
    return res.render('home', {user:user, palavra})
})

app.listen(PORT, () =>{
    console.log(`Servidor ON ${PORT}🐒`)
})