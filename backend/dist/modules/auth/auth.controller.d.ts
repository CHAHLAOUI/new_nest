import { AuthService } from "./auth.service";
import { AuthenticateDto } from "./dto/authenticate.dto";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(res: any, authenticateDto: AuthenticateDto): any;
}
