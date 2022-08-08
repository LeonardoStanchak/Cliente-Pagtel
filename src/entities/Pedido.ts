import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pedido{
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: "integer"})
    numero_pedido: number;
}