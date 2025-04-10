import { FunctionalComponent } from "preact";

const Form: FunctionalComponent = () => {
    return(
        <div class="formulario">
            <form action="/search">
                <input type="text" name="book" placeholder="introduce un libro"/>
                <button type="submit">Buscar</button>
            </form>
        </div>
    );
}

export default Form