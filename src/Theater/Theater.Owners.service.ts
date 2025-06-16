import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Theatervendors } from "./TheaterOwners.Entity";

@Injectable()
export class TheaterVendorsService{

    constructor(@InjectRepository(Theatervendors)
        private vendorsrepository:Repository<Theatervendors>
    ){}

    saveVendors(theatervendors:Theatervendors){
        this.vendorsrepository.save(theatervendors);
    }

    async getVendors(email:string){
       
        return await this.vendorsrepository.findOne({where:{vendors_email:email}})
    }
}