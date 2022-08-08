import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text" })
  descricacao: string;
  
  @Column({ type: "text" })
  preco: string;
}
