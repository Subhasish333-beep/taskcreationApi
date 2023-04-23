module.exports = (sequelize, DataTypes) => {
    const Employee = sequelize.define("employee", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER,
        },
        position: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
        }
    })
    return Employee;
}