import SequelizeCtx = require('sequelize')

export function GameModel(sequelize: SequelizeCtx.Sequelize): SequelizeCtx.Model<{}, {}> {
    return sequelize.define('Game',
        {
            id: { type: SequelizeCtx.BIGINT, primaryKey: true },
            name: { type: SequelizeCtx.STRING(200), allowNull: false },
            publisher: SequelizeCtx.STRING(200),
            genre: SequelizeCtx.STRING(100),
        },
        {
            timestamps: false,
            freezeTableName: true
        });
}
