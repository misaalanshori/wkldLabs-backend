module.exports = (sequelize, Sequelize) => {
    const Major = sequelize.define('major', {
        name: {
            type: Sequelize.STRING,
        },
        description: {
            type: Sequelize.STRING,
        },
    });
    return Major;
}