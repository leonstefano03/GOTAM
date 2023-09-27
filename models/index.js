const User = require('./user');
const Area = require('./area')
const Employee = require('./employee')


Area.hasMany(Employee)
Employee.belongsTo(Area)

module.exports = {User, Area, Employee}