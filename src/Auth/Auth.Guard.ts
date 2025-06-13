import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";

@Injectable()
export class vendorGuards implements CanActivate{


    constructor(private jwtService:JwtService){}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        let req=context.switchToHttp().getRequest();
        let token=this.extractTokenFromRequest(req);
        if(token){
            req.user=this.jwtService.verifyAsync(token,{secret: "my-app-bookmyshow"})
            return true
        }else{
            throw new UnauthorizedException("sign in to access")
        }
    }


    extractTokenFromRequest(request:any){
       return  (request.header.authorization)? (request.header.authorization.startWith('Bearer '))?.substring(7):undefined;
    }

}