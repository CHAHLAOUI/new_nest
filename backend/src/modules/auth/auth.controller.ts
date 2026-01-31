import { Controller, Post, Body, UnauthorizedException, Res, HttpStatus, Get } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { authenticate } from "passport";
import { AuthenticateDto } from "./dto/authenticate.dto";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post()
  login(@Res() res, @Body() authenticateDto : AuthenticateDto )
  {
    try
    {
      const response = this.authService.authenticate(authenticateDto)
      return res.status(HttpStatus.OK).json(response);
    }
    catch (error)
    {
      // console.log(error);
      // console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk\n");
      return res.status(error.status).json(error.response);
    }
  }


  // return "helo auth post"
  // login(): string
  
  // @Get()
  // hi(): string {
  //   return "hello auth";
  // }
  // async login(@Body() body: { username: string; password: string }) {
  //   const user = await this.authService.validateUser(
  //     body.username,
  //     body.password,
  //   );
  //   if (!user) {
  //     throw new UnauthorizedException("Invalid credentials");
  //   }
  //   return this.authService.login(user);
  // }



}
