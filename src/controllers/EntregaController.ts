import { EntregaRepository } from './../repositories/EntregaRepository';
import { PedidoRepository } from './../repositories/PedidoRepository';
import { Request, Response } from "express";

export class EntregaController{
    async create(req: Request, res: Response){
        const {status, data_entrega} = req.body;
        const {pedido_id} = req.params;

        if(!status){
            return res.status(400).json({message: "Nescessario informar o status do produto"})
        }

        
        if(!data_entrega){
            return res.status(400).json({message: "Nescessario informar a data de entrega do produto"})
        }

        try {
            const pedido = await PedidoRepository.findOneBy({id: Number(pedido_id)})

            if(!pedido){
                return res.status(404).json({message: "Nescessario informar o numero do pedido"})
            }

            const newEntrega = EntregaRepository.create({
                status,
                data_entrega,
                pedido
            })

            await EntregaRepository.save(newEntrega);
            console.log(newEntrega);
            return res.status(201).json(newEntrega)
            
        } catch (error) {
            console.log(error)
            return res.status(500).json({message: "Server error"})
        }
    }

    async list(req: Request, res: Response){
        try{
            const entregas = await EntregaRepository.find({
                relations: {
                    pedido: true,
                },
            })
            console.log(entregas)
            return res.json(entregas)
        }catch(error){
            console.log(error)
            return res.status(500).json({message: "Server error"})
        }
    
    }

    async id (req: Request, res: Response){
        try {
            const {id} = req.params
            const entrega = await EntregaRepository.findOneBy({id: Number(id)})
            return res.json(entrega)
        } catch (error) {
            console.log(error)
            return res.status(500).json({message: "Server error"})
        }
    }
}