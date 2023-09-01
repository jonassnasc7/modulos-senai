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
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// /Rota localhost:9999
app.get('/', (req, res) => {
    return res.render('home')
})

// Rota localhost:9999/books/insertbook
app.post('/books/insertbook', (req, res) => {
    const { title, nm_paginas } = req.body
    const sql = `INSERT INTO books (title, nm_paginas) VALUES ('${title}', '${nm_paginas}');`

    conn.query(sql, (err) => {
        if(err){
            console.log(err)
            return
        }

        return res.redirect('/')
    })
})

// Rota localhost:9999/books => listar livros
app.get('/books', (req, res) => {
    const sql = 'SELECT * FROM books;'
    conn.query(sql, (err, data) => {
        if(err){
            console.log(err)
            return
        }
        const books = data
        res.render('books', { books })
    })
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

