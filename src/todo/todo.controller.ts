import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { JwtAuthGuard } from 'src/auth/auth.guard';
import { UserEmail } from 'src/auth/common/decorator/user.decorator';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';




@ApiTags('TODO')
@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiOperation({description:'Create new todo',summary:'Create a new todo details'})
  create(@Body() createTodoDto: CreateTodoDto,@UserEmail()
  UserEmail:string) {
    return this.todoService.create(createTodoDto,UserEmail);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get()
  @ApiOperation({description:'To Find All the todos',summary:'To find the user all the todos'})
  findAll(@UserEmail()
UserEmail:string) {
    return this.todoService.findAll(UserEmail);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  @ApiOperation({description:'To find a particular todo',summary:'To find a particular todo'})
  findOne(@Param('id') id: string) {
    return this.todoService.findOne(+id);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  @ApiOperation({description:'To update a particular todo',summary:'To update a particular todo'})
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todoService.update(+id, updateTodoDto);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  @ApiOperation({description:'To delete the particular todo',summary:'To delete the particular todo'})
  remove(@Param('id') id: string) {
    return this.todoService.remove(+id);
  }
}
