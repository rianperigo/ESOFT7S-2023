import {Request, Response} from 'express'
import productService from '../service/productService'

class ProductController {
    async create(req: Request, res: Response) {
        const products = productService.createProductList(req.body)

        return res.status(201).send()
    }

    async read(req: Request, res: Response) {
        const readed = await productService.readProductList()

        return res.status(200).send(readed)
    }

    async stock(req: Request, res: Response) {
        const readed = await productService.stockProduct()

        return res.send(readed)
    }
}

export default new ProductController()
