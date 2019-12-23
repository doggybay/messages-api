const express = require('express')
const router = express.Router()

const messagesController = require('../controllers/messages')

router.get('/messages', messagesController.getAllMessages)
router.get('/messages/:id', messagesController.getOnemessage)
router.post('/messages', messagesController.addNewMessage)
router.patch('/messages/:id', messagesController.updateOneMessage)
router.delete('/messages/:id', messagesController.deleteMessage)

module.exports = router