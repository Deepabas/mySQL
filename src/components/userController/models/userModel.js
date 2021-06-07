const { Model } = require('objection');

class userModel extends Model {
  static get tableName() {
    return 'users';
  }
}

module.exports = userModel;
