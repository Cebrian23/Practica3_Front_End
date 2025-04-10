import { FunctionalComponent } from "preact/src/index.d.ts";

const Head: FunctionalComponent = () => {
    return(
        <div class="head">
            <a href={`/`}>Home</a>
            <a href={`/search`}>Buscar libro</a>
        </div>
    );
}

export default Head;