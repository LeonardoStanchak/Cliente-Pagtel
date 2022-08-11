import { ProdutoRepository } from './../repositories/ProdutoRepository';
import { ClienteRepository } from './../repositories/ClienteRepository';
import { Request, Response } from 'express';
import { PedidoRepository } from './../repositories/PedidoRepository';
export class PedidoController{
    async create(req: Request, res: Response){
        const {numero_pedido, pagamento} = req.body
        const {cliente_id} = req.params
        const {produto_id} = req.params   

        if(!numero_pedido){
            return res.status(404).json({ message: 'Inserir o numero do pedido' })
        }

        if(!pagamento){
            return res.status(404).json({ message: 'Inserir a forma d pagamento' })
        }
        
        try {
            const cliente = await ClienteRepository.findOneBy({id: Number(cliente_id)})
            
            if(!cliente){
                return res.status(404).json({ message: 'cliente não encontrado'})
            }

            const produto = await ProdutoRepository.findOneBy({id: Number(produto_id)})
            
            if(!produto){
                return res.status(404).json({ message: 'produto não encontrado'})
            }

            const newPedido = PedidoRepository.create({
                numero_pedido,
                pagamento,
                cliente,
                produto,
            })

            await PedidoRepository.save(newPedido)
            console.log(newPedido)
            return res.status(201).json(newPedido)

        } catch (error) {
            console.log(error)
			return res.status(500).json({ message: 'Internal Sever Error' })
        }

     }

     async list(req: Request, res: Response){
        try {
            const pedidos = await PedidoRepository.find({
                relations: {
                    cliente: true,
                    produto: true,
                },
            })
            console.log(pedidos)
            return res.json(pedidos)
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Error' })
        }
     }

     async id (req: Request, res: Response){
        try {
            const {id} = req.params
            const pedido = await PedidoRepository.findOneBy({id: Number(id)})
            console.log(pedido)
            return res.json(pedido)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Internal Error' })
        }
     }
}