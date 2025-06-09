import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Req } from "@nestjs/common";
import Theater from "./Theater.Entity";
import { TheaterService } from "./theater.Service";
import { TheaterDto } from "./theater.dto";

@Controller("/theater")
export class TheaterController{

    constructor(private theaterService:TheaterService){}

    @Post()
    saveTheater(@Body() theater:Theater){
        this.theaterService.saveTheater(theater);
    }

    @Get("/id")
    getTheater(@Param ('id',ParseIntPipe) id:number){
        return  this.theaterService.getTheater(id);
    }

    @Delete("/id")
    removeTheater(@Param('id',ParseIntPipe) id:number){
        this.theaterService.removeTheater(id);
    }

}