import { writeFile, readFile } from 'fs/promises'

class ProductService {

    async createProductList(data) {
        try {
            console.log("criando lista")
            await writeFile('products.JSON',JSON.stringify(data, null, 2))
            
        } catch (err) {
            throw new Error("Falha ao passar o produto")
        }
    }

    async readProductList() {
        const readProducts = await readFile('products.JSON', "utf-8")

        return JSON.parse(readProducts)
    }

    async stockProduct() {
        const productList = await this.readProductList()

        const readProductList = productList.map(produto => {
            let objeto = {
                nome: produto.nome,
                qtde: produto.qtde,
                preco: produto.preco,
                valor_estoque: produto.qtde * produto.preco
            }
            return objeto
        })

        console.log(productList)
        return productList

    }
}

export default new ProductService()