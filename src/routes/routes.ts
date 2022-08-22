import { PedidoController } from './../controllers/PedidoController';
import { ProdutoController } from './../controllers/ProdutoController';
import { ClienteController } from './../controllers/ClienteController';
import { Router } from "express";
import { EntregaController } from '../controllers/EntregaController';


const routes = Router()

routes.post("/cliente", new ClienteController().create)
routes.get("/cliente/:id", new ClienteController().id)
routes.post("/produto", new ProdutoController().create)
routes.get("/produto/:id", new ProdutoController().id)
routes.post("/pedido/:cliente_id/:produto_id/create", new PedidoController().create)
routes.get("/pedidos", new PedidoController().list)
routes.get("/pedido/:id", new PedidoController().id)
routes.post("/entrega/:pedido_id/create", new EntregaController().create)
routes.get("/entregas", new EntregaController().list)
routes.get("/entrega/:id", new EntregaController().id)

export default routes