import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Pedido } from "./Pedido";

@Entity()
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text" })
  descricacao: string;

  @Column({ type: "integer" })
  preco: number;

  @OneToMany(() => Pedido, (pedido) => pedido.produtos)
  pedido: Pedido;
}
