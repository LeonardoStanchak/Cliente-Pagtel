import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Pedido } from "./Pedido";

@Entity()
export class Entrega {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text" })
  status: string;

  @Column({ type: "date" })
  data_entrega: Date;

  @OneToOne(() => Pedido, (pedido) => pedido.entrega)
  @JoinColumn({ name: "pedido_id" })
  pedido: Pedido;
}
