import SequelizeCtx = require('sequelize');
import config from './config';
import { GameModel } from './models/table.models'

if (config) {

  var sequelize = new SequelizeCtx(config.connection.database,
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

  sequelize
    .authenticate()
    .then(err => {
      console.log('Connection has been established successfully.');

      GameModel(sequelize)
        .findAll()
        .then((rows: any[]) => {
          rows.forEach(row => {
            console.log(row.dataValues);
          });
        })

    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });

}
else {

  console.log('Config is missing');

}