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

    getVendors(email:string){
        console.log(email)
        return this.vendorsrepository.findOne({where:{vendors_email:email}})
    }

}