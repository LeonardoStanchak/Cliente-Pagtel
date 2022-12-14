import { Cliente } from './../entities/Cliente';
import { ClienteRepository } from './../repositories/ClienteRepository';
import { Request, Response } from "express";
import { request } from 'http';
import { stringify } from 'querystring';
import { ObjectID } from 'typeorm';
import { Console } from 'console';

export class ClienteController {
  async create(req: Request, res: Response) {
    const { nome, cpf, data_nascimento } = req.body;

    if (!nome) {
      return res
        .status(400)
        .json({
          message: "Nescessario colocar o nome para realizar o cadastro",
        });
    }

    if (!cpf) {
      return res
        .status(400)
        .json({
          message: "Nescessario colocar o cpf para realizar o cadastro",
        });
    }

    if (!data_nascimento) {
      return res
        .status(400)
        .json({
          message: "Nescessario colocar a data de nascimento para realizar o cadastro",
        });
    }

    try {
         var newCliente = ClienteRepository.create({
            nome,
            cpf,
            data_nascimento
        })

        await ClienteRepository.save(newCliente);

        console.log(newCliente)

        return res.status(201).json(newCliente);


    } catch (error) {
        console.log(error)
        return res.status(500).json({message: "Server error"})
    }
  }

  async id(req: Request, res: Response){
    try {
      const {id} = req.params
      const cliente = await ClienteRepository.findOneBy({id: Number(id)})
      console.log(cliente)
      return res.json(cliente)
    } catch (error) {
      console.log(error)
      return  res.status(500).json({message: "Server error"})
    }
  }

}
