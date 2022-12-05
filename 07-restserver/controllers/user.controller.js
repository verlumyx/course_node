const {response, request} = require('express')

const userGet = (req = request, res = response) => {
    const params = req.query

    res.json({
        message: 'get Api',
        query: params
    })
}

const userPut =  (req = request, res = response) => {
    const id = req.params.id

    res.json({
        message: 'put Api',
        id
    })
}

const userPost =  (req = request, res = response) => {
    const {nombre, edad} = req.body

    res.json({
        message: 'post Api',
        nombre,
        edad
    })
}

const userDelete = (req = request, res = response) => {
    const id = req.params.id
    res.json({
        message: `delete Api ${id}`,
        id
    })
}

module.exports = {
    userGet,
    userPut,
    userPost,
    userDelete,
}
