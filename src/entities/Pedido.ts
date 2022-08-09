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
  @Column({ type: "integer" })
  numerio_pedido: number;
  @Column({ type: "text" })
  pagamento: string;

  @OneToMany(() => Cliente, (cliente) => cliente.pedidos)
  @JoinColumn({ name: "cliente_id" })
  cliente: Cliente;

  @ManyToOne(() => Produto, (produto) => produto.pedido)
  @JoinColumn({ name: "produto_id" })
  produtos: Produto[];

  @OneToOne(() => Entrega, (entrega) => entrega.pedido)
  entrega: Entrega;
}
