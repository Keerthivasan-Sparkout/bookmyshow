import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Showes } from "./Shows.Entity";
import { ShowesController } from "./Showes.Controller";
import { ShowesService } from "./Showes.Service";
import { TheaterModule } from "src/Theater/Theater.module";
import { MoviesModule } from "src/Movies/Movies.Module";

@Module({
    imports:[TypeOrmModule.forFeature([Showes]),TheaterModule,MoviesModule],
    controllers:[ShowesController],
    providers:[ShowesService],
    exports:[ShowesService]
})
export class ShowModule{

}