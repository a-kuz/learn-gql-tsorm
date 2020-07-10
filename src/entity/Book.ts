import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import { Author } from "./Author";

@Entity()
export class Book {

    @PrimaryGeneratedColumn()
    bookId: number;

    @Column()
    name: string;

    @Column()
    pageCount: number;

    @Column()
    authorId: number;

}

