import { UsersService } from '../users/users.service';
import { AuthenticateDto } from './dto/authenticate.dto';
export declare class AuthService {
    private usersService;
    constructor(usersService: UsersService);
    authenticate(dto: AuthenticateDto): Promise<{
        token: any;
        user: {
            id: string;
            userName: string;
            role: import("../users/entities/user.entity").Role;
            createdAt: Date;
        };
    }>;
}
