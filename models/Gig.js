module.exports = function(sequelize, DataTypes) {
  const Gig = sequelize.define('Gig', {
    title: DataTypes.STRING,
    technologies: DataTypes.STRING,
    description: DataTypes.STRING,
    budget: DataTypes.STRING,
    contact_email: DataTypes.STRING,
  });
  return Gig;
}
// module.exports = function(sequelize, DataTypes) {
//   const User = sequelize.define("User", {
//     email: DataTypes.STRING,
//     password: DataTypes.STRING
//   });
//   return User;
// };



// module.exports = function(sequelize, DataTypes) {
//   var Post = sequelize.define("Post", {
//     title: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         len: [1]
//       }
//     },
//     body: {
//       type: DataTypes.TEXT,
//       allowNull: false,
//       validate: {
//         len: [1]
//       }
//     },
//     category: {
//       type: DataTypes.STRING,
//       defaultValue: "Personal"
//     }
//   });
//   return Post;
// };
