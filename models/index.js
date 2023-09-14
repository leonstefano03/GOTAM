const User = require('./user');
const Area = require('./area')
const Employee = require('./employee')

Employee.belongsTo(Area)

module.exports = {User, Area, Employee}