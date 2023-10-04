module.exports = (sequelize, Sequelize) => {
    const Member = sequelize.define('member', {
        nim: {
            type: Sequelize.STRING,
        },
        name: {
            type: Sequelize.STRING,
        },
    });
    const Major = sequelize.define('major', {
        name: {
            type: Sequelize.STRING,
        },
    });
    Member.belongsTo(Major, {foreignKey: 'majorId'});
    return Member;
}
