import { ProdutoRepository } from './../repositories/ProdutoRepository';
import { Request, Response } from "express";

export class ProdutoController{
    async create(req: Request, res: Response){
        const {nome_produto, descricao, preco} = req.body;
        
        if(!nome_produto){
            return res.status(400).json({message: "Nescessario adicionar o nome do produto"})
        }

        if(!descricao){
            return res.status(400).json({message: "Nescessario adicionar a descricao do produto"})
        }

        if(!preco){
            return res.status(400).json({message: "Nescessario adicionar o preco do produto"})
        }

        try {
            const newProduto = ProdutoRepository.create({
                nome_produto,
                descricao,
                preco
            })
            await ProdutoRepository.save(newProduto)

            console.log(newProduto)

            return res.status(201).json(newProduto)   

        } catch (error) {
            console.log(error)
			return res.status(500).json({ message: 'Internal Sever Error' })
        }
    }

    async id (req: Request, res: Response){
        try {
            const {id} = req.params
            const produto = await ProdutoRepository.findOneBy({id: Number(id)})
            console.log(produto)
            return res.json(produto)
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Sever Error' })
        }
    }
}