module.exports = (sequelize, DataTypes) => {
    const Work = sequelize.define("work", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        startDate: {
            type: DataTypes.STRING,
        },
        estimation: {
            type: DataTypes.INTEGER,
        },
        progress: {
            type: DataTypes.STRING,
        }
    })
    return Work;
}