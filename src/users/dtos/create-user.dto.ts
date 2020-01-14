import { IUser } from './../interfaces/user.interface';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto implements IUser {
    @IsNotEmpty()
    firstName: string;

    @IsNotEmpty()
    lastName: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;
}