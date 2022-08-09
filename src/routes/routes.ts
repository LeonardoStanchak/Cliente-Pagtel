import { PedidoController } from './../controllers/PedidoController';
import { ProdutoController } from './../controllers/ProdutoController';
import { ClienteController } from './../controllers/ClienteController';
import { Router } from "express";
import { EntregaController } from '../controllers/EntregaController';


const routes = Router()

routes.post("/cliente", new ClienteController().create)
routes.post("/produto", new ProdutoController().create)
routes.post("/pedido/:cliente_id/:produto_id/create", new PedidoController().create)
routes.post("/entrega/:pedido_id/create", new EntregaController().create)

export default routes