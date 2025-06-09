import { Repository } from "typeorm";
import { Movies } from "./Movies.Entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class MoviesService{

    constructor(
        @InjectRepository(Movies)
        private movieRepository:Repository<Movies>
    ){}

    saveMovie(movie:Movies){
        this.movieRepository.save(movie);
    }

    getMovies(id:number){
        return this.movieRepository.findOne({where :{movie_id:id}});
    }

    removeMovie(id:number){
        return this.movieRepository.delete(id);
    }

}