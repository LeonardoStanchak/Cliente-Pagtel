import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Pedido } from "./Pedido";

@Entity()
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: "text" })
  nome: string;

  @Column({ type: "text" })
  cpf: string;

  @Column({ type: "date" })
  data_nascimento: Date;

  @ManyToOne(() => Pedido, (pedido) => pedido.cliente)
  pedido: Pedido;
}
