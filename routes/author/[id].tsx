import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios"
import Autor from "../../components/Autor.tsx";
import { Author, Book_1, Books } from "../../types.ts"

type Data = {
    author: Author;
    //books: Books;
    books: Book_1[];
}

export const handler:Handlers = {
    GET: async(_req:Request, ctx: FreshContext<unknown,Data>) => {
      const {id} = ctx.params;
        try{
          const response = await Axios.get<Author>(`https:openlibrary.org/authors/${id}.json`);
          //const response2 = await Axios.get<Books>(`https:openlibrary.org/authors/${id}/works.json`);
          const response2 = await Axios.get<Book_1[]>(`https://openlibrary.org/authors/${id}/works.json`);
          
          return ctx.render({author: response.data, books: response2.data});
        }catch(e){
          return new Response("Error en la API");
        }
    }
  }

  const Page = (props: PageProps<Data>) => {
    const author = props.data.author;
    const books = props.data.books;
    return(
        <div>
           <Autor author={author} books={books}/>
        </div>
    );
}
export default Page;