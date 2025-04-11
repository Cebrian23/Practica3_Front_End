import Axios from "npm:axios";
import { Book_1, Books } from "./types.ts";

export const Filtrar_Libros = (Libros: Books): Books => {
    const Final_books: Books = {entries: []};

    Libros.entries.forEach((l) => {
        if(Final_books.entries.length < 6){
            Final_books.entries.push(l);
        }
    });

    //console.log(Final_books.entries)

    return Final_books;
}

export const Filtrar_Libros2 = (Libros: Book_1[]): Book_1[] => {
    const Final_books: Book_1[] = [
                                    Libros[1], Libros[2],
                                    Libros[3], Libros[4],
                                    Libros[5], Libros[6],
                                  ];

    console.log(Final_books);

    return(Final_books);
}

export const Devolver_1 = async (name: string): Promise<Book_1> => {
    const libro_axios = (await Axios.get<{docs: Book_1[]}>(`https://openlibrary.org/search.json?q=${name}`));
    const libro_data = libro_axios.data.docs;
    const libro = {
        key: libro_data[0].key,
        title: libro_data[0].title,
        cover_i: libro_data[0].cover_i,
        author_name: libro_data[0].author_name[0],
        authors: libro_data[0].authors,
    }

    return libro;
}