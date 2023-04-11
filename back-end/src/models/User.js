const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('User', {
      id: {
         type: DataTypes.INTEGER,
         autoIncrement: true,
         allowNull: false,
         primaryKey: true
      },

      email: {
         type: DataTypes.STRING,
         allowNull: false,
         isEmail: true,
         validate: {
            is: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,
         }
      },

      password: {
         type: DataTypes.STRING,
         allowNull: false,
         validate: {
            is: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
         }
      },
   },
       { timestamps: false });
};
