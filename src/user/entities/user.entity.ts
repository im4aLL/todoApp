import { Todo } from 'src/todo/entities/todo.entity';
import { PrimaryGeneratedColumn, Column, OneToMany, Entity } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column()
    name: string;

    @Column()
    address: string;

    @OneToMany(() => Todo, (todo) => todo.user)
    todos: Todo[];
}
