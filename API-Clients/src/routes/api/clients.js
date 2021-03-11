const express = require('express')
const router = express.Router()

const mainController = require('../../controllers/api/clientsController')

router.get('/', mainController.list)
router.post('/', mainController.create)
router.get('/:id', mainController.detail)

module.exports = router