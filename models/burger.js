// Sequelized burger model
module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define('Burger', {
        // Set the ID in the DB
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        // Sets the Burger name
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1]
        },
        // Sets it's devoured status
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
        }
    });

    // Returns the model
    return Burger;
};