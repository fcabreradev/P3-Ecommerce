import {Filters} from "./Filters"
export function Header ({changeFilters}) {
    return (
        <header>
            <h1>REACT SHOP</h1>
            <Filters onChange={changeFilters}/>
        </header>
    )
}