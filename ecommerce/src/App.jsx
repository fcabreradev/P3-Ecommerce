import {Products} from "./components/Products"
import {products} from './mocks/products.json'

function App() {

  return (
    <Products products={products}></Products>
  )
}

export default App
