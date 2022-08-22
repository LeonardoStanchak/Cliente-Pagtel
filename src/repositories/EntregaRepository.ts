import { Entrega } from './../entities/Entrega';
import { AppDataSource } from './../data-source';
export const EntregaRepository = AppDataSource.getRepository(Entrega);