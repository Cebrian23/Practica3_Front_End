import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios"
import Book from "../../components/Book.tsx";
import { Book_2 } from "../../types.ts";

type Data = {
  book: Book_2;
}

export const handler:Handlers = {
    GET: async(_req:Request, ctx: FreshContext<unknown,Data>) => {
      const {id} = ctx.params;
        try{
          const response = await Axios.get<Book_2>(`https:openlibrary.org/works/${id}.json`);
          return ctx.render({book: response.data});
        }catch(e){
          return new Response("Error en la API");
        }
    }
  }

  const Page = (props: PageProps<Data>) => {
    const book = props.data.book;

    return(
        <div>
           <Book book={book}/>
        </div>
    );
}
export default Page;