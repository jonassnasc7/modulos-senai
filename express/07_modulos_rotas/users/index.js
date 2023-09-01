const express = require('express')
const router = express.Router()

// BUSCAR A PÁG DE FORMULÁRIO
router.get('/user/add', (req, res) => {
    res.sendFile(`${basePath}userForm.html`)
})

// CADASTRAR USUÁRIO
router.post('/user/save', (req,res) => {
    const {name, age} = req.body
    console.log(`Nome:${name} \nIdade:${age}`)
    res.sendFile(`${basePath}userForm.html`)
})

module.exports = router