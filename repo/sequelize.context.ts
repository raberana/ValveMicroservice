import Sequelize = require('sequelize');
import config from '../config';
import * as TableDefinitions from './sequelize.definitions'

export default class SequelizeContext {

    private static _sequelizeContext: Sequelize.Sequelize;
    
    private static get sequelizeContext(): Sequelize.Sequelize {

        if (this._sequelizeContext) {
            return this._sequelizeContext;
        }
        else {
            this._sequelizeContext = new Sequelize(config.connection.database,
                config.connection.user,
                config.connection.password,
                {
                    host: config.connection.host,
                    dialect: 'mssql',
                    pool: {
                        max: 5,
                        min: 0,
                        idle: 10000
                    }
                });
            return this._sequelizeContext;
        }

    }

    private constructor() {

    }

    static gameModel(): Sequelize.Model<{}, {}> {
        return TableDefinitions.GameDefinition(this.sequelizeContext);
    }

}