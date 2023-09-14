const User = require('./user');
const Area = require('./area')

User.belongsTo(Area)

module.exports = {User, Area}