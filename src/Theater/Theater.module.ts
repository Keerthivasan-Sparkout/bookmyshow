import { Module } from "@nestjs/common";
import { TheaterController } from "./Theater.Controller";
import { TheaterService } from "./Theater.Service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Theater } from "./Theater.Entity";


@Module({
    
    imports: [TypeOrmModule.forFeature([Theater])],
    controllers: [TheaterController],
    providers: [TheaterService],
    exports: [TheaterService, TypeOrmModule,TheaterModule]

})
export class TheaterModule { }