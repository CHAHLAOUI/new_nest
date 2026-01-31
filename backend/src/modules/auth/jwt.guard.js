import { Injectable }  from '@nestjs/common'
import { AutGuard }  from '@nestjs/passport'


@Injectable()

export class JwtAuthGuard extends AutGuard('jwt') 
{
    
}