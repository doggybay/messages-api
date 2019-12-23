const Message = require('../models/Message')

exports.getAllMessages = async (req, res) => {
  const messages = await Message.query()
  
  res.json(messages)
}

exports.getOnemessage = async (req, res) => {
  const message = await Message.query().findById(req.params.id)

  res.json(message)
}

exports.addNewMessage = async (req, res) => {
  const newMessage = await Message.query().insert(req.body).returning('*')

  res.json(newMessage)
}

exports.updateOneMessage = async (req, res) => {
  const updatedMessage = await Message.query().findById(req.params.id).patch(req.body).returning('*')

  res.json(updatedMessage)
}

exports.deleteMessage = async (req, res) => {
  const deletedMessage = await Message.query().findById(req.params.id).returning('*')

  res.json(deletedMessage)
}