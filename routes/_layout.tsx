import { PageProps } from "$fresh/server.ts";
import Head from "../components/Head.tsx";

const Layout = ({Component}: PageProps) => {
    return(
        <>
            <Head/>
            <div>
                <Component/>
            </div>
        </>
    );
}

export default Layout;