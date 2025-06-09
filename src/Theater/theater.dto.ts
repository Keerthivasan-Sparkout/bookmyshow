import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class TheaterDto{

        @IsNumber()
        @IsNotEmpty()
         theater_id:number;
        @IsString()
         theater_name:string;
        @IsString()
         theater_city:string;
        @IsString()
         theater_address:string;
        
         
}