import './Products.css'
import { AddToCartIcon } from "./Icons"

export const Products = ({products}) => {
    return (
        <main className='products'>
            <ul>
                {products.slice(0,30).map(product => (
                    <li key={product.id}>
                        <img 
                            src={product.thumbnail} 
                            alt={product.title} />
                        <div>{product.title}</div>
                        <div>${product.price}</div>
                        <div>
                            <button>
                                <AddToCartIcon/>
                            </button>
                        </div>
                    </li>
                )
                )}
            </ul>
        </main>
    );
};
