import { Injectable } from "@nestjs/common";
import { TheaterService } from "src/Theater/Theater.Service";
import { RegisterDto } from "./Auth.Register.dto";
import { createCipheriv, randomBytes, scrypt } from "crypto";
import { promisify } from "util";
import { concat, Subject } from "rxjs";
import { TheaterVendorsService } from "src/Theater/Theater.Owners.service";
import { Theatervendors } from "src/Theater/TheaterOwners.Entity";
import * as bcrypt from 'bcrypt';
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {


    constructor(private theaterService: TheaterService,
        private TheaterVendorsService: TheaterVendorsService,
        private jwtService: JwtService) { }


    async validateUsernamePassword(vendors: string, password: string,) {

        const user = await this.TheaterVendorsService.getVendors(vendors);
        if (user !== null) {
            let ismatch = await bcrypt.compare(user.vendors_password, password);
            if (!ismatch) {
                return this.jwtService.signAsync({ sub: user.vendors_id, username: user.vendors_username })
            }
            else {
                throw new Error("User Name doesn't exits");
            }

        }
    }

    async createNewUser(vendor: Theatervendors) {

        //   let Iv=randomBytes(16);
        //   let key = await promisify(scrypt)("password",'salt',32) as Buffer;
        //   let cipher=createCipheriv('aes-256-ccm',key,Iv);
        //   let encryptkey=Buffer.concat(
        //     [cipher.update("text"),cipher.final()]
        //   );

       let olduser=  await this.TheaterVendorsService.getVendors(vendor.vendors_email)
        
        if(olduser!=null){
            return "already exits"
        }else{
            const salt = await bcrypt.genSalt();
            console.log(vendor.vendors_password)
            vendor.vendors_password = await bcrypt.hash(vendor.vendors_password, salt)
            //vendor.list_Theater=JSON.stringify(vendor.list_Theater);
             this.TheaterVendorsService.saveVendors(vendor)
        }
    }

}