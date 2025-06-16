import { Movies } from "src/Movies/Movies.Entity";
import { Column, Entity, ManyToMany, OneToMany, PrimaryColumn } from "typeorm";
import { Showes } from "../Show/Shows.Entity";

@Entity()
export class Theater{

    @PrimaryColumn()
    theater_id:number;
    @Column()
    theater_username:string;
    @Column()
    theater_name:string;
    @Column()
    theater_City:string
    @Column()
    total_screen:number
    @OneToMany(()=>Movies,(movie)=>movie.theater_list)
    movie_list:Movies  ;
    @Column()
    screen_timing:string;
    @OneToMany(()=>Showes,(showes)=>showes.theater_details)
    screen_details:Showes[]

    
}


