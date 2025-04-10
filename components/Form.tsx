import { FunctionalComponent } from "preact";

const Form: FunctionalComponent = () => {
    return(
        <div>
            <form action="/search" class="formulario">
                <input type="text" name="book" placeholder="Introduce el nombre del libro"/>
                <button type="submit">Buscar</button>
            </form>
        </div>
    );
}

export default Form