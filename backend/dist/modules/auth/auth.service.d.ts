import { AuthenticateDto } from "./dto/authenticate.dto";
import { IAuthenticate } from "./interface/Role";
export declare class AuthService {
    users: {};
    authenticate(authenticateDto: AuthenticateDto): IAuthenticate;
}
