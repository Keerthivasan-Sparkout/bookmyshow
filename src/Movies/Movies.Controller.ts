import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from "@nestjs/common";
import { Movies } from "./Movies.Entity";
import { MoviesServices } from "./Movies.Service";

@Controller("/movies")
export class MoviesController{

    constructor(private movieServices:MoviesServices){}

    @Get()
        getSample(){
            const l=[
                {
                names:"inox",
                city:"coimbatore",
                timing:["10:00 pm","11:00pm"]
                },{
                names:"inox",
                city:"coimbatore",
                timing:["10:00 pm","11:00pm"]
                },{
                names:"inox",
                city:"coimbatore",
                timing:["10:00 pm","11:00pm"]
                }
            ]
            return l;
        }

    @Post()
    saveMovies(@Body() movies:Movies){
        return this.movieServices.saveMovies(movies);
    }

    @Patch()
    upadteMovies(@Body() movies:Movies){
        return this.movieServices.upadteMovies(movies);
    }

    @Get("/all")
    getAllMovies(){
        return this.movieServices.getAllMovies();
    }

    @Get("by-name/:name")
    getTheaterByMovieName(@Param('name') name: string){
        return this.movieServices.fetchTheaterByMoviesName(name);
    }

    @Get("/:id")
    getMovies(@Param('id',ParseIntPipe) id:number){
        return this.movieServices.getMovies(id);
    }

    @Delete("/:id")
    deleteMovies(@Param('id',ParseIntPipe) id:number){
        return this.movieServices.deleteMovies(id);
    }

    

    

}