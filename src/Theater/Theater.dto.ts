import { IsArray, IsInt, isInt, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Movies } from "src/Movies/Movies.Entity";

export class TheaterDto{

        @IsInt()
        @IsNotEmpty()
          theater_id:number;
          @IsString()
          theater_name:string;
          @IsString()
          theater_City:string
          @IsNumber()
          total_screen:number
           @IsString()
          password:string
          @IsArray()
          movie_list:Movies;
          @IsArray()
          screen_timing:{screenName:string, timing:string, running_movie:string , total_seat:number}[] | string;

}