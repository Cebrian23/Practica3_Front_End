import { FunctionalComponent } from "preact/src/index.d.ts";
import { Author, Book_1, Books } from "../types.ts";
import { Filtrar_Libros, Filtrar_Libros2 } from "../utils.ts";

type Data = {
    author: Author;
    books: Books;
    //books: Book_1[];
}

const Book: FunctionalComponent<Data> = (props) => {
    const author = props.author;
    const books_filtrados = Filtrar_Libros(props.books);
    
    //console.log(author)

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
                <ul>
                    <ul>
                        {books_filtrados.entries.map((b) => {
                            const key = b.key.replace("/works/", "");
                            return (
                                <li key={b.key}>
                                    <a href={`/book/${key}`}>{b.title}</a>
                                </li>
                            );
                        })}
                    </ul>
                </ul>
                
            </div>
            
        </div>
    );
}
export default Book;