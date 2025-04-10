import { FreshContext, Handlers } from "$fresh/server.ts";
import { featuredBooks } from "../books.ts";

export const handler: Handlers = {
  GET: async(_req: Request, ctx: FreshContext<unknown>) => {
    const libros = featuredBooks;

    return ctx.render();
  }
}

const Page = () => {
  return(
    <div class="grid">
    </div>
  );
}

export default Page;