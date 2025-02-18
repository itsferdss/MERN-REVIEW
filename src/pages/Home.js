import { useEffect, useState} from 'react'

import ProductBox from '../components/ProductBox'
import AddProduct from '../components/AddProduct'

const Home = () => {

    const [products, setProducts] = useState(null)

    const fetchProducts = async () => {
        const response = await fetch('/api/product');
        const json = await response.json();

        if (response.ok) {
            setProducts(json); 
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return(
        <div className="home">
            <div className="products">
                {products && products.map((product) => (
                    <ProductBox key={product._id} product={product} fetchProducts={fetchProducts}/>
                ))}
            </div>
            <AddProduct fetchProducts={fetchProducts}/>
            {openModal && <Modal openModal={openModal} setOpenModal={setOpenModal}/>}
        </div>
    )
}

export default Home;