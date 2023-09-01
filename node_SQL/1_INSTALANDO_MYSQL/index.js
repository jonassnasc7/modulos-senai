// MODULES
const express = require('express')
const exphbs = require('express-handlebars')
const mysql2 = require('mysql2')

const app = express()
const port = 9999

// CONFIG TEMPLATE ENGINE
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

// MIDDLEWARES
app.use(express.static('public'))

// /Rota localhost:9999
app.get('/', (req, res) => {
    return res.render('home')
})

// Criar conexão com o banco
const conn = mysql2.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'aluno_medio',
    password: '@lunoSenai23.',
    database: 'banco2'
})

// Estabelecer uma conexão com o banco
conn.connect((err) => {
    if(err){
        console.log(err)
        return
    }
    console.log('Connected')
    
    app.listen(port, () => {
        console.log(`http://localhost:${port}`)
    })
})

