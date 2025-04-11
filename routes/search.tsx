import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Form from "../components/Form.tsx";
import Axios from "npm:axios";
import { Book_1 } from "../types.ts";
import Book_search from "../components/Book_search.tsx";

type Data = {
  docs?: Book_1[];
  error?:string,
  enviado?: boolean,
}

export const handler:Handlers = {
  GET: async(req:Request, ctx: FreshContext<unknown,Data>) => {
    const url = new URL(req.url);
    const book = url.searchParams.get("book");

    if (!book) {
      return ctx.render({});
    }

    try{
      const response = await Axios.get<Data>(`https://openlibrary.org/search.json?q=${book}`);
      //console.log(response.data);
      return ctx.render({docs: response.data.docs, enviado: true});
    }
    catch(e){
      return new Response("Error en la API");
    }
  }
}

const Page = (props: PageProps<Data>) => {
    console.log(props.data);
    const books = props.data.docs;
    const error = props.data.error;
    const enviado = props.data.enviado;

    return(
        <div>
           <Form/>
           {books && enviado && <Book_search docs={books}/>}
           {enviado && books?.length === 0 &&  <p class="centrar">No se ha encontrado ningún libro</p>}
           {error && error}
        </div>
    );
}
export default Page;