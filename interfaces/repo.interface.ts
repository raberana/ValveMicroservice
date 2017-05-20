import Game from '../models/game.model'

export interface RepoInterface {

    getGames(): Game[];

}