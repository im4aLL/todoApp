/* eslint-disable jsdoc/require-jsdoc */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoService {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    create(createTodoDto: CreateTodoDto) {
        return 'This action adds a new todo';
    }

    findAll() {
        return `This action returns all todo`;
    }

    findOne(id: number) {
        return `This action returns a #${id} todo`;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    update(id: number, updateTodoDto: UpdateTodoDto) {
        return `This action updates a #${id} todo`;
    }

    remove(id: number) {
        return `This action removes a #${id} todo`;
    }
}
