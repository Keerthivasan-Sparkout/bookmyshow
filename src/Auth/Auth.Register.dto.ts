import { IsArray, IsEmail, IsNumber, IsString } from "class-validator";

export class RegisterDto {

    @IsNumber()
    vendors_id: number;
    @IsString()
    vendors_username;
    @IsEmail()
    vendors_email: string;
    @IsString()
    vendors_password: string;
    @IsArray()
    list_Theater: string[];

}