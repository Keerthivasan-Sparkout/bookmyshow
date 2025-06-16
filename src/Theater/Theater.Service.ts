import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Theater } from "./Theater.Entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Showes } from "src/Show/Shows.Entity";
import { ShowesService } from "src/Show/Showes.Service";


@Injectable()
export class TheaterService{

    public constructor(
        @InjectRepository(Theater)
        private theaterRepository:Repository<Theater>,private showService:ShowesService
){}

    savetheater(theater:Theater){
      
      theater.screen_timing=JSON.stringify(theater.screen_timing);
      theater.screen_details.forEach(ele=>this.showService.saveShowes(ele))
      return this.theaterRepository.save(theater);
    }

    async getTheater(id:number){
     let temp= await this.theaterRepository.findOne({where:{theater_id:id}});
      temp? temp.screen_timing=JSON.parse(temp.screen_timing): null;
     return temp;
       
    }

     updateTheater(theater:Theater){
      theater.screen_timing=JSON.stringify(theater.screen_timing);
      return  this.theaterRepository.update(theater.theater_id,theater);    
    }
    
    deletetheater( id:number){
          return  this.theaterRepository.delete(id);
    }

   async getAlltheater(){
        return await this.theaterRepository.find();
    }

    fetchTheaterByName(theaterName){
      
       return this.theaterRepository.findOne({where:{theater_name:theaterName}});
    }

   async fetchTheaterBasedOnLocation(location){
      return await this.theaterRepository.find({where:{theater_City:location}});
    }

   async validateUsername(username:string){
     return (await this.theaterRepository.find()).filter((theater) => theater.theater_username===username);
    }
   

}