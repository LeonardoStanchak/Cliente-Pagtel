import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Cliente } from "./Cliente";

@Entity()
export class Pedido{
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: "integer"})
    numerio_pedido: number;
    @Column({type: "text"})
    pagamento: string

    @OneToMany(() => Cliente, cliente => cliente.pedidos)
    @JoinColumn({name: "cliente_id"})
    cliente: Cliente
}