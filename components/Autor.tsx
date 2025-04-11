import { FunctionalComponent } from "preact/src/index.d.ts";
import { Author, Book_1, } from "../types.ts";
import { Filtrar_Libros2 } from "../utils.ts";
import Book_author from "./Book_author.tsx";

type Data = {
    author: Author;
    books: Book_1[];
}

const Book: FunctionalComponent<Data> = (props) => {
    const author = props.author;
    const books_filtrados = Filtrar_Libros2(props.books);

    return (
        <div>
            <h1>Página de {author.name}</h1>
            <div>
                <ul>
                    <li>
                        <h2 class="en_linea">Nombre: <span class="sin_resaltar">{author.name}</span></h2> 
                    </li>
                    <li>
                        <h2 class="en_linea">Biografía: <span class="sin_resaltar">{author.bio}</span></h2> 
                    </li>
                    <li>
                        <h2>Books: </h2>
                    </li>
                </ul>
            </div>
            <div>
                <Book_author docs={books_filtrados}/>
            </div>
            
        </div>
    );
}

export default Book;