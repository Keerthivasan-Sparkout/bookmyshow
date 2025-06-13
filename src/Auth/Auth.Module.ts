import { Module } from "@nestjs/common";
import { TheaterModule } from "src/Theater/Theater.module";
import { AuthService } from "./Auth.Service";
import { AuthController } from "./Auth.Controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Theatervendors } from "src/Theater/TheaterOwners.Entity";
import { TheaterVendorsService } from "src/Theater/Theater.Owners.service";
import { JwtModule } from "@nestjs/jwt";

@Module({
    imports:[TheaterModule,
        TypeOrmModule.forFeature([Theatervendors]),
    JwtModule.register({
        secret:"my-app-bookmyshow",
        signOptions:{expiresIn:'1h'},
        global:true
    }
    )],
    controllers:[AuthController],
    providers:[AuthService]
})  
export class AuthModule{}