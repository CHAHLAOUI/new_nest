import { AuthService } from './auth.service';
import { AuthenticateDto } from './dto/authenticate.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(dto: AuthenticateDto): Promise<{
        token: any;
        user: {
            id: string;
            userName: string;
            role: import("../users/entities/user.entity").Role;
            createdAt: Date;
        };
    }>;
}
