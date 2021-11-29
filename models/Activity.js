const User = require('./User');
const Exercise = require('./Exercise');

const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");


// create our Exercise model
class Activity extends Model {

}

// define table columns and configuration
Activity.init({
    // TABLE COLUMN DEFINITIONS GO HERE
    // define an id column
    id: {
        // use the special Sequelize DataTypes object provide what type of data it is
        type: DataTypes.INTEGER,
        // this is the equivalent of SQL's `NOT NULL` option
        allowNull: false,
        // instruct that this is the Primary Key
        primaryKey: true,
        // turn on auto increment
        autoIncrement: true,
    },
    // define a exercise Time column
    ex_Time: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    // define exercise reps column

    ex_Reps: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    // define exercise set column

    ex_Sets: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ex_Id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'exercise',
            key: 'id'
        }
    },
    u_Id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id'
        }
    }
}, {
    // TABLE CONFIGURATION OPTIONS GO HERE (https://sequelize.org/v5/manual/models-definition.html#configuration))
    // pass in our imported sequelize connection (the direct connection to our database)
    sequelize,
    // don't automatically create createdAt/updatedAt timestamp fields
    timestamps: false,
    // don't pluralize name of database table
    freezeTableName: true,
    // use underscores instead of camel-casing (i.e. `comment_text` and not `commentText`)
    underscored: true,
    // make it so our model name stays lowercase in the database
    modelName: "activity",
});

module.exports = Activity;