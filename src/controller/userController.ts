import {Request, Response} from 'express'

class UserController {
    public async index(req: Request, res: Response) {
        return res.json('Thiago Bussola')
    }
}

export default new UserController()