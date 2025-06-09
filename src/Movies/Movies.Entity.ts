import { Optional } from "@nestjs/common";
import Theater from "src/Theater/Theater.Entity";
import { Column, Entity, ManyToMany, PrimaryColumn } from "typeorm";

@Entity()
export class Movies{

    @PrimaryColumn()
    movie_id:number;
    @Column()
     movie_name:string;
    @Column()
    movie_rating:number;
    @Column()S
    movie_crew:Array<string>;
    @Column()
     @ManyToMany(()=> Theater,(theater)=>theater.movies_list)
     theater_list:Theater[]



    constructor(movie_id:number,movie_name:string,movie_rating:number,movie_crew:Array<string>){
        this.movie_id=movie_id;
        this.movie_name=movie_name;
        this.movie_rating=movie_rating;
        movie_crew=movie_crew;
    }

    
    

}