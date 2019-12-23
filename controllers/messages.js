const Message = require('../models/Message')

exports.getAllMessages = (req, res) => {
  Message.query().then(messages => res.json(messages))
}

// exports.getOnePicture = (req, res) => {
//   Picture.query().findById(req.params.id).then(picture => res.json(picture))
// }

// exports.deleteOnePicture = (req, res) => {
//   Picture.query().deleteById(req.params.id).returning('*').then(deletedPicture => res.json(deletedPicture))
// }

// exports.addOnePicture = (req, res) => {
//   Picture.query().insert(req.body).returning('*').then(newPicture => res.json(newPicture))
// }

// exports.addPictures = (req, res) => {
//   Picture.query().insert(req.body).returning('*').then(newPicture => res.json(newPicture))
// }