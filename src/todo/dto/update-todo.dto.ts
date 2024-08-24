import { PartialType } from '@nestjs/mapped-types';
import { CreateTodoDto } from './create-todo.dto';
import { IsOptional } from 'class-validator';


export class UpdateTodoDto extends PartialType(CreateTodoDto) {
    @IsOptional()
    status:TODOSTATUS
}


enum TODOSTATUS{
    ACTIVE='ACTIVE',
    DONE = 'DONE'
}