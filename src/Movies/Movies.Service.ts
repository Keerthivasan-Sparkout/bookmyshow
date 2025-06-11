import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Movies } from "./Movies.Entity";
import { Any, Repository } from "typeorm";
import { Theater } from "src/Theater/Theater.Entity";
import { TheaterService } from "src/Theater/Theater.Service";



@Injectable()
export class MoviesServices {

    constructor(@InjectRepository(Movies) private movieRepository: Repository<Movies>,
        @InjectRepository(Theater) private moviesTheaterRepository: Repository<Theater>,
        private theaterService: TheaterService) { }


    async saveMovies(newMovie: Movies) {
        let temp = new Movies();
        temp.movie_id = newMovie.movie_id;
        temp.movie_names = newMovie.movie_names;
        temp.theater_list = await this.addTheater(newMovie.theater_list);
        return this.movieRepository.save(temp);
    }

    upadteMovies(movies: Movies) {
        return this.movieRepository.update(movies.movie_id, movies);
    }

    getMovies(id: number) {
        return this.movieRepository.findOne({ where: { movie_id: id } });
    }

    deleteMovies(id: number) {
        return this.movieRepository.delete(id);
    }

    getMoviesToAddTheater(id: number) {
        this.movieRepository.findOne({ where: { movie_id: id } });
    }

    async addTheater(listoftheater): Promise<Theater[]> {
        let newlist: Theater[] = [];
        for (let theater in listoftheater) {
            let a = await this.theaterService.fetchTheaterByName(listoftheater[theater])
            if (a != null) {
                newlist.push(a);
            } else {
                throw new UnauthorizedException();
            }
        }
        return newlist;
    }

    getAllMovies() {
        return this.movieRepository.find();
    }

         

        // async fetchTheaterByMoviesName(movieName: string) {
        //     return await this.movieRepository.findOne({ where: { movie_names: movieName }, relations: ['theater_list'] })
        // }

         async fetchTheaterByMoviesName(movieName: string) {
            let currentMovieTheater= await this.movieRepository.findOne({ where: { movie_names: movieName }, relations: ['theater_list'] })
            let currentMovieTheaterlist=currentMovieTheater?.theater_list

            for(let index in currentMovieTheaterlist){
                currentMovieTheaterlist[index].screen_timing=JSON.parse(currentMovieTheaterlist[index].screen_timing)
            }


            for(let index in currentMovieTheaterlist){
                let currentMovieName=currentMovieTheaterlist[index].screen_timing;
              
              if(Array.isArray(currentMovieName)){
                currentMovieTheaterlist[index].screen_timing= currentMovieName.filter((words)=>words.running_movie===movieName)
              }
              
            }

            return currentMovieTheaterlist;

            }

}