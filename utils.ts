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