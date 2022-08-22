import { Cliente } from './../entities/Cliente';
import { AppDataSource } from './../data-source';
export const ClienteRepository = AppDataSource.getRepository(Cliente)