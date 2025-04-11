import { FunctionalComponent } from "preact";
import { Book_1 } from "../types.ts";

type Data = {
    docs: Book_1[];
}

const Book_search: FunctionalComponent<Data> = (props) => {
    const books = props.docs;
    
    return(
        <div class="grid">
            {books.map((b) => {
                const key = b.key.replace("/works/", "");
                return (
                    <div key={key} class="tarjeta">
                        <h1>{b.title}</h1>
                        <img src={`https://covers.openlibrary.org/b/id/${b.cover_i}-L.jpg`}/>
                        <div>
                            <div>
                                <h2 class="en_linea">Autor:
                                    <span class="sin_resaltar"> {b.author_name}</span>
                                </h2>
                            </div>
                            <div>
                                <h2 class="en_linea">Más información:
                                    <a href={`/book/${key}`} class="sin_resaltar"> {key}</a>
                                </h2>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
export default Book_search;