const express = require('express')
const router = express.Router()

const messagesController = require('../controllers/messages')

router.get('/messages', messagesController.getAllMessages)

module.exports = router