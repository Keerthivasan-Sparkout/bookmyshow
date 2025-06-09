import { Module } from "@nestjs/common";
import { TheaterService } from "./theater.Service";
import { TheaterController } from "./theater.controller";

@Module({
    controllers:[TheaterController],
    providers:[TheaterService]
})
export class TheaterModule{}