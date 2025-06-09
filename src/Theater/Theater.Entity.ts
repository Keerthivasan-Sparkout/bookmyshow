import { Optional } from "@nestjs/common";
import { Movies } from "src/Movies/Movies.Entity";
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryColumn } from "typeorm";

@Entity()
export default class Theater{

    @PrimaryColumn()
     theater_id:number;
    @Column()
     theater_name:string;
    @Column()
     theater_city:string;
    @Column()
     theater_address:string;
    @Column()
    @ManyToMany(()=> Movies,(movies)=>movies.theater_list)
    @JoinTable()
     movies_list:Movies[];


}