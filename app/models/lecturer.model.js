module.exports = (sequelize, Sequelize) => {
    const Lecturer = sequelize.define('lecturer', {
        nip: {
            type: Sequelize.STRING,
        },
        name: {
            type: Sequelize.STRING,
        },
    });
    return Lecturer;
}