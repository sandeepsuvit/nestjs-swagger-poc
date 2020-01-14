import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiHeader, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';

@ApiTags('users')
@ApiHeader({ name: 'X-TENANT-ID', description: 'Tenant ID' }) // Header gets attached to only the @Post method
@Controller('users')
export class UsersController {
    constructor(
        private userService: UsersService,
    ) { }

    @Post()
    // @ApiHeader({ name: 'X-TENANT-ID', description: 'Tenant ID' }) // <- This works
    createUser(@Body() user: CreateUserDto) {
        return this.userService.create(user);
    }

    @Get()
    // @ApiHeader({ name: 'X-TENANT-ID', description: 'Tenant ID' }) // <- This works
    findAllUsers() {
        return this.userService.findAll();
    }
}
