const express = require('express')
const router = express.Router()

router.get('/',require('./find'))
router.get('/new',require('./new'))
router.post('/', require('./create'))
router.get('/edit/:id', require('./edit'))
router.put('/:id',require('./update'))
router.get('/:id',require('./show'))
router.delete('/:id', require('./remove'))

module.exports = router