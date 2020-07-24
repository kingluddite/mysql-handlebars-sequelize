// module.exports = function(sequelize, DataTypes) {
//   const Gig = sequelize.define('Gig', {
//     title: DataTypes.STRING,
//     technologies: DataTypes.STRING,
//     description: DataTypes.STRING,
//     budget: DataTypes.STRING,
//     contact_email: DataTypes.STRING,
//   });
//   return Gig;
// }
module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("User", {
    email: DataTypes.STRING,
    password: DataTypes.STRING
  });
  return User;
};



