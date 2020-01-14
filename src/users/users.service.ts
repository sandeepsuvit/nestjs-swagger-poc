import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { IUser } from './interfaces/user.interface';

@Injectable()
export class UsersService {
    users: IUser[] = [];

    /**
     * Create a new user
     *
     * @param {CreateUserDto} user
     * @returns {Promise<IUser>}
     * @memberof UsersService
     */
    async create(user: CreateUserDto): Promise<IUser> {
        try {
            this.users.push(user);
            // Persist the data
            return user;
        } catch (error) {
            throw new HttpException(error, HttpStatus.BAD_REQUEST);
        }
    }

    /**
     * Get the list of all users
     *
     * @returns {Promise<IUser[]>}
     * @memberof UsersService
     */
    async findAll(): Promise<IUser[]> {
        return this.users;
    }
}
