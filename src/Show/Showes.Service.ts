import { DataSource, Repository } from "typeorm";
import { Showes } from "./Shows.Entity";
import { InjectRepository } from "@nestjs/typeorm";
import { TheaterService } from "src/Theater/Theater.Service";
import { Injectable } from "@nestjs/common";
import { MoviesServices } from "src/Movies/Movies.Service";


@Injectable()
export class ShowesService {

    constructor(
        @InjectRepository(Showes)
        private showesRepository: Repository<Showes>,
        private theaterServices: TheaterService,
        private moviesServices: MoviesServices,
        private datasource: DataSource) { }

    getShowes(theatre: string, location: string) {

      return  this.datasource.createQueryBuilder(Showes,'show')
                        .where('show.theater_details.theater_name=:theatre',{theatre})
                        .andWhere('show.theater_details.theater_city=:location',{location})
                        .getMany();
    }
   

    async saveShowes(showes: Showes) {
        let temp = await this.theaterServices.fetchTheaterByName(showes.theater_details);
        let temp_movie = await this.moviesServices.getMoviesByMoviesName("retro");
        temp ? showes.theater_details = temp : null;
        temp_movie ? showes.running_movie = temp_movie : null;
      
        return this.showesRepository.save(showes);
    }

    getTheaterDetails(name: string) {
        return this.theaterServices.fetchTheaterByName(name)
    }

}