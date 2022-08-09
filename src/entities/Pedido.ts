import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Cliente } from "./Cliente";
import { Produto } from "./Produto";

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

    @ManyToOne(() => Produto, produto => produto.pedido)
    @JoinColumn({name: "produto_id"})
    produtos: Produto[]
}