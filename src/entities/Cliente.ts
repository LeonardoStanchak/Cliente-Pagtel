import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Pedido } from "./Pedido";

@Entity()
export class Cliente{
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: 'text'})
    nome: string;

    @ManyToOne(() => Pedido, pedido => pedido.cliente)
    pedidos: Pedido[]
}