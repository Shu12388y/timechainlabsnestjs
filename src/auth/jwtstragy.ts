import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { DatabaseService } from "src/database/database.service";
import {ExtractJwt,Strategy} from "passport-jwt"


    @Injectable()
    export class JwtStrategy extends PassportStrategy(Strategy) {
      constructor(private readonly databaseService:DatabaseService) {
        super({
          jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
          ignoreExpiration: false,
          secretOrKey: process.env.JWT_SECRET || 'yourSecretKey',  // Same secret key as in JwtModule
        });
      }


    async Validate(payload:{userEmail:string}){
        const user =  await this.databaseService.user.findFirst({
            where:{
                email:payload.userEmail
            }
        })
        return user
    }

}
