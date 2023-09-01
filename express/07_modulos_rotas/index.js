const express = require('express')
const app = express()
const port = 2204

const path = require('path')
const basePath = path.join(__dirname, 'templates')

app.use(express.urlencoded({
    extended: true
}))
app.get(express.json())


app.get('/', (req, res) => {
    res.sendFile(`${basePath}index.html`)
})

app.listen(port, () => {
    console.log(`http://localhost:${port}🐢🐢🐢`)
})
