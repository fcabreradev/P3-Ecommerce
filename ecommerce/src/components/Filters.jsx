import './Filters.css'
import {useState} from 'react'
export function Filters ({onChange}) {
    const [maxPrice, setMaxPrice] = useState(1000)

    const handleChangeMaxPrice = (event) =>{
        setMaxPrice(event.target.value)
        onChange(prevState => ({
            ...prevState,
            maxPrice:event.target.value
        }))
    }

    const handleChangeCategory = (event) =>{
        onChange(prevState => ({
            ...prevState,
            category:event.target.value
        }))
    }

    return(
        <section className='filters'>
            <div>
                <label htmlFor="price">Precio</label>
                <input 
                type="range"
                id="price"
                min= '0'
                max= '1000' 
                onChange={handleChangeMaxPrice}/>
                <span>{maxPrice}</span>
            </div>

            <div>
                <label htmlFor="category">Categoría</label>
                <select id="category" onChange={handleChangeCategory}>
                    <option value="all">Todas</option>
                    <option value="home-decoration">Deco-hogar</option>
                    <option value="skincare">Cosméticos</option>
                    <option value="laptops">Laptops</option>
                    <option value="smartphones">Celulares</option>
                    <option value="groceries">Comestibles</option>

                </select>
            </div>
        </section>
    )
}