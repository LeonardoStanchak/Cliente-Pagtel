import { Produto } from './../entities/Produto';
import { AppDataSource } from './../data-source';
export const ProdutoRepository = AppDataSource.getRepository(Produto)