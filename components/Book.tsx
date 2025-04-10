import { FunctionalComponent } from "preact/src/index.d.ts";
import { Book_2 } from "../types.ts";

type Data = {
  book: Book_2;
}

const Book: FunctionalComponent<Data> = (props) => {
    const book = props.book;
    const author = book.authors[0].author.key.replace("/authors/", "");

    console.log(book);
    
    if(book.covers){
        return(
            <div>
                <h1>Página de {book.title}</h1>
                {
                    <img src={`https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg`}/>
                }
                <ul>
                    <li>
                        <h2 class="en_linea">Título: <span class="sin_resaltar">{book.title}</span></h2>
                    </li>
                    <li>
                        <h2 class="en_linea">Descripción: <span class="sin_resaltar">{book.description}</span></h2>
                    </li>
                    <li>
                        <h2 class="en_linea">Enlace a la página del autor: 
                            <a href={`/author/${author}`} class="sin_resaltar"> {author}</a>
                        </h2>
                    </li>
                    <li>
                        <h2 class="en_linea">Fecha de publicación: <span class="sin_resaltar">{book.created.value}</span></h2>
                    </li>
                </ul>
            </div>
        );
    }

    return(
        <div>
            <h1>Página de {book.title}</h1>
            <ul>
                <li>
                    <h2 class="en_linea">Título: <span class="sin_resaltar">{book.title}</span></h2>
                </li>
                <li>
                    <h2 class="en_linea">Descripción: <span class="sin_resaltar">{book.description}</span></h2>
                </li>
                <li>
                    <h2 class="en_linea">Autor: 
                        <a href={`/author/${author}`} class="sin_resaltar"> {author}</a>
                    </h2>
                </li>
                <li>
                    <h2 class="en_linea">Fecha de publicación: <span class="sin_resaltar">{book.created.value}</span></h2>
                </li>
            </ul>
        </div>
    );
}
export default Book;