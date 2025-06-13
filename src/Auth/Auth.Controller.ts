import { Body, Controller, Param, Post } from "@nestjs/common";
import { AuthService } from "./Auth.Service";
import { RegisterDto } from "./Auth.Register.dto";
import { Theatervendors } from "src/Theater/TheaterOwners.Entity";

@Controller("/auth")
export class AuthController{

    constructor(private authService:AuthService){}

    @Post()
    createNewUser(@Body() vendor:Theatervendors){
         return this.authService.createNewUser(vendor)
    }

    @Post("/:vendor/:password")
    validateUser(@Param('vendor') vendor:string,@Param('password') password:string){
       return this.authService.validateUsernamePassword(vendor,password)
    }

}