import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from "@nestjs/common";
import { Theater } from "./Theater.Entity";
import { TheaterService } from "./Theater.Service";
import { AuthGuard } from "@nestjs/passport";


@UseGuards(AuthGuard('jwt'))
@Controller("/theater")
export class TheaterController{
    
    constructor(private theaterService:TheaterService){}

    

    @Get("/all")
    async getAllTheater(){
       return this.theaterService.getAlltheater();
    }

    @Get("/by-location/:location")
    async getAllBasedLocationTheater(@Param('location') location:string){
       return this.theaterService.fetchTheaterBasedOnLocation(location);
    }

    @Get("/:id")
    getTheater(@Param('id',ParseIntPipe) id:number){

       return this.theaterService.getTheater(id);
    }
    @Post()
    saveTheater(@Body() theater:Theater){
      
       return this.theaterService.savetheater(theater);
    }

    @Patch()
    updateTheater(@Body() theater:Theater){
       return this.theaterService.updateTheater(theater)
    }

    @Delete("/:id")
    deletetheater(@Param('id',ParseIntPipe) id:number){
       return this.theaterService.deletetheater(id);
    }
}