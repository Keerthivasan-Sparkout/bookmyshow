import { Controller, Delete, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { Movies } from "./Movies.Entity";
import { MoviesService } from "./movies.service";

@Controller("/movies")
export class MoviesController{

    constructor(private moviesService:MoviesService){}

    @Post()
    saveMovies(movie:Movies){
        this.moviesService.saveMovie(movie)
    }

    @Get("/id")
    getmovie(@Param('id', ParseIntPipe) id:number){
        return this.moviesService.getMovies(id);
    }

    @Delete("/id")
    deleteMovies(@Param('id', ParseIntPipe) id:number){
        this.moviesService.removeMovie(id);
    }
}