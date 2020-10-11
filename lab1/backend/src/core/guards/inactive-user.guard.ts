import { CanActivate, ExecutionContext, Inject, Injectable } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { DBLService } from '../../dbl'
import { IUser } from '../interfaces/users'

// @Injectable()
// export class InactiveUserGuard implements CanActivate {
//   constructor(private readonly dbl: DBLService, private readonly reflector: Reflector) {}
//
//   async canActivate(context: ExecutionContext): Promise<boolean> {
//     const request: any = context.switchToHttp().getRequest()
//     if (!request.user || !request.user.id) return false
//
//     if (!request.fullUser)
//       request.fullUser = await this.dbl.usersRepository.findOne(request.user.id)
//
//     const user: IUser = request.fullUser
//
//     return user.isDeleted === false && user.isActive === true
//   }
// }
