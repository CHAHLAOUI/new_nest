
import {IsString , IsNotEmpty } from "class-validator";

export class AuthenticateDto
{
    @IsNotEmpty()
    @IsString()
    userName : string;


    @IsNotEmpty()
    @IsString()
    email : string ;

    @IsNotEmpty()
    @IsString()
    password : string;
}