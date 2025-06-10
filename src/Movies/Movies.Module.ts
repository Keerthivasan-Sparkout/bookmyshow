import { Module } from "@nestjs/common";
import { MoviesServices } from "./Movies.Service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Movies } from "./Movies.Entity";
import { MoviesController } from "./Movies.Controller";
import { Theater } from "src/Theater/Theater.Entity";
import { TheaterModule } from "src/Theater/Theater.module";
@Module({
    imports:[TypeOrmModule.forFeature([Movies,Theater]), TheaterModule],
    controllers:[MoviesController],
    providers:[MoviesServices]
})
export class MoviesModule{

}