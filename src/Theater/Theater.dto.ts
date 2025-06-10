import { IsArray, IsInt, isInt, IsNotEmpty, IsString } from "class-validator";

export class TheaterDto{

        @IsInt()
        @IsNotEmpty()
        theater_id:number;
        @IsString()
        theater_name:string;
        @IsString()
        theater_City:string
        @IsString()
        theater_timing:string
        // @IsArray()
        // movie_list:Movies;

}