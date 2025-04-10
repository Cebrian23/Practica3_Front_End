import { FreshContext, Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET: async(_req: Request, ctx: FreshContext) => {
    //

    return ctx.render();
  }
}

const Page = () => {
  return(
    <>
    </>
  );
}

export default Page;