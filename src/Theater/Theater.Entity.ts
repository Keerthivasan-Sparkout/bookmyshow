import { Movies } from "src/Movies/Movies.Entity";
import { Column, Entity, ManyToMany, OneToMany, PrimaryColumn } from "typeorm";

@Entity()
export class Theater{

    @PrimaryColumn()
    theater_id:number;
    @Column()
    theater_name:string;
    @Column()
    theater_City:string
    @Column()
    total_screen:number
    @ManyToMany(()=>Movies,(movie)=>movie.theater_list)
    movie_list:Movies;
    // @OneToMany(()=>MovieTimingAndScreen, (movieTimingAndScreen)=>movieTimingAndScreen.theater)
    @Column()
    screen_timing:string;
}


