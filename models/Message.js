const { Model } = require('objection')

class Message extends Model {
  static get tableName() {
    return 'messages'
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name', 'message'],

      properties: {
        id: { type: 'integer' },
        name: { type: 'string' },
        message: { type: 'string' },
        created_at: { type: 'string' },
        updated_at: { type: 'string'}
      }
    }
  }

}

module.exports = Message