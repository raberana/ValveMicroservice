import { RepoInterface } from '../interfaces/repo.interface';
import SequelizeContext from './sequelize.context'
import Game from '../models/game.model'

export class SequelizeRepo implements RepoInterface {

    constructor() { }

    getGames(): Game[] {
        SequelizeContext.gameModel().findAll()
         .then((rows: any[]) => {
          rows.forEach(row => {
           var data: Game[] = row.dataValues;
           console.log(data)
          });
        })

        return [];
    }
}