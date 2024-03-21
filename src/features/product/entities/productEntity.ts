import { Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm"


@Entity()
export class Product{

    @PrimaryGeneratedColumn()
    id: number = 0

    @Column()
    name: string = ""

    @Column()
    price: number = 0

    @Column()
    stock: number = 0

}