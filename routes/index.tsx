import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { featuredBooks } from "../books.ts";
import Book_search from "../components/Book_search.tsx";
import { Book_1 } from "../types.ts";
import { Devolver_1 } from "../utils.ts";

type Data = {
  book: Book_1[];
}

export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown>) => {
    const libro_name = featuredBooks;
    //console.log(libros);
    const libros = await Promise.all(libro_name.map((n) => Devolver_1(n)));

    return ctx.render({book: libros});
  }
}

const Page = (props: PageProps<Data>) => {
  const libros = props.data.book;

  return(
    <div class="grid">
      <Book_search docs={libros}/>
    </div>
  );
}

export default Page;