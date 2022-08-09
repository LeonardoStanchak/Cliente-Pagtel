import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Pedido } from "./Pedido";

@Entity()
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text"})
  nome_produto: string;

  @Column({ type: "text" })
  descricao: string;

  @Column({ type: "text" })
  preco: string;

  @OneToMany(() => Pedido, pedido => pedido.produto)
  pedido: Pedido;
}
