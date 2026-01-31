
import {IsString , IsNotEmpty } from "class-validator";
import { Role } from "../interface/Role";

export class ProfileDto
{
    @IsNotEmpty()
    @IsString()
     readonly id  : string;
    @IsNotEmpty()
    @IsString()
    userUUID : string;


    @IsNotEmpty()
    @IsString()
    userName : string;


    @IsNotEmpty()
    @IsString()
    role : Role;

}