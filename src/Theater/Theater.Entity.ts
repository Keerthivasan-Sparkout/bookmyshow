import { Movies } from "src/Movies/Movies.Entity";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";

@Entity()
export class Theater{

    @PrimaryColumn()
    theater_id:number;
    @Column()
    theater_name:string;
    @Column()
    theater_City:string
    @Column()
    theater_timing:string[]
    @ManyToMany(()=>Movies,(movie)=>movie.theater_list)
    movie_list:Movies;
}