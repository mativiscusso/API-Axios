const express = require('express')
const router = express.Router()

const mainController = require('../controllers/mainController')

router.get('/', mainController.list)
router.get('/provincia', mainController.show)

module.exports = router