import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { ShowesService } from "./Showes.Service";
import { Showes } from "./Shows.Entity";
import { showesDto } from "./Showes.dto";

@Controller("/theater/showes")
export class ShowesController{


    constructor(private showesServices:ShowesService){}

    @Get("/:theater/:location")
    getShowes(@Param('theater') theatre:string,@Param('location') location:string){
        console.log(theatre+"   "+location);
        return this.showesServices.getShowes(theatre,location);
    }

    @Post()
    saveShowes(@Body() showesdto:Showes){
        return  this.showesServices.saveShowes(showesdto);
    }


}