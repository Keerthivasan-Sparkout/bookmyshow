import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Theater } from "src/Theater/Theater.Entity";

export class showesDto{

        @IsNumber()
        @IsNotEmpty()
        show_id:number;
        @IsString()
        screen_name:string;
       @IsString()
        running_movie:string;
       @IsString()
        movie_time:string;
        @IsNumber()
        total_seat:number;
        @IsNumber()
        tickets_fair:number;
        @IsString()
        booking_details_everySeat:string;
        @IsString()
        theater_details:string | Theater;

}