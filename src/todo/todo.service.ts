import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';
import { UserEmail } from 'src/auth/common/decorator/user.decorator';

@Injectable()
export class TodoService {
  constructor(private readonly databaseService: DatabaseService) { }
  async create(createTodoDto: CreateTodoDto,email:string) {
    try {
      const user = await this.databaseService.user.findUnique({where:{email}});
      let data: Prisma.TODOCreateInput = {
        description: createTodoDto.description,
        task: createTodoDto.task,
        status: 'ACTIVE',
        user:{
          connect:{email:user.email}
        }
        
      }
      return await this.databaseService.tODO.create({ data });
    } catch (error) {
      return error
    }
  }

  async findAll(UserEmail:string) {
    return await this.databaseService.tODO.findMany({
      where:{
        userEmail:UserEmail
      }
    });
  }

  async findOne(id: number) {
    return await this.databaseService.tODO.findUnique({
      where: {
        id: id
      }
    });
  }

  async update(id: number, updateTodoDto: UpdateTodoDto) {
    return await this.databaseService.tODO.update({
      where: {
        id: id
      },
      data: updateTodoDto
    });
  }
  async remove(id: number) {
    return await this.databaseService.tODO.delete({
      where: {
        id: id
      }
    });
  }
}
