import { Pedido } from './../entities/Pedido';
import { AppDataSource } from './../data-source';
export const PedidoRepository = AppDataSource.getRepository(Pedido)