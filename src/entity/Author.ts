import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Author {

    @PrimaryGeneratedColumn()
    bookId: number;

    @Column()
    name: string;

    @Column()
    pageCount: number;

    @Column()
    authorId: number;

    @Column()
    author: Author;

}

