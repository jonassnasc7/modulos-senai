const expresse = require('express')
const app = express()
const PORT = 3333

const path = require('path')
const basePath = path.join(__dirname, 'templates')

const checkAuth = function(req, res, next){
    const auth = req.authStatus = true

    if(auth){
        console.log('Está logado, pode continuar')
        next()
    }else{
        console.log('Não está logado, faça o login')
        next()
    }
}

// Utilizar esse middleware
app.use(checkAuth)

app.get('/', (req, res)=>{
    res.sendFile(`${basePath}/index.html`)
})