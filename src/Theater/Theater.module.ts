import { Module } from "@nestjs/common";
import { TheaterController } from "./Theater.Controller";
import { TheaterService } from "./Theater.Service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Theater } from "./Theater.Entity";
import { Theatervendors } from "./TheaterOwners.Entity";
import { TheaterVendorsService } from "./Theater.Owners.service";


@Module({
    
    imports: [TypeOrmModule.forFeature([Theater,Theatervendors])],
    controllers: [TheaterController],
    providers: [TheaterService,TheaterVendorsService],
    exports: [TheaterService, TypeOrmModule,TheaterModule,TheaterVendorsService]

})
export class TheaterModule { }