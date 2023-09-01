const express = require('express')
const exphbs = require('express-handlebars')
const PORT = 0925
// UTILIZANDO O EXPRESS
const app = express()
// UTILIZANDO O HANDLEBARS
app.engine('handlebars',exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/', (req, res)=>{

    return res.render('home', {layout:false})
})

app.listen(PORT, () =>{
    console.log(`Servidor ON ${PORT}🐒`)
})