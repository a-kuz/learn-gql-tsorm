
import "reflect-metadata";
import {createConnection} from "typeorm";
import {Book} from "./entity/Book";
import { Author } from './entity/Author';
createConnection().then(async connection => {

     
		const author = new Author();
		const book = new Book();
		author.name = 'Pushkin'
		await connection.manager.save(author);
		book.name = "Anna K.";
		book.pageCount = 100;
    book.authorId =author.authorId;
    await connection.manager.save(book);

    

}).catch(error => console.log(error));
