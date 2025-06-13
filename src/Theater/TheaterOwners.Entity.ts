import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Theatervendors{

    @PrimaryColumn()
    vendors_id:number;
    @Column()
    vendors_username:string;
    @Column()
    vendors_email:string;
    @Column()
    vendors_password:string;
    @Column()
    list_Theater:string;

}