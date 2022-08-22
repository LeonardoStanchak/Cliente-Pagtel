import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Cliente } from "./Cliente";
import { Entrega } from "./Entrega";
import { Produto } from "./Produto";

@Entity()
export class Pedido {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text" })
  numero_pedido: string;

  @Column({ type: "text" })
  pagamento: string;

  @ManyToOne(() => Cliente, (cliente) => cliente.pedido)
  @JoinColumn({ name: "cliente_id" })
  cliente: Cliente;

  @ManyToOne(() => Produto, produto => produto.pedido)
  @JoinColumn({ name: "produto_id" })
  produto: Produto;

  @OneToOne(() => Entrega, (entrega) => entrega.pedido)
  entrega: Entrega;
}
