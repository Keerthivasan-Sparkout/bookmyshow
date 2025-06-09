import { Injectable } from "@nestjs/common";
import Theater from "./Theater.Entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class TheaterService{

    constructor(
        @InjectRepository(Theater)
        private theaterRepositry:Repository<Theater>
    ){}

    saveTheater(theater:Theater){
        this.theaterRepositry.create(theater);
    }

    getTheater(id:number){
        return this.theaterRepositry.findOne({where :{theater_id:id}})

    }

    removeTheater(id:number){
        return this.theaterRepositry.delete(id);
    }

}